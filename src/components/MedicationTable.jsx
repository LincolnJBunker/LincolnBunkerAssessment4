import MedicationTableHeader from "./MedicationTableHeader";
import MedicationTableRow from "./MedicationTableRow";
import AddMedicationButton from "./AddMedicationButton";
import { useState } from "react";
import axios from "axios";

let globalId = 4


function MedicationTable({ initialMedicationData }) {
    //Take initialData and turn it into state to not have to refresh it from app each time we modify it
    const [startingMedicationData, setStartingMedicationData] = useState(initialMedicationData)
    //pass in the prop of initialData
    //loop through each object in the testArray
    const rows = startingMedicationData.map((medication) => {
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
    
    //the addRow Function needs to take in a blank medication
    const addRow = () => {
        //define what a new row is
        let newRow = {
            id: globalId,
            prescription: "",
            doctor: "", 
            instructions: "",
            daySupply: 0,
            refills: 0
        }
        //increment the id each time
        globalId++
        
        //make the render happen
        setStartingMedicationData([...startingMedicationData, newRow])

    }

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
                <AddMedicationButton addRow={addRow}/>
            </tfoot>
        </table>
    </div>
  )
}

export default MedicationTable