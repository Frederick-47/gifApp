import React, {useState} from 'react'

import { Fragment } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Berzerk', 'Vagabond', 'One Piece'];

    const [categories, setCategories] = useState(['bruce lee']);

    // const hunter = 'hunterXhunter'

    // const handleAdd = () => {
    //     setCategories([...categories, hunter])
    // }


  return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} categories={categories}/>
        <hr></hr>
        <div>
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category}/>
                    })
                }
            </ol>
        </div>
        </>
    )
  
}
