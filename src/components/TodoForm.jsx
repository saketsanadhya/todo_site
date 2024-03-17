import React from 'react'
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'


function TodoForm({
    handleSubmit,
    heading = false,
    text, setText,
    day, setDay,
    time, setTime,
    todoProject,setTodoProject,
    projects,
    showButtons = false,
    setShowModal = false
}){

    return (
        <div>
            <form onSubmit={handleSubmit} className='TodoForm'>
                <div className="text">
                    {
                        heading && 
                        <h3>{heading}</h3>
                    }
                    <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='To do ...'
                        autoFocus
                    />
                </div>
                <div className="remind">
                    <Bell />
                    <p>Remind Me!</p>
                </div>
                <div className="pick-day">
                    <div className="title">
                        <CalendarDay />
                        <p>Choose a day</p>
                    </div>
                    
                </div>
                <div className="pick-time">
                    <div className="title">
                        <Clock />
                        <p>Choose time</p>
                    </div>
                    
                </div>
                <div className="pick-project">
                    <div className="title">
                        <Palette />
                        <p>Choose a project</p>
                    </div>
                    <div className="projects">
                        {
                            projects.length>0 ?
                            projects.map( project => 
                                <div className={`project ${todoProject===project.name ? "active" : ""}`}
                                onClick={()=>setTodoProject(project.name)}
                                key={project.id}
                                
                                >
                                    {project.name}
                                </div>    
                            )
                            :
                            <div style={{color:'red'}}>
                                Please add a project before proceeding
                            </div>
                        }
                    </div>
                </div>
                {
                    showButtons &&
                    <div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='40' />
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </div>
                }
            </form>
            </div>
    )
}

export default TodoForm