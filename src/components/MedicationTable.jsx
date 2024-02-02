import MedicationTableHeader from "./MedicationTableHeader";
import MedicationTableRow from "./MedicationTableRow";
import AddMedicationButton from "./AddMedicationButton";
import ModeButtons from "./ModeButtons";
import Prescription from "./Prescription";
import Doctor from "./Doctor";
import Instructions from "./Instructions";
import DaySupply from "./DaySupply";
import Refills from "./Refills";


function MedicationTable() {
  return (
    <div>
        <table>
            <thead>
                <MedicationTableHeader />
            </thead>

            <tbody>
                <ModeButtons isEditing={false} />
                <Prescription value="Adderall" isEditing={false} />
                <Doctor value="Dr. Anderson" isEditing={false} />
                <Instructions value="Take 1 pill daily" isEditing={false} />
                <DaySupply value={30} isEditing={false} />
                <Refills value={0} is isEditing={false} />
            </tbody>

            <tbody>
                <ModeButtons isEditing={true} />
                <Prescription value="viagra" isEditing={true} />
                <Doctor value="Dr. Anderson" isEditing={true} />
                <Instructions value="Take 1 pill daily" isEditing={true} />
                <DaySupply value={30} isEditing={true} />
                <Refills value={0} is isEditing={true} />
            </tbody>

            <tfoot>
                <AddMedicationButton />
            </tfoot>
        </table>
    </div>
  )
}

export default MedicationTable