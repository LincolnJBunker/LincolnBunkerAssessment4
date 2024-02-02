import DaySupply from "./DaySupply"
import Instructions from "./Instructions"
import ModeButtons from "./ModeButtons"
import Prescription from "./Prescription"
import Refills from "./Refills"
import Doctor from "./Doctor"
import { useState } from "react"

function MedicationTableRow({initialMedicationData, initialEditing}) {
    const [editMode, setEditMode] = useState(initialEditing)
    //make the data types state 
    const [prescription, setPrescription] = useState(initialMedicationData.prescription);
    const [doctor, setDoctor] = useState(initialMedicationData.doctor);
    const [instructions, setInstructions] = useState(initialMedicationData.instructions);
    const [daySupply, setDaySupply] = useState(initialMedicationData.daySupply)
    const [refills, setRefills] = useState(initialMedicationData.refills);

    //destructure the prop initialMedicationData
    // const { prescription, doctor, instructions, daySupply, refills} = initialMedicationData

  return (
    <tr>
        <ModeButtons value={false} />
        <Prescription value={prescription} isEditing={initialEditing} />
        <Doctor value={doctor} isEditing={initialEditing} />
        <Instructions value={instructions} isEditing={initialEditing}/>
        <DaySupply value={daySupply} isEditing={initialEditing} />
        <Refills value={refills} isEditing={initialEditing} />
    </tr>
  )
}

export default MedicationTableRow