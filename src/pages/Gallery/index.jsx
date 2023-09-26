// import React from 'react'
import { useState, useRef } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import Arrow from '../../components/Arrow'
import { Helmet } from 'react-helmet'


const Gallery = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            const currentIdx = slider.track.details.rel;
            setCurrentSlide(currentIdx)

            slider.slides.forEach((slide) => {
                slide.classList.remove("activeSlide")
            })

            slider.slides[currentIdx].classList.add("activeSlide")
        },
        slides: {
            origin: "center",
            perView: "auto",
        },
        loop: true,
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="bg-bwhite bg-opacity-50 flex-1">
            <Helmet title='Gallery' />
            <section>
                <div className="container">

                    <div ref={sliderRef} className="keen-slider relative h-[230px] md:h-[600px] 2xl:h-[800px] mx-auto">

                        {Array(30).fill(null).map((el, i) => (
                            <div key={i} className={`keen-slider__slide slide-${i} min-w-[80%] flex items-center ${i === 0 ? "activeSlide" : ""}`}>
                                <img className={`w-full h-[90%] object-cover object-top transition-all duration-500 grayscale`} src={`/img/full/gallery/g${i}.jpg`} />
                            </div>
                        ))}



                        {loaded && instanceRef.current && (
                            <>
                                <Arrow
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />

                                <Arrow
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </>
                        )}

                    </div>



                </div>

            </section>
        </div>
    )
}

export default Gallery