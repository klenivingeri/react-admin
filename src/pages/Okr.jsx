
import { Dashboard } from "../components/dashboard"
import { Table } from "../components/table/Table"
import { useEffect } from "react";
import { DashboardFooter } from "../components/dashboardFooter";
import { DashboardHeader } from "../components/dashboardHeader";
//var table  =  document.getElementById("tbody-id").children
export default function Okr() {
    var el = ''
    var active = []


    useEffect(() => {

        el = document.querySelectorAll(".toggle-accordion")

    }, []);


    const handleToggle = () => {

        active = toggleCheck(el)

        toggleShow(active.reduce((total, currentElement) => total + currentElement))
    }

    const toggleCheck = () => {

        active = []

        el.forEach(index => {

            if (index.classList.contains('show')) {

                active.push(1);

            } else {

                active.push(0);
            }
        })

        return active

    }

    const toggleShow = (checked) => {

        el.forEach(index => {

            if (checked == 0) {

                index.classList.add('show')

            } else {

                index.classList.remove('show')
            }
        })
    }

    return (
        <>
            <Dashboard>

                <DashboardHeader />

                <table id="simple-table1" className="mb-0 table table-borderless table-bordered-x brc-secondary-l3 text-dark-m2 radius-1 overflow-hidden table-ork">
                    <thead className="text-dark-tp3 bgc-grey-l4 text-80 border-b-1 brc-transparent">
                        <tr >
                            <th width="5%" className="d-sm-table-cell text-center">#</th>
                            <th width="5%">Type</th>
                            <th width="30%">Goal</th>
                            <th width="10%">Team</th>
                            <th width="10%">Owner</th>
                            <th width="5%" className="d-none d-sm-table-cell text-center">Priority</th>
                            <th width="5%" className="col-metric-low text-center">80%</th>
                            <th width="5%" className="col-metric-target text-center">100%</th>
                            <th width="5%" className="col-metric-high text-center">120%</th>
                            <th width="10%" className="text-center">Metric</th>
                            <th width="7%" >Status</th>
                            <td width="3%" className="text-right">
                                <a type="button" id="collapsed-total" onClick={handleToggle} className="mr-2 collapsed">
                                    <i className="fa fa-angle-up text-center"></i>
                                </a>
                            </td>
                        </tr>
                    </thead>
                </table>

                <Table />

                <DashboardFooter />

            </Dashboard>


        </>
    )
}