import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit"

type TaskState = {
    entities: Task[]
}



const initialState:TaskState = {
    entities: []
}


type DraftTask = RequireOnly<Task, 'title'>;


const createTask = (draftTask: DraftTask): Task => {

    return {id: nanoid(), ...draftTask} 
}


const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            const task = createTask(action.payload)
            state.entities.unshift(task)
        },
        removeTask: (state) => state
    }
})

export const tasksReducer = tasksSlice.reducer

export const {addTask, removeTask} = tasksSlice.actions

export default tasksSlice