import './styles.scss'
import { useState, useContext, useEffect } from "react"
import '../Form/styles.scss'


import { GoalContext } from '../../contexts'

export function Edit(props) {
    let el = ''
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
        el = document.querySelector(".range__input")
        el.value = frange
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
                <div class="range">
                    <input class="range__input" type="range" min="0" max="1000" step="100" list="number" onChange={event => setRange(event.target.value)} />
                    <datalist class="range__list" id="number">
                        <option class="range__opt opt0">0</option>
                        <option class="range__opt" style={{ fontSize: '12px' }}>200</option>
                        <option class="range__opt" style={{ fontSize: '12px' }}>400</option>
                        <option class="range__opt" style={{ fontSize: '12px' }}>600</option>
                        <option class="range__opt" style={{ fontSize: '12px' }}>800</option>
                        <option class="range__opt">1000</option>
                    </datalist>
                </div>
            </div>
        </form>
    )
}