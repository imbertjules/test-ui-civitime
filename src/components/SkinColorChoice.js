import React from 'react'
import head from '../assets/skin.svg'
import marron from '../assets/color-533724.svg'
import lightPink from '../assets/color-E0A39A.svg'
import pink from '../assets/color-FCD7B8.svg'
import yellow from '../assets/color-FCCC84.svg'
import '../style/ColorChoice.css'

const SkinColorChoice = (props) => {
    return (
        <>
            <div className="color">
                <article className='head'>
                    <figure>
                        <img src={head} alt=""/>
                    </figure>
                </article>
                <article>
                    <figure className="cursor">
                        <img className="#FCD7B8" onClick={props.skin} src={pink} alt=""/>
                    </figure>
                </article>
                <article>
                    <figure className="cursor">
                        <img className="#E0A39A" onClick={props.skin} src={lightPink} alt=""/>
                    </figure>
                </article>
                <article>
                    <figure className="cursor">
                        <img className="#FCCC84" onClick={props.skin} src={yellow} alt=""/>
                    </figure>
                </article>

                <article>
                    <figure className="cursor">
                        <img className="#533724" onClick={props.skin} src={marron} alt=""/>
                    </figure>
                </article>
            </div>
        </>
    )
}

export default SkinColorChoice;
