import './styles.scss'
import { useState, useContext, useEffect } from "react"
import '../Form/styles.scss'


import { GoalContext } from '../../contexts'

export function Edit(props) {
    let el = ''
    let tr = ''
    const { getGoalEdit, goal } = useContext(GoalContext)

    const [fgoal, setGoal] = useState('')
    const [frange, setRange] = useState('')
    const [fteam, setTeam] = useState('')
    const [fowner, setOwner] = useState('')
    const [low, setLow] = useState('')
    const [medium, setMedium] = useState('')
    const [high, setHigh] = useState('')
    const [metric, setMetric] = useState('')
    const [status, setStatus] = useState('')


    useEffect(() => {
        setGoal(goal?.goal)
        setRange(goal?.priority)
        setTeam(goal?.team)
        setOwner(goal?.owner)
        setLow(goal?.low)
        setMedium(goal?.medium)
        setHigh(goal?.high)
        setMetric(goal?.metric)
        setStatus(goal?.status)

        el = document.querySelector(".range__input")
        console.log(goal.list)
        el.value = frange
    }, [goal])


    useEffect(() => {
        tr = document.getElementById(`${goal.list}`)
    })

    const getForm = () => {

        tr.children[2].innerHTML = fgoal
        tr.children[3].innerHTML = fteam
        tr.children[4].innerHTML = fowner
        tr.children[5].innerHTML = frange
        tr.children[6].innerHTML = low
        tr.children[7].innerHTML = medium
        tr.children[8].innerHTML = high
        tr.children[9].innerHTML = metric
        tr.children[10].children[0].innerHTML = status
    }

    return (
        <>
            <form id="form-edit-table">
                <div className="mb-1">
                    <label> Goal: </label>
                    <input type="text" className="input-edit-table" name="goal" value={fgoal} onChange={event => setGoal(event.target.value)} />
                </div>
                <div className="mb-1">
                    <label> Team: </label>
                    <input type="text" className="input-edit-table" name="team" value={fteam} onChange={event => setTeam(event.target.value)} />
                </div>
                <div className="mb-1">
                    <label> Owner: </label>
                    <input type="text" className="input-edit-table" name="owner" value={fowner} onChange={event => setOwner(event.target.value)} />
                </div>
                <div className="form-range mb-1">
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
                <div className="mb-1">
                    <label> 80%: </label>
                    <input type="text" className="input-edit-table" name="low" value={low} onChange={event => setLow(event.target.value)} />
                </div>
                <div className="mb-1">
                    <label> 100%: </label>
                    <input type="text" className="input-edit-table" name="medium" value={medium} onChange={event => setMedium(event.target.value)} />
                </div>
                <div className="mb-1">
                    <label> 120%: </label>
                    <input type="text" className="input-edit-table" name="high" value={high} onChange={event => setHigh(event.target.value)} />
                </div>
                <div className="mb-1">
                    <label> Metric: </label>
                    <input type="text" className="input-edit-table" name="metric" value={metric} onChange={event => setMetric(event.target.value)} />
                </div>
                <div className="mb-1">
                    <label> Metric: </label>
                    <input type="text" className="input-edit-table" name="status" value={status} onChange={event => setStatus(event.target.value)} />
                </div>
            </form>
            <button type="button" onClick={getForm} className="btn btn-success w-50 "> Atualizar </button>
            <button type="button" className="btn btn-secondary w-50 "> Cancelar </button>
        </>
    )
}