import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    

    const [inputValue, setInputValue] = useState('')

   
    

    const inInputChange = (event) => {
        
        setInputValue(event.target.value)
        
    }
    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length < 3){
            return
        }
        
        // setCategories(categories.concat(inputValue))
        onNewCategory(inputValue.trim())
        setInputValue('')
        
    }

  return (
        <form onSubmit={event => {
            onSubmit(event)
        }}>
            <input type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => inInputChange(event)} />
        </form>
    )
}

// console.log(inputValue)
//         setInputValue(event.target.value)