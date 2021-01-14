import React, {useState} from "react";
import Nav from "./Nav";
import PigList from "./PigList";
import hogs from "../porkers_data";

function App() {

  const [pigList, setPigs] = useState(hogs)
  const [greased, setGreased] = useState(false);
  // const [sortWeightValue, setSortWeight] = useState(false);
  // const [sortNameValue, setSortName] = useState(false);

  //console.log(hogs)
  //console.log(hogs[0])
  //sortedHogsByName = hogs.sort((a, b) => b.name - a.name)
  //sortedHogsByWeight = hogs.sort(function(a,b) => {return a.weight - b.weight})

  function changeGreased(event){
    setGreased(!greased)
  }

  
  let filterPigList = pigList
    .filter((pig) =>(greased ? pig.greased : true))


  function sortName(){
    const sortedHogsByName = filterPigList.sort((a, b) => {
      let nameA = a.name.toUpperCase()
      let nameB = b.name.toUpperCase()
      if(nameA < nameB) return -1
      else if(nameA > nameB) return 1
      else return 0
    })
    //console.log(sortedHogsByName)
    setPigs(sortedHogsByName)
  }

  function sortWeight(){
    const sortedHogsByWeight = filterPigList.sort((a,b) => {return a.weight - b.weight})
    //console.log(sortedHogsByWeight)
    setPigs(sortedHogsByWeight)
    //console.log(pigList);
  }

  function onRemovePig(removedName){
    setPigs((pigList).filter((pig) => pig.name !== removedName))
  }

  return (
    <div className="App">
      <Nav />
      <button onClick={changeGreased}>Filter Greased! </button>
      <button onClick={sortWeight}>Order By Weight</button>
      <button onClick={sortName}>Order By Name</button>
      <PigList pigList={filterPigList} onRemovePig={onRemovePig}/>
    </div>
  );
}

export default App;
