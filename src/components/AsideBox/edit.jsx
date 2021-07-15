import './styles.scss'
import { useState, useContext, useEffect } from "react"


import { GoalContext } from '../../contexts'

export function Edit(props) {
    let el = ''
    let tr = ''
    const { getGoalEdit, goalobj , statusTd } = useContext(GoalContext)

    const [goal, setGoal] = useState('')
    const [range, setRange] = useState('')
    const [team, setTeam] = useState('')
    const [owner, setOwner] = useState('')
    const [low, setLow] = useState('')
    const [medium, setMedium] = useState('')
    const [high, setHigh] = useState('')
    const [metric, setMetric] = useState('')
    const [status, setStatus] = useState('')


    useEffect(() => {
        setGoal(goalobj?.goal)
        setRange(goalobj?.priority)
        setTeam(goalobj?.team)
        setOwner(goalobj?.owner)
        setLow(goalobj?.low)
        setMedium(goalobj?.medium)
        setHigh(goalobj?.high)
        setMetric(goalobj?.metric)
        setStatus(goalobj?.status)

        el = document.querySelector(".range__input")
        el.value = range
    }, [goalobj])


    useEffect(() => {
        tr = document.getElementById(`${goalobj.list}`)
    })

    let style = ''
    if (status == 'Approved') {
        style = 'bgc-green-d1'

    } else if (status == 'Review') {
        style = 'bgc-info-d1'
    }
    else if (status == 'Pending') {
        style = 'bgc-warning-d1'
    }
    else if (status == 'Rejected') {
        style = 'bgc-red-d1'
    }


    const getForm = () => {

        
        tr.children[2].innerHTML = goal
        tr.children[3].innerHTML = team
        tr.children[4].innerHTML = owner
        tr.children[5].innerHTML = range
        tr.children[6].innerHTML = low
        tr.children[7].innerHTML = medium
        tr.children[8].innerHTML = high
        tr.children[9].innerHTML = metric
        tr.children[10].children[0].innerHTML = status
        tr.children[10].children[0].classList.remove(statusTd)
        tr.children[10].children[0].classList.add(style)
        console.log(statusTd)
        let obj = JSON.stringify({
            list: goalobj.list,
            goal,
            team,
            owner,
            range,
            low,
            medium,
            high,
            metric,
            status
        })
        
        tr.dataset.set = obj
        
    }



    return (
        <>
        <div >
            <form id="form-edit-table">
                <div className="mb-2">
                    <label> Goal: </label>
                    <input type="text" className="input-edit-table" name="goal" value={goal} onChange={event => setGoal(event.target.value)} />
                </div>
                <div className="mb-2 pr-1 area">
                    <label> Team: </label>
                    <input type="text" className="input-edit-table" name="team" value={team} onChange={event => setTeam(event.target.value)} />
                </div>
                <div className="mb-2 area">
                    <label> Owner: </label>
                    <input type="text" className="input-edit-table" name="owner" value={owner} onChange={event => setOwner(event.target.value)} />
                </div>
                <div className="mb-2 pr-1 area-goal">
                    <label> 80%: </label>
                    <input type="text" className="input-edit-table" name="low" value={low} onChange={event => setLow(event.target.value)} />
                </div>
                <div className="mb-2 pr-1 area-goal" area-goal>
                    <label> 100%: </label>
                    <input type="text" className="input-edit-table" name="medium" value={medium} onChange={event => setMedium(event.target.value)} />
                </div>
                <div className="mb-2 area-goal">
                    <label> 120%: </label>
                    <input type="text" className="input-edit-table" name="high" value={high} onChange={event => setHigh(event.target.value)} />
                </div>
                <div className="mb-2 area pr-1" >
                    <label> Metric: </label>
                    <input type="text" className="input-edit-table" name="metric" value={metric} onChange={event => setMetric(event.target.value)} />
                </div>
                <div className="mb-2 area">
                    <label> Status: </label>
                    <select name="select" className="select" value={status} onChange={event => setStatus(event.target.value)}>
                        <option value="Approved">Approved</option>
                        <option value="Review" selected>Review</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div className="form-range mb-2">
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
            <div className="row px-3">
            <button type="button" onClick={getForm} className="btn btn-success col  mr-1"> Atualizar </button>
            <button type="button" className="btn bg-light col border border-secondary  ml-1 "> Cancelar </button>
            </div>
            </div>
        </>
    )
}