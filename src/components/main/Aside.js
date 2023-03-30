import React, { Component } from 'react';

import { v4 as uuid } from "uuid";

import './Aside.css';

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matchesRows: [],
            injuriesRows: []
        }
    }

    // Data processing is performed on mount to prevent recurring processing on re-renders
    componentDidMount() {
        try {
            // Reset state data to prevent duplication and old data retention
            this.setState({ matchesRows: [], injuriesRows: [] });

            // Check data exists
            if (this.props.matchesData) {

                // For every row in the passed-in array of matches data,
                // create a table row with corresponding data and a unique key (from uuid library)
                for (let row of this.props.matchesData) {
                    let newRow = (
                        <tr key={uuid()}>
                            <td key={uuid()}>{row.date}</td>
                            <td key={uuid()}>{row.opponent}</td>
                            <td key={uuid()}>{row.location}</td>
                        </tr>
                    )

                    // Update state by creating a new array out of the existing array items and appending the new row,
                    // rather than mutating state which is not recommended
                    this.setState(st => ({ matchesRows: [...st.matchesRows, newRow] }))
                }
            }

            // Repeat process as above, but for the injuries data table
            if (this.props.injuriesData) {
                for (let row of this.props.injuriesData) {
                    let newRow = (
                        <tr key={uuid()}>
                            <td key={uuid()}>{row.player}</td>
                            <td key={uuid()}>{row.injury}</td>
                            <td key={uuid()}>{row.return}</td>
                        </tr>
                    )
                    this.setState(st => ({ injuriesRows: [...st.injuriesRows, newRow] }))
                }
            }
        } catch {

            // If the process fails for some reason, write the following message to the console
            console.log('Table data was unable to populate tables. Check data was correctly passed into the props.')
        }
    }

    render() {
        return (
            <div className='asideBody'>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">Upcoming Matches:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.matchesRows}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">Injuries:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.injuriesRows}
                    </tbody>
                </table>
                <a className="weatherwidget-io" href="https://forecast7.com/en/n37d81144d96/melbourne/" data-label_1="MELBOURNE"
                    data-label_2="WEATHER" data-theme="original">MELBOURNE WEATHER</a>
            </div>
        )
    }
}

export default Aside;