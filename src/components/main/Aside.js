import React, { Component } from 'react';

import { v4 as uuid } from "uuid";

import './Aside.css';

function Aside(props) {

    const matchesData = props.matchesData;
    const injuriesData = props.injuriesData;

    let matchesRows = [];
    let injuriesRows = [];

    for (let row of matchesData) {
        let newRow = (
            <tr key={uuid()}>
                <td key={uuid()}>{row.date}</td>
                <td key={uuid()}>{row.opponent}</td>
                <td key={uuid()}>{row.location}</td>
            </tr>
        )
        matchesRows.push(newRow);
    }

    for (let row of injuriesData) {
        let newRow = (
            <tr key={uuid()}>
                <td key={uuid()}>{row.player}</td>
                <td key={uuid()}>{row.injury}</td>
                <td key={uuid()}>{row.return}</td>
            </tr>
        )
        injuriesRows.push(newRow);
    }

    return (
        <div className='asideBody'>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Upcoming Matches:</th>
                    </tr>
                </thead>
                <tbody>
                    {matchesRows}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Injuries:</th>
                    </tr>
                </thead>
                <tbody>
                    {injuriesRows}
                </tbody>
            </table>
            <a className="weatherwidget-io" href="https://forecast7.com/en/n37d81144d96/melbourne/" data-label_1="MELBOURNE"
                data-label_2="WEATHER" data-theme="original">MELBOURNE WEATHER</a>
        </div>
    )
}

export default Aside;