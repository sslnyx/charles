import { useState, useEffect } from 'react';
import { fitBoundsWithPadding } from '../../lib/plugins';


const Marker = (options) => {
    const { icon, bounds, position, map, info, setActiveMarker, activeMarker, mainMarker, count, label } = options

    const [marker, setMarker] = useState();


    useEffect(() => {
        if (!marker) {
            const theMarker = new google.maps.Marker();
            setMarker(theMarker);
            // console.log(theMarker, info);
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                google.maps.event.clearInstanceListeners(marker);
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) {
            marker.setOptions({
                icon,
                map,
                position,
                label: label
            });
            bounds.extend(position)
            // map.fitBounds(bounds, 10);
            // console.log("marker")

            setTimeout(() => {
                if (window.innerWidth <= 420) {
                    map.fitBounds(bounds, 20);
                } else {
                    // console.log("bounce fit")
                    fitBoundsWithPadding(map, bounds, { left: 10, bottom: 50, right: 420, top: 50 })
                }
            }, 10);


            const infowindow = new google.maps.InfoWindow({
                content: info,
            });

            if (!mainMarker && setActiveMarker && activeMarker) {
                marker.addListener("click", () => {
                    activeMarker[count].infowindow = infowindow

                    activeMarker.forEach(el => {
                        el?.infowindow?.close();
                    });

                    infowindow.open({
                        anchor: marker,
                        map,
                        shouldFocus: false,
                    });
                });

                activeMarker[count] = marker
                setActiveMarker([activeMarker])
            }
        }

    }, [marker, bounds]);

    return null;
}

export default Marker