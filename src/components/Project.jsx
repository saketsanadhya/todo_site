import React, { useContext, useState } from 'react'
import RenameProject from './RenameProject'
import { Pencil, XCircle } from 'react-bootstrap-icons'
import Modal from './Modal'
import { set } from 'date-fns'
import { ToDoContext } from '../context'

function Project({project,edit}){
    const[showModal,setShowModal]=useState(false)
    const{setSelectedProject}=useContext(ToDoContext)
    return (
        <div className='Project'>
           <div className="name" onClick={()=>setSelectedProject(project.name)}>
            {project.name}
           </div>
           <div className="btns">
           {
            edit?
            <div className="edit-delete">
            <span
            onClick={()=>setShowModal(true)}
            className='edit'>
                <Pencil size='13'/>
            </span> 
            <span className='delete'>
                <XCircle size='13'/>
            </span>
        </div>:
        project.numOfTodos===0 ?
        ""
        :
        <div className="total-todos">
            {project.numOfTodos}
        </div>
           }
           </div>
           <Modal showModal={showModal} setShowModal={setShowModal}>
            <RenameProject project={project} setShowModal={setShowModal}/>
            </Modal>
        </div>
    )
}

export default Project