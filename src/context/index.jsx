import React, { createContext, useState } from "react";
import { useProjects, useTodos } from "../../hooks";
const ToDoContext=createContext()
function ToDoContextProvider({children}){
    const defaultProject="today"
    const[selectedProject,setSelectedProject]=useState(defaultProject)
    const todos=useTodos()
    const projects=useProjects()
    return(
        <ToDoContext.Provider
        value={
            {
                selectedProject,
                setSelectedProject
            }
        }
        >
            {children}
        </ToDoContext.Provider>
    )
}
export {ToDoContext,ToDoContextProvider}