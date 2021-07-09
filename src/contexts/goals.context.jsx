import { createContext, useState } from 'react'

export const GoalContext = createContext({})

export const GoalContextProvider = ({ children }) => {

    const [goal, setGoal] = useState({ teste: 'false' })
    const [goalEdit, setGoalEdit] = useState([])

    const getGoalEdit = (data) => {
        console.log(data)
    }

    const getGoal = (data) => {
        let convert = JSON.parse(JSON.parse(JSON.stringify(document.getElementById(data).dataset)).set)
        convert.list = data
        setGoal(convert)

    }

    const goalProviderValue = {
        goal,
        goalEdit,
        getGoal,
        getGoalEdit
    }

    return <GoalContext.Provider value={goalProviderValue}> {children} </GoalContext.Provider>
}