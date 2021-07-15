import { createContext, useState } from 'react'

export const GoalContext = createContext({})

export const GoalContextProvider = ({ children }) => {

    const [goalobj, setGoal] = useState({})
    const [goalEdit, setGoalEdit] = useState([])
    const [statusTd, setStatusTd] = useState('')

    const getGoalEdit = (data) => {
    }

    const getStatus = (data) => {

        if (data == 'Approved') {
            setStatusTd('bgc-green-d1')
            
        } else if (data == 'Review') {
            setStatusTd('bgc-info-d1')

        }
        else if (data == 'Pending') {
            setStatusTd('bgc-warning-d1')
            
        }
        else if (data == 'Rejected') {
            setStatusTd('bgc-red-d1')
            
        }
        
    }

    const getGoal = (data) => {
        let convert = JSON.parse(JSON.parse(JSON.stringify(document.getElementById(data).dataset)).set)
        convert.list = data
        getStatus(convert.status)
        setGoal(convert)
        
    }

    const goalProviderValue = {
        statusTd,
        goalobj,
        goalEdit,
        getGoal,
        getGoalEdit,
        getStatus
    }

    return <GoalContext.Provider value={goalProviderValue}> {children} </GoalContext.Provider>
}