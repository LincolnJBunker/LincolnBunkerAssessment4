let drug_data = [
    { id: 0, prescription: 'levothyroxine', doctor: 'Dr. Barlow', instructions: "Take 1 tablet by mouth every 8 hours", daySupply: 30, refills: 3 },
    { id: 1, prescription: 'adderall', doctor: 'Dr. Anderson', instructions: "Take 1 tablet by mouth in the morning and after lunch", daySupply: 30, refills: 0 },
    { id: 2, prescription: 'bupropion', doctor: 'Dr. Anderson', instructions: "Take 2 tablets by mouth in the morning and 1 at bedtime", daySupply: 60, refills: 1 },
    { id: 3, prescription: 'tadalafil', doctor: 'Dr. Jenkins', instructions: "Take 1 to 3 tablets by mouth as needed", daySupply: 90, refills: 3 },
   
  ];

let globalId = 4

const handlerFunctions = {
    
    getMedications: (req, res) => {
        res.send({
            message: "All medications from drug_data",
            medication: drug_data
        })
    },


    addMedication: (req, res) => {
        const {prescription} = req.body
        const newMedication = {
            id: globalId,
            prescription: prescription,
            doctor: '',
            instructions: '',
            daySupply: 0,
            refills: 0
        }

        drug_data.push(newMedication);

        globalId++

        res.send ({
            message: "New medication added!",
            newMedication: newMedication
        })
    },

    deleteMedication: (req, res) => {
        const { id } = req.params

        drug_data = drug_data.filter((medication) => {
            return medication.id !== +id
        })

        res.send({
            message: "Medication deleted successfully",
            status: true
        })
    }

}

export default handlerFunctions