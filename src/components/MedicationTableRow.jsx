import DaySupply from "./DaySupply"
import Instructions from "./Instructions"
import ModeButtons from "./ModeButtons"
import Prescription from "./Prescription"
import Refills from "./Refills"
import Doctor from "./Doctor"
import { useState } from "react"

function MedicationTableRow({initialMedicationData, initialEditing, deleteFunc}) {
    //make edit mode state and set its inital state to initialEditing
    const [editMode, setEditMode] = useState(initialEditing)
    //make the data types state 
    const [prescription, setPrescription] = useState(initialMedicationData.prescription);
    const [doctor, setDoctor] = useState(initialMedicationData.doctor);
    const [instructions, setInstructions] = useState(initialMedicationData.instructions);
    const [daySupply, setDaySupply] = useState(initialMedicationData.daySupply)
    const [refills, setRefills] = useState(initialMedicationData.refills);

    const makeEditMode = () => setEditMode(true);
    const makeNormalMode = () => setEditMode(false)

    //destructure the prop initialMedicationData
    // const { prescription, doctor, instructions, daySupply, refills} = initialMedicationData

  return (
    <tr>
        <ModeButtons 
        isEditing={editMode}
        saveClick={makeNormalMode}
        editClick={makeEditMode}
        deleteFunc={deleteFunc}
        />
        <Prescription 
        isEditing={editMode}
        value={prescription} 
        onValueChange={setPrescription}
         />
        <Doctor 
        isEditing={editMode}
        value={doctor} 
        onValueChange={setDoctor} 
        />
        <Instructions 
        isEditing={editMode}
        value={instructions} 
        onValueChange={setInstructions} 
        />
        <DaySupply 
        isEditing={editMode}
        value={daySupply} 
        onValueChange={setDaySupply}
        />
        <Refills 
        isEditing={editMode}
        value={refills} 
        onValueChange={setRefills}
         />
    </tr>
  )
}

export default MedicationTableRow