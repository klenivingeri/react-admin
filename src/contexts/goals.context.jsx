import { createContext, useState } from 'react'

export const GoalContext = createContext({})

export const GoalContextProvider = ({ children }) => {

    const [goal, setGoal] = useState({ teste: 'false' })
    const [goalEdit, setGoalEdit] = useState([])

    const getGoalEdit = (data) => {
        console.log(data)
    }

    const getGoal = (data) => {
        setGoal(data)
    }

    const goalProviderValue = {
        goal,
        goalEdit,
        getGoal,
        getGoalEdit
    }

    return <GoalContext.Provider value={goalProviderValue}> {children} </GoalContext.Provider>
}