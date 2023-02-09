import { Fragment } from 'react'
import aretestipohoops from '../images/SectionImages/aretestipohoops.jpeg'
import './card.scss'
const Cards = () => {




    return (
        <Fragment className= "jewelry_categories">
        <div className="jewelry__containers jewelry__category1">
            <h1>Aretes</h1>

           <img className= "img" src= {aretestipohoops}alt="aretes"/>
       </div>

       <div className="jewelry__containers jewelry__category2">
            <h1>Anillos</h1>

           <img className= "img" src= ""alt="aretes"/>
       </div>
       </Fragment>

    )
}

export default Cards