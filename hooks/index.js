import { useEffect, useState } from "react";
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import firebase from '../firebase';

export function useTodos(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTodos(data);
        });

        return () => unsubscribe();
    }, []);

    return todos;
}

export function useProjects(todos){
    const [projects, setProjects] = useState([]);

    function calculateNumOfTodos(projectName, todos){
        return todos.filter(todo => todo.projectName === projectName).length;
    }

    useEffect(() => {
        const db = getFirestore();
        const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                numOfTodos: calculateNumOfTodos(doc.data().name, todos)
            }));
            setProjects(data);
        });

        return () => unsubscribe();
    }, [todos]);

    return projects;
}
