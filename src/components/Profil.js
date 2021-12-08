import React from 'react'
import ProfilContent from './ProfilContent'
import '../style/Profil.css'
import '../style/Reset.css'

const Profil = () => {
    return (
        <div className="app">
            <div className="profil">
                <div className="headerProfil">
                    <h1 className="titleProfil">Profil</h1>
                </div>
                <ProfilContent/>
            </div>
        </div>
    )
}

export default Profil;
