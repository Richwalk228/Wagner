import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import slideUno from "../pictures/slideUno.jpg";
import slideDos from "../pictures/slideDos.jpg";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src ={slideUno} alt="" /></div>
        <div className="embla__slide"> <img src ={slideDos} alt="" /></div>
        
      </div>
    </div>
  )
}