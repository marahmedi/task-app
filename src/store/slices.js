import {createSlice} from '@reduxjs/toolkit'


const modeSlice = createSlice({
    name: 'mode',
    initialState: {darkMode: false},
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

const taskSlice = createSlice({
    name: 'task',
    initialState: [{
        value:[]
    }],
    reducers:{
        addTask: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const {addTask} = taskSlice.actions
export const {toggleDarkMode} = modeSlice.actions

export default{
    mode: modeSlice.reducer,
    tasks: taskSlice.reducer
}