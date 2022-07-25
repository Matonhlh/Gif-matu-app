import { useState } from "react";
import { useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({category})=>{
 
  const{images, isLoading} = useFetchGifs(category)

 // const[images, setImages]= useState([]);
  
 
 // const getImages= async()=>{
  //  const newImages= await getGifs(category);
   // setImages(newImages);
 // }


 // useEffect(()=>{
  // getImages();
 // },[])
 

    return(
        <>
           <h3>{category}</h3>
           {
            isLoading && (<h2>Cargando...</h2>)
           }

           <ol>
            {
              images.map((img)=>(
                <GifItem 
                key={img.id}
                {...img}/>
              ))
            }
           </ol>
        
        </>
    )
}