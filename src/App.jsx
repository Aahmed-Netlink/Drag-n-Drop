import { DndProvider } from "react-dnd"
import { v4 as uuidv4 } from 'uuid';
import { HTML5Backend } from "react-dnd-html5-backend"
import Bin from "./Components/Bin"
import Notes from "./Components/Notes"
import { useEffect, useState } from "react"
import TextFields from "./Components/TextFields";
import TextAreas from "./Components/TextAreas";
function App() {

  const [notes, setNotes] = useState(["Notes 1", "Notes 2", "Notes 3",<TextFields/>,<TextAreas/>,])
  const [binnedItems, setBinnedItems] = useState([])

  // useEffect(() => {
  //   const initialNotes = ["Notes 1", "Notes 2", "Notes 3",]
  //   setNotes(initialNotes)
  // }, [])
  
  // useEffect(()=>{
  //   let array = localStorage.getItem("binnedItems")
  //   if(array)
  //   {
  //     setBinnedItems(JSON.parse(array))
  //   }
  // },[])
console.log(notes)
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="m-4">
        <h1 className="text-3xl  text-center font-semibold mt-4 py-2">Drag-N-Drop</h1>
        {
          notes.map((item) => <Notes
            key={uuidv4()}
            note={item} 
            binnedItems={binnedItems}
            />)
        }
        <Bin binnedItems={binnedItems}/>
      </div>
    </DndProvider>
  )
}

export default App
