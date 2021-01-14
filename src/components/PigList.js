import React from "react";
import Pig from "./Pig";

//{name: "Babe", specialty: "Being incredibly cute", greased: false, weight: 2, highest medal achieved: "bronze"}

function PigList({pigList, onRemovePig}){

    //console.log({pigList})

    const pigsMapped = pigList.map((pig) => (
        <Pig 
        key={pig.name}
        name={pig.name} 
        specialty={pig.specialty}
        greased={pig.greased}
        weight={pig.weight}
        medal = {pig['highest medal achieved']} //asdFadsfajsFJasdlkfjas
        onRemovePig={onRemovePig}
        />

    ))

    //console.log(pigsMapped)

    return (
    <div>
        {pigsMapped}
    </div>
    )
}


export default PigList;