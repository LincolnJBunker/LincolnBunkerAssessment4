import MedicationTableHeader from "./MedicationTableHeader";
import MedicationTableRow from "./MedicationTableRow";
import AddMedicationButton from "./AddMedicationButton";


function MedicationTable({ initialMedicationData }) {
    //pass in the prop of initialMedicationData
    //loop through each object in the testArray
    const rows = initialMedicationData.map((medication) => {
        //destructure each individual medication to match the data
        const {id, prescription, doctor, instructions, daySupply, refills} = medication

        return (
            <MedicationTableRow
            //assing a key
            key={id}
            //start it at false
            initialEditing={true}
            //what is this doing haha??
            initialMedicationData={{prescription, doctor, instructions, daySupply, refills}}
            />
        )
    });

  return (
    <div>
        <table>
            <thead>
                <MedicationTableHeader />
            </thead>

            <tbody>
                {rows}
            </tbody>

            <tfoot>
                <AddMedicationButton />
            </tfoot>
        </table>
    </div>
  )
}

export default MedicationTable