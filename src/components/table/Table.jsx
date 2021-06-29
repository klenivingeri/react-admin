
import { Accordion } from ".";
import { TableTr } from "./TableTr";

export function Table(){
    

    var obj = [{
        title: 'Base de Clientes - DVR',
        type: 'DVR',
        list: '1',
        thm: [{
            title: 'Base de Clientes - THM',
            type: 'THM',
            list: '1.1',
            okr: [{
                title: 'Base de Clientes - OKR',
                type: 'OKR',
                list: '1.1.1',
                priority: '1000', 
                kr:[{
                    list: '1.1.1.1',
                    type: 'KR',
                    goal: 'Base ativa de clientes recorrentes',
                    team: 'Corp',
                    owner: 'Fred',
                    priority: '900',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Soma mensal',
                    status: 'Approved'
                },
                {
                    list: '1.1.1.2',
                    type: 'KR',
                    goal: 'Venda de novas lojas',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '800',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Média',
                    status: 'Review'
                },
                {
                    list: '1.1.1.3',
                    type: 'KR',
                    goal: 'Venda total Mobile Remoto',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '750',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Padrão',
                    status: 'Pending'
                },{
                    list: '1.1.1.4',
                    type: 'KR',
                    goal: 'Venda total Mobile Remoto',
                    team: 'Operações',
                    owner: 'Fabrício',
                    priority: '700',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Total Anual',
                    status: 'Rejected'
                }]
            }]
        }]
    },{
        title: 'Base de Clientes - DVR',
        type: 'DVR',
        list: '2',
        thm: [{
            title: 'Base de Clientes - THM',
            type: 'THM',
            list: '2.1',
            okr: [{
                title: 'Base de Clientes - OKR',
                type: 'OKR',
                list: '2.1.1', 
                priority: '500',   
                kr:[{
                    list: '2.1.1.1',
                    type: 'KR',
                    goal: 'Base ativa de clientes recorrentes',
                    team: 'Corp',
                    owner: 'Fred',
                    priority: '400',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Soma mensal',
                    status: 'Approved'
                },
                {
                    list: '2.1.1.2',
                    type: 'KR',
                    goal: 'Venda de novas lojas',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '300',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Média',
                    status: 'Review'
                },
                {
                    list: '2.1.1.3',
                    type: 'KR',
                    goal: 'Venda total Mobile Remoto',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '100',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Padrão',
                    status: 'Pending'
                },{
                    list: '2.1.1.4',
                    type: 'KR',
                    goal: 'Venda total Mobile Remoto',
                    team: 'Operações',
                    owner: 'Fabrício',
                    priority: '0',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Total Anual',
                    status: 'Rejected'
                }]
            }]
        }]
    },{
        title: 'Base de Clientes - DVR',
        type: 'DVR',
        list: '3',
        thm: [{
            title: 'Base de Clientes - THM',
            type: 'THM',
            list: '3.1',
            okr: [{
                title: 'Base de Clientes - OKR',
                type: 'OKR',
                list: '3.1.1', 
                priority: '1000',   
                kr:[{
                    list: '3.1.1.1',
                    type: 'KR',
                    goal: 'Base ativa de clientes recorrentes',
                    team: 'Corp',
                    owner: 'Fred',
                    priority: '400',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Soma mensal',
                    status: 'Approved'
                },
                {
                    list: '3.1.1.2',
                    type: 'KR',
                    goal: 'Venda de novas lojas',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '300',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Média',
                    status: 'Review'
                },
                {
                    list: '3.1.1.3',
                    type: 'KR',
                    goal: 'Venda total Mobile Remoto',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '100',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Padrão',
                    status: 'Pending'
                },{
                    list: '3.1.1.4',
                    type: 'KR',
                    goal: 'Venda total Mobile Remoto',
                    team: 'Operações',
                    owner: 'Fabrício',
                    priority: '0',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Total Anual',
                    status: 'Rejected'
                }]
            }]
        }]
    }]
    
    return(
        <>
        {obj.map( data => { 
            return (
            
            <Accordion key={data.list} table={data}>
                
                {data.thm.map (data => {
                    return(
                                            
                    <Accordion key={data.list} table={data}>
                    
                        {data.okr.map( data => {
                            
                            return(<Accordion key={data.list} table={data}>
                                    <table 
                                    id="simple-table3" 
                                    className="
                                        mb-0 
                                        table 
                                        table-borderless 
                                        table-bordered-x 
                                        brc-secondary-l3 
                                        text-dark-m1 
                                        radius-1 
                                        overflow-hidden 
                                        table-ork"
                                    >

                                    <tbody className="mt-1 text-80">

                                        {data.kr.map( data => {

                                            return (
                                                <TableTr key={data.list} tr={data} />
                                            )}

                                        )}

                                    </tbody>

                                </table>
                            </Accordion>   
                            )} 
                        )}
                    
                    </Accordion>
                    )}
                )}

            </Accordion>
            )}
        )}
         </>
        
    )
}