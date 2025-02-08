import React from "react";

export const ActionButtons = (props) => {
    const {editingUser, setEditingUser, index, setEditModal, setDeleteUser} = props;

    return (
      <div id="actions">
        <ActionButton 
          icon="bx bx-edit" 
          text="Edit" 
          index={index} 
          actionType="edit"
          editingUser={editingUser} 
          actionTypes='edit' 
          setEditingUser={setEditingUser} setEditModal={setEditModal} />

        <ActionButton 
          icon="bx bxs-x-square"  
          index={index} 
          actionType='delete'
          text="Delete" editingUser={editingUser} 
          setDeleteUser={setDeleteUser} />
      </div>
    )
  }
  
export const ActionButton = (props) => {
    const {icon, text, editingUser, actionTypes, setEditingUser, index, setEditModal, setDeleteUser} = props;

    const click = (e, index) => {
      e.preventDefault();
      
      if(actionTypes === 'edit') {
        setEditingUser(index);
        setEditModal(true);
      }

      if(actionTypes === 'delete') {
        setDeleteUser(index);
      }
    }

    return (
      <button onClick={(e) => click(e, index)}><i className={icon} ></i> {text}</button>
    )
  }
