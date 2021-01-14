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
    "Augustus Gloop": augustus_gloop,
    "Babe": babe, 
    "Bailey": bailey,
    "Cherub": cherub,
    "Galaxy Note": galaxy_note,
    "Leggo my eggo": leggo_my_eggo,
    "Peppa": peppa,
    "Piggy Smalls": piggy_smalls,
    "Piglet": piglet,
    "Porkchop": porkchop,
    "Trouble": trouble,
    "Truffle Shuffle": truffle_shuffle
}

//Specialty: {specialty} Is greased: {greased} Weight: {weight}

function Pig({name, specialty, greased, weight, medal, onRemovePig}){

    //const imageName = name.split(" ").join("_").toLowerCase();
    const pigImg = pigsImagesObj[name]
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