import DaySupply from "./DaySupply"
import Instructions from "./Instructions"
import ModeButtons from "./ModeButtons"
import Prescription from "./Prescription"
import Refills from "./Refills"
import Doctor from "./Doctor"

function MedicationTableRow({initialMedicationData, initialEditing}) {
    //destructure the prop initialMedicationData
    const { prescription, doctor, instructions, daySupply, refills} = initialMedicationData

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