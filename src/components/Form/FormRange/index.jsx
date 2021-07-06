import { useState } from 'react'
import './styles.scss'
export function FormRange(props) {




    return (
        <>
            <div class="range">
                <input class="range__input" type="range" min="0" max="1000" step="100" list="number" onChange={event => props.setRange(event.target.value)} />
                <datalist class="range__list" id="number">
                    <option class="range__opt opt0">0</option>
                    <option class="range__opt" style={{ fontSize: '12px' }}>200</option>
                    <option class="range__opt" style={{ fontSize: '12px' }}>400</option>
                    <option class="range__opt" style={{ fontSize: '12px' }}>600</option>
                    <option class="range__opt" style={{ fontSize: '12px' }}>800</option>
                    <option class="range__opt">1000</option>
                </datalist>
            </div>
        </>
    )
}