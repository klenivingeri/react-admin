
import { useContext } from "react"
import { GoalContext } from '../../contexts'



export function Overview() {
    const { goalobj } = useContext(GoalContext)
    let style = ''
    if (goalobj.status == 'Approved') {
        style = 'bgc-green-d1'

    } else if (goalobj.status == 'Review') {
        style = 'bgc-info-d1'
    }
    else if (goalobj.status == 'Pending') {
        style = 'bgc-warning-d1'
    }
    else if (goalobj.status == 'Rejected') {
        style = 'bgc-red-d1'
    }
    return (
        <>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1">
                <div class="col-sm-4 mb-2">Status:</div>
                <div class="col-sm-8 mb-2">
                    <a class={`btn ${style} text-white text-85`}>{goalobj.status}</a>
                </div>
            </div>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Priotiry:</div>
                <div class="col-sm-8 mb-2">
                </div>
            </div>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Workspace:</div>
                <div class="col-sm-8 mb-2">Magalu</div>
            </div>
            <div class="row ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Success Metric:</div>
                <div class="col-sm-8 mb-2">Data de implantação do processo</div>
            </div>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Metric Goals:</div>
                <div class="col-sm-8 mb-2">
                    <span class="btn btn-outline-red border-2 text-85">01/11/21</span>
                    <span class="btn btn-outline-green border-2 text-85">01/10/21</span>
                    <span class="btn btn-outline-blue border-2 text-85">01/09/21</span>
                </div>
            </div>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Time frame:</div>
                <div class="col-sm-8 mb-2">Y2021-Q1</div>
            </div>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Team:</div>
                <div class="col-sm-8 mb-2">{goalobj.team}</div>
            </div>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Owner:</div>
                <div class="col-sm-8 mb-2">
                    <span class="badge pos-rel p-2px border-2 brc-grey-m2 mt-1 radius-round overflow-hidden text-85">
                        <img alt={goalobj.owner} src="assets/image/avatar/avatar6.jpg" class="w-3 h-3 radius-round mr-1" />
                        {goalobj.owner}
                        <a href="#" class="text-60 btn btn-outline-red btn-text-dark px-1 pt-2px pb-1 h-2 border-0 radius-round mx-0">
                            <i class="fa fa-times"></i>
                        </a>
                    </span>
                </div>
            </div>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Contributors:</div>
                <div class="col-sm-8 mb-2">
                    <span class="badge pos-rel p-2px border-2 brc-grey-m2 mt-1 radius-round overflow-hidden text-85">
                        <img alt="User avatar" src="assets/image/avatar/avatar4.jpg" class="w-3 h-3 radius-round mr-1" />
                        Luiza Helena Trajano
                        <a href="#" class="text-60 btn btn-outline-red btn-text-dark px-1 pt-2px pb-1 h-2 border-0 radius-round mx-0">
                            <i class="fa fa-times"></i>
                        </a>
                    </span>
                    <span class="badge pos-rel p-2px border-2 brc-grey-m2 mt-1 radius-round overflow-hidden text-85">
                        <img alt="User avatar" src="assets/image/avatar/avatar5.jpg" class="w-3 h-3 radius-round mr-1" />
                        Patrícia Pugas
                        <a href="#" class="text-60 btn btn-outline-red btn-text-dark px-1 pt-2px pb-1 h-2 border-0 radius-round mx-0">
                            <i class="fa fa-times"></i>
                        </a>
                    </span>
                </div>
            </div>
            <div class="row border-b-1 brc-dark-l3 ml-1 mr-1 mt-2">
                <div class="col-sm-4 mb-2">Approver:</div>
                <div class="col-sm-8 mb-2">
                    <span class="badge pos-rel p-2px border-2 brc-grey-m2 mt-1 radius-round overflow-hidden text-85">
                        <img alt="User avatar" src="assets/image/avatar/avatar1.jpg" class="w-3 h-3 radius-round mr-1" />
                        Fred Trajano
                        <a href="#" class="text-60 btn btn-outline-red btn-text-dark px-1 pt-2px pb-1 h-2 border-0 radius-round mx-0">
                            <i class="fa fa-times"></i>
                        </a>
                    </span>
                </div>
            </div>
        </>

    )
}