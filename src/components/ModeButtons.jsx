import { useState } from "react";

function ModeButtons({ isEditing }) {
    //need to differenciate the different states of save and delete/edit


  return isEditing ? (
    <td>
        <button>Save</button>
    </td>
  ) : (
    <td>
        <button>Delete</button>
        <button>Edit</button>
    </td>
  );
}

export default ModeButtons