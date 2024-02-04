function AddMedicationButton({ addRow }) {
  return (
    <tr>
        <td></td>
        <td colSpan={4}>
            <button onClick={addRow}>Add Medication</button>
        </td>
    </tr>
  )
}

export default AddMedicationButton