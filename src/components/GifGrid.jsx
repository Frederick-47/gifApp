import { useEffect, useState } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)
    // console.log({images, isLoading})

  return (
    <>
        <h2>{category}</h2>
        {(isLoading)?<h3>Cargando...</h3>:null}
        
        <div className="card-grid">
            {images.map(i => {
                return <GifItem key={i.id} {...i} />
                
            })}
            {/* {
                console.log(images)
            } */}
        </div>

        
    </>
  )
}
