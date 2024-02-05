import './App.css'
//import MedicationTable so you can pass it through as a prop in the return and make it display drug_data
import MedicationTable from './components/MedicationTable.jsx'
import drug_data from '../public/docs/data-mockup.js'


function App() {
  //Medication 
  return (
  <>
  <h2>Input Your Medications Below</h2>
  
  <br />
  <MedicationTable initialMedicationData={drug_data} />
  
  </>

  )
}

export default App
