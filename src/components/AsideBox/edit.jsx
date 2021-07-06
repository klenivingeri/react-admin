import './styles.scss'
import { useState } from "react"
import { FormRange } from '../Form/FormRange'

export function Edit(props) {

    const [goal, setGoal] = useState('')
    const [range, setRange] = useState('')
    const [team, setTeam] = useState('')
    const [owner, setOwner] = useState('')
    console.log(goal)
    console.log(range)
    console.log(team)
    console.log(owner)


    return (
        <form id="form-edit-table">
            <div>
                <label> Goal: </label>
                <input type="text" className="input-edit-table" name="goal" onChange={event => setGoal(event.target.value)} />
            </div>
            <div>
                <label> Team: </label>
                <input type="text" className="input-edit-table" name="team" onChange={event => setTeam(event.target.value)} />
            </div>
            <div>
                <label> Owner: </label>
                <input type="text" className="input-edit-table" name="owner" onChange={event => setOwner(event.target.value)} />
            </div>
            <div className="form-range">
                <label> Pryority: </label>
                <FormRange setRange={setRange} />
            </div>
        </form>
    )
}