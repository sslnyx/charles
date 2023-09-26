// import React from 'react'
import { useEffect, useRef, useState } from "react"
import { useOutletContext } from "react-router-dom";
// import styles from "./map-style.json"
import Marker from "./Marker";

import AccordionWrap from "../../components/AccordionWrap";
import AccordionContent from "../../components/AccordionContent";
import AccordionTitle from "../../components/AccordionTitle";

const Map = (props) => {
    const { map: { styles, mapOptions, markers, markerColors } } = useOutletContext();

    const [map, setMap] = useState();
    const [bounds, setBounds] = useState(new google.maps.LatLngBounds());
    const [allMarkers, setAllMarkers] = useState([]);
    const [selectedMarkers, setSelectedMarkers] = useState();
    const [selectedCat, setSelectedCat] = useState();

    const [activeMarker, setActiveMarker] = useState([]);
    const [activeWindow, setActiveWindow] = useState();

    const gMap = useRef();

    const listRef = useRef({});
    const btnRef = useRef({});



    const siteMarker = {
        position: { lat: 49.2519042, lng: -123.0768173 },
        icon: {
            url: "/img/full/location/map/site-pin.png",
            scaledSize: new google.maps.Size(135, 93)
        }
    }

    const markerStyles = {
        path: google.maps.SymbolPath.CIRCLE, scale: 12, fillOpacity: 1,
        strokeWeight: 0
    }

    const mapHandler = (cat, title) => {
        setActiveMarker([])
        setSelectedMarkers(null);


        setBounds(new google.maps.LatLngBounds())
        bounds.extend(siteMarker.position)

        setTimeout(() => {
            setSelectedCat(cat)
            cat === "all" ?
                setSelectedMarkers(allMarkers) : title ?
                    setSelectedMarkers([markers[cat].find((el) => el.title === title)]) :
                    setSelectedMarkers(markers[cat])
        }, 0)

    }

    const mapListHandler = (title) => {
        // console.log(listRef)

        for (const el in listRef.current) {
            listRef.current[el].classList.remove("activeMaplist")
        }

        listRef.current[title].classList.add("activeMaplist")
    }

    useEffect(() => {

        activeMarker.length && activeMarker[0].length === 1 ? (
            google.maps.event.trigger(activeMarker[0][0], 'click')
        ) : ""

        // console.log(activeMarker)

    }, [activeMarker])


    useEffect(() => {
        // console.log(map)
        if (gMap.current && !map && mapOptions) {
            setMap(new window.google.maps.Map(gMap.current, { ...mapOptions, styles }));

            setTimeout(() => {

                let m = [];

                Object.entries(markers).forEach(([cat, el]) => {
                    el.forEach(val => {
                        val.cat = cat
                    })
                    m = [...m, ...el]
                })

                setAllMarkers(m);
                setSelectedMarkers(m);

            }, 500);
        }
    }, [gMap.current, map, mapOptions])




    return (
        <section id="map">

            <div className="container relative px-0 md:px-[22px]">
                <div className="bg-gray w-full md:w-[375px] bg-opacity-50 py-10 text-white px-[22px] md:absolute right-0 z-10 h-full mr-0 md:mr-[22px] overflow-y-scroll">
                    <AccordionWrap accordionId="mapList">
                        <AccordionTitle btnRef={btnRef} id="all">
                            <div className="w-full text-base" onClick={() => mapHandler("all")}>
                                All
                            </div>
                        </AccordionTitle>
                        <AccordionContent id="all" accordionId="mapList">
                        </AccordionContent>
                        {Object.entries(markers).map(([cat, val], i) => (
                            <div key={cat}>
                                <AccordionTitle btnRef={btnRef} id={i} mapHandler={() => mapHandler(cat)} accordionId="mapList">
                                    <div className="flex items-center w-full">
                                        <div className="w-[15px] h-[15px] rounded-full mr-5" style={{ background: markerColors[cat] }}></div>
                                        <div className="mr-5 text-base">{cat}</div>
                                    </div>
                                </AccordionTitle>
                                <AccordionContent id={i} accordionId="mapList">
                                    <ul className="">
                                        {val.map(({ title }, i) => (
                                            <li ref={(el) => listRef.current[title] = el} key={i} className="py-1 md:py-3 px-5 cursor-pointer transition-all duration-500" onClick={() => { mapHandler(cat, title), mapListHandler(title) }}>
                                                <span>{`${i + 1}. `}</span>
                                                {title}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </div>
                        ))}
                    </AccordionWrap>
                </div>


                <div className="">
                    <div className="w-full min-h-[400px] aspect-[9/16] md:aspect-[2/1]" ref={gMap}></div>

                    <Marker map={map} {...siteMarker} bounds={bounds} mainMarker={true} label="" />

                    {selectedMarkers?.map(({ coordinates, cat, title, label }, i) => (
                        <Marker key={i} count={i} map={map} position={{ lat: coordinates[0], lng: coordinates[1] }} icon={{ ...markerStyles, fillColor: markerColors[cat ? cat : selectedCat] }} bounds={bounds} info={title} {...{ activeMarker, setActiveMarker, activeWindow, setActiveWindow }} label={{text: String(label), color: "white"}}/>
                    ))}

                </div>

            </div >

        </section >
    )
}

export default Map