import { useContext, useEffect } from 'react'
import { GoalContext } from '../../contexts'



export function TableTr(props) {
    let style = ''
    if (props?.tr.status == 'Approved') {
        style = 'bgc-green-d1'

    } else if (props?.tr.status == 'Review') {
        style = 'bgc-info-d1'
    }
    else if (props?.tr.status == 'Pending') {
        style = 'bgc-warning-d1'
    }
    else if (props?.tr.status == 'Rejected') {
        style = 'bgc-red-d1'
    }

    let el = ''
    let active = true
    const { getGoal, goal } = useContext(GoalContext)
    useEffect(() => {
        el = document.querySelector(".asidebox")
        active = el.classList.contains('show')
    });

    function handleEdit() {
        if (!active) {
            el.classList.add('show')
        }
        getGoal(props.tr)
    }
    return (
        <tr className="bgc-h-yellow-l4 d-style" onClick={handleEdit}>
            <td width="5%" className=" text-center pr-0 pos-rel">
                <div class="position-tl  h-100 ml-n1px border-l-4 brc-orange-m1 v-hover"></div>
                <label>{props?.tr.list}</label>
            </td>
            <td width="5%"><span className="badge bgc-white border-1 border-l-3 brc-success-m2 btn-text-success text-70">
                {props?.tr.type}</span></td>
            <td width="30%">{props?.tr.goal}</td>
            <td width="10%">{props?.tr.team}</td>
            <td width="10%">{props?.tr.owner}</td>
            <td width="5%" className={`d-none d-sm-table-cell text-center cor${props?.tr.priority}`}>{props?.tr.priority}</td>
            <td width="5%" className="col-metric-low text-center">{props?.tr.low}</td>
            <td width="5%" className="col-metric-target text-center">{props?.tr.medium}</td>
            <td width="5%" className="col-metric-high text-center">{props?.tr.high}</td>
            <td width="10%" className="text-center">{props?.tr.metric}</td>
            <td width="7%">
                {props?.tr.status == 'Approved' ?? (<span className={`badge badge-sm bgc-green-d1 text-white pb-1 px-25`}>{props?.tr.status}</span>)}

                <span className={`badge badge-sm  text-white pb-1 px-25 ${style}`}>{props?.tr.status}</span>

            </td>
            <td width="3%" className="text-right"></td>
        </tr>
    )
}