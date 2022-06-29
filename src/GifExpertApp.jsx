import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components/index'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch Man', 'Dragon Ball Z'])


    const onAddCategory = (value) => {

        if(categories.includes(value)) return;

        setCategories([value, ...categories])
    }

    
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={event => onAddCategory(event)}/>

        <button onClick={() => {onAddCategory('rick and morty')}}>Agregar</button>
       
        {
            
            categories.map((category) => {
                return <GifGrid key={category} category={category}/>
})
        }
       
    </>
  )
}
