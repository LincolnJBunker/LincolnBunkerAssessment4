function ModeButtons({ isEditing, saveClick, editClick }) {
    //need to differenciate the different states of save and delete/edit


  return isEditing ? (
    <td>
        <button
        onClick={saveClick}
        >Save</button>
    </td>
  ) : (
    <td>
        <button>Delete</button>
        <button
        onClick={editClick}
        >Edit</button>
    </td>
  );
}

export default ModeButtons