import React, { Component } from 'react';

import './Aside.css';

function Aside(props) {

    const matchesData = props.matchesData;
    const injuriesData = props.injuriesData;

    let matchesRows = [];
    let injuriesRows = [];

    for (let row of matchesData) {
        let newRow = (
            <tr>
                <td key={row.date}>{row.date}</td>
                <td key={row.opponent}>{row.opponent}</td>
                <td key={row.location}>{row.location}</td>
            </tr>
        )
        matchesRows.push(newRow);
    }

    for (let row of injuriesData) {
        let newRow = (
            <tr>
                <td key={row.player}>{row.player}</td>
                <td key={row.injury}>{row.injury}</td>
                <td key={row.return}>{row.return}</td>
            </tr>
        )
        injuriesRows.push(newRow);
    }

    return (
        <div className='asideBody'>
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Upcoming Matches:</th>
                    </tr>
                </thead>
                <tbody>
                    {matchesRows}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Injuries:</th>
                    </tr>
                </thead>
                <tbody>
                    {injuriesRows}
                </tbody>
            </table>
            <a class="weatherwidget-io" href="https://forecast7.com/en/n37d81144d96/melbourne/" data-label_1="MELBOURNE"
                data-label_2="WEATHER" data-theme="original">MELBOURNE WEATHER</a>
        </div>
    )
}

export default Aside;