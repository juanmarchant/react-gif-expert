import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    const onAddCategory = (newCategory) => {

        //Validar si este ya existe
        if (categories.find((category) => category.toLowerCase() === newCategory.toLowerCase())) return;

        //Inserta el valor en categorias
        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            <h1 >GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
};