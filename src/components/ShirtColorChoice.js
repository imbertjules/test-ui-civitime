import React from 'react'
import head from '../assets/t-shirt.svg'
import marron from '../assets/color-88C10F.svg'
import lightPink from '../assets/color-B2C7C7.svg'
import pink from '../assets/color-FF1414.svg'
import striped from '../assets/color-striped.svg'
import '../style/ColorChoice.css'

const ShirtColorChoice = (props) => {
    return (<>
        <div className="color">
            <article>
                <figure>
                    <img src={head} alt=""/>
                </figure>
            </article>
            <article>
                <figure className="cursor">
                    <img onClick={props.shirt} className="#B2C7C7" src={lightPink} alt=""/>
                </figure>
            </article>
            <article>
                <figure className="cursor">
                    <img onClick={props.shirt} className="#88C10F" src={marron} alt=""/>
                </figure>
            </article>
            <article>
                <figure className="cursor">
                    <img onClick={props.shirt} className="#FF1414" src={pink} alt=""/>
                </figure>
            </article>
            <article>
                <figure className="cursor">
                    <img onClick={props.line} src={striped} alt=""/>
                </figure>
            </article>

        </div>
    </>)
}

export default ShirtColorChoice;
