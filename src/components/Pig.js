import React, {useState} from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";


const pigsImagesObj ={
    augustus_gloop: augustus_gloop,
    babe: babe, 
    bailey: bailey,
    cherub: cherub,
    galaxy_note: galaxy_note,
    leggo_my_eggo: leggo_my_eggo,
    peppa: peppa,
    piggy_smalls: piggy_smalls,
    piglet: piglet,
    porkchop: porkchop,
    trouble: trouble,
    truffle_shuffle: truffle_shuffle
}

//Specialty: {specialty} Is greased: {greased} Weight: {weight}

function Pig({name, specialty, greased, weight, medal, onRemovePig}){

    const imageName = name.split(" ").join("_").toLowerCase();
    const pigImg = pigsImagesObj[imageName]
    const [showDetails, changeShowDetail] = useState(false)


    function handleDetails(event) {
        changeShowDetail(!showDetails)
    }
    //console.log(name, greased)

    function hidePig(event) {
        //console.log(name)
        onRemovePig(name);
    }

    return(
        <div onClick={handleDetails}>
            <img src={pigImg}/>
            <p> Name: {name} </p>
            <button onClick={hidePig}> Hide! </button>
            {showDetails ? <p>Specialty: {specialty} Is greased: {greased.toString()} Weight: {weight} Highest-Medal: {medal}</p> : null}
            <br></br>
        </div>
    )
}

export default Pig;