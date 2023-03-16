import React, { Component } from 'react';

import './Aside.css';

function Aside() {
    return (
        <div className='asideBody'>
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Upcoming Matches:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fri 3/3</td>
                        <td>West Coast Eagles</td>
                        <td>MCG</td>
                    </tr>
                    <tr>
                        <td>Sat 11/3</td>
                        <td>Essendon</td>
                        <td>MCG</td>
                    </tr>
                    <tr>
                        <td>Sat 18/3</td>
                        <td>Collingwood</td>
                        <td>MCG</td>
                    </tr>
                    <tr>
                        <td>Sat 25/3</td>
                        <td>Brisbane</td>
                        <td>Gabba</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Injuries:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Big Sam</td>
                        <td>TBD</td>
                        <td>TBD</td>
                    </tr>
                    <tr>
                        <td>Little John</td>
                        <td>Torn Hamstring</td>
                        <td>3 weeks</td>
                    </tr>
                </tbody>
            </table>
            <a class="weatherwidget-io" href="https://forecast7.com/en/n37d81144d96/melbourne/" data-label_1="MELBOURNE"
                data-label_2="WEATHER" data-theme="original">MELBOURNE WEATHER</a>
        </div>
    )
}

export default Aside;