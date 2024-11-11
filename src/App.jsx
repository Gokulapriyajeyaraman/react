import {useState} from 'react'
import {faviImage} from './datas.jsx'
import Component from './Component.jsx'

import './App.css'

function App() {
  const[indexValue, set_Index] =useState(0);
  
  
  const icon = document.getElementById("fav1").href = faviImage[indexValue].image;
  
   
  function handleclick(image,Index){
    
          const favi = document.getElementById("fav1");
          favi.href = image; 
          set_Index(Index);
           
  }
   

  return (
    <div className='flex mt-5 justify-center'>
      
      {faviImage.map(imageItem => 
      <Component 
          currentId = {imageItem.id}  
          onclick = {()=>handleclick(imageItem.image, imageItem.id ) }
          index_Value = {indexValue} 
      
      >
        Click to change favicon
      </Component>)} 
    
       
    </div>
  )
}

export default App
