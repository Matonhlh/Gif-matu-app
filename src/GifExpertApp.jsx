import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([`One Punch`]);

  const onAddCategory = (NewCategory)=>{
    if(categories.includes(NewCategory)) return;

    setCategories([NewCategory, ...categories]);

  }

  return (
   <>  
       {/*titulo*/}
       <h1>GifExpertApp Matute</h1>

       {/*imput*/}
       <AddCategory onNewCategory={(event)=>onAddCategory(event)}/>

       {/*listado de gif*/}
       <ol>
           { 
             categories.map(category => (
                 <GifGrid 
                     key={category}
                     category={category}/>
                ))
          }
       </ol>
          {/*gif item*/}
   </>
  )
}
