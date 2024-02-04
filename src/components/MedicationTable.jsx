import MedicationTableHeader from "./MedicationTableHeader";
import MedicationTableRow from "./MedicationTableRow";
import AddMedicationButton from "./AddMedicationButton";
import { useState } from "react";
import axios from "axios";


function MedicationTable({ initialMedicationData }) {
    //Take initialData and turn it into state to not have to refresh it from app each time we modify it
    const [startingMedicationData, setStartingMedicationData] = useState(initialMedicationData)
    //pass in the prop of initialData
    //loop through each object in the testArray
    const rows = initialMedicationData.map((medication) => {
        //destructure each individual medication to match the data
        const {id, prescription, doctor, instructions, daySupply, refills} = medication;

        return (
            <MedicationTableRow
            //assing a key
            key={id}
            //start it at false
            initialEditing={true}
            initialMedicationData={{id, prescription, doctor, instructions, daySupply, refills}}
            //include the deleteMedicaiton function
            deleteFunc={() => deleteMedication(medication.id)}
            />
        )
    });

    // const addRow = () => {
    //     axios.post('/medication/add')
    //     .then((res) => {

    //     });
    //     setStartingMedicationData([...startingMedicationData, res.data.newMedication])

    // }

    // const deleteMedication = (id) => {
    //     axios.delete(`/medication/delete/${id}`)
    //         .then((res) => {
    //             if (res.data.status) {
    //                 const sortedResults = startingMedicationData.filter((medication) => {
    //                     return medication.id !== id
    //                 })

    //                 setStartingMedicationData(sortedResults)

    //             } else {
    //                 console.warn("not working")
    //             }
    //         })
    // }

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
                <AddMedicationButton/>
            </tfoot>
        </table>
    </div>
  )
}

export default MedicationTable