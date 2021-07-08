import './styles.scss'
import { useState, useContext, useEffect } from "react"
import { FormRange } from '../Form/FormRange'


import { GoalContext } from '../../contexts'

export function Edit(props) {

    const { getGoalEdit, goal } = useContext(GoalContext)

    const [fgoal, setGoal] = useState('')
    const [frange, setRange] = useState('')
    const [fteam, setTeam] = useState('')
    const [fowner, setOwner] = useState('')

    useEffect(() => {
        setGoal(goal?.goal)
        setRange(goal?.priority)
        setTeam(goal?.type)
        setOwner(goal?.owner)
    }, [goal])




    return (
        <form id="form-edit-table">
            <div>
                <label> Goal: </label>
                <input type="text" className="input-edit-table" name="goal" value={fgoal} onChange={event => setGoal(event.target.value)} />
            </div>
            <div>
                <label> Team: </label>
                <input type="text" className="input-edit-table" name="team" value={fteam} onChange={event => setTeam(event.target.value)} />
            </div>
            <div>
                <label> Owner: </label>
                <input type="text" className="input-edit-table" name="owner" value={fowner} onChange={event => setOwner(event.target.value)} />
            </div>
            <div className="form-range">
                <label> Pryority: </label>
                <FormRange value={frange} />
            </div>
        </form>
    )
}