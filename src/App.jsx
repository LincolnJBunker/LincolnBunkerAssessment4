import './App.css'
//import MedicationTable so you can pass it through as a prop in the return and make it display drug_data
import MedicationTable from './components/MedicationTable.jsx'
import drug_data from '../public/data-mockup.js'


function App({ initialMedicationData }) {
  //Medication 
  return (
  <>
  <h2>Input Your Medications Below</h2>
  
  <br />
  <MedicationTable initialMedicationData={initialMedicationData} />
  
  </>

  )
}

export default App
