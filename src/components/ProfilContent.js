import React, {useState} from 'react'
import ManSVG from "./ManSVG";
import SkinColorChoice from "./SkinColorChoice";
import ShirtColorChoice from "./ShirtColorChoice";
import WomanSVG from "./WomanSVG";
import '../style/ProfilContent.css'

const ProfilContent = (props) => {
    const [skin, setSkin] = useState("#FCD7B8")
    const [shirt, setShirt] = useState("#B2C7C7")
    const [line, setLine] = useState(true)
    const [chooseType, setType] = useState("")

    const skinColor = (event) => {
        setSkin(event.currentTarget.className)
    }

    const shirtColor = (event) => {
        setShirt(event.currentTarget.className)
        setLine(true)
    }

    const selectLine = () => {
        setLine(false)
    }

    return (
        <>
            <p className="question"> Lequel de ces deux avatars préférez-vous?</p>
            <div className="profilImageContainer">
                <div className="iconeContainer">
                    {(chooseType !== 'woman') ? (
                        <div onClick={() => setType("man")}>
                            <ManSVG skin={skin}
                                    shirt={shirt}
                                    line={line}/>
                        </div>) : <></>
                    }
                    {(chooseType !== 'man') ? (
                        <div onClick={() => setType("woman")}>
                            <WomanSVG skin={skin}
                                      shirt={shirt}
                                      line={line}/>
                        </div>
                    ) : <></>}
                </div>
                <div className="lineContainer">
                    <div className="line"/>
                </div>
                <div className="colorContainer">
                    <SkinColorChoice skin={skinColor}/>
                    <ShirtColorChoice shirt={shirtColor} line={selectLine}/>
                </div>
                <div className="buttonContainer">
                    <button className="validateButton">Valider</button>
                </div>
            </div>
        </>
    )
}
export default ProfilContent;