import { useState } from "react"
import PropTypes from 'prop-types'
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    //
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        //Validamos para que no agreguen textos vacios
        if (inputValue.trim().length < 1) return;

        //Agregamos el valor con un callback para asi tener los valores anteriores y luego se ocupa un spread operator para agregarlos
        // setCategories(categories => [inputValue, ...categories]);
        
        onNewCategory(inputValue.trim());
        //Limpiamos
        setInputValue('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}