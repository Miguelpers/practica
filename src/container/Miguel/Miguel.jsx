import React from 'react'

import './Miguel.scss';

const Miguel = () => {
  return (
    <div className="app__miguel">
        <div className="app__miguel-section">
			<div className="app__miguel-title">
			    <h1>Miguel</h1>
			</div>
			<div className="app__miguel-excerpt">
				<p className="p-text"></p>
				<div> 
				 <img src="https://dummyimage.com/200x200/000/fff" alt="imagen 1"/>  
					<span> Según estudio, el nivel de felicidad de una persona promedio disminuye después de los 21 años </span>
					
				</div>
				<div> 
				  <img src="https://dummyimage.com/200x200/000/fff" alt="imagen 1"/>  
					<span> Según estudio, el nivel de felicidad de una persona promedio disminuye después de los 21 años </span>
					
				</div>
				<div> 
				  <img src="https://dummyimage.com/200x200/000/fff" alt="imagen 1"/>  
					<span> Según estudio, el nivel de felicidad de una persona promedio disminuye después de los 21 años </span>
					
				</div>
			</div>
		</div>
    </div>
  )
}

export default Miguel;