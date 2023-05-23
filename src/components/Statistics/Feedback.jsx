import React from "react";

class Statistics extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleSelectionG = () => {
        this.setState(prevState => ({
                good: prevState.good +1
            }))
    };

    handleSelectionN = () => {
        this.setState(prevState => ({
                neutral: prevState.neutral +1,
            }))
    };

    handleSelectionB = () => {
        this.setState(prevState => ({
            bad: prevState.bad +1
        }))
    };
    
    render () {
        return (
            <div>
                <h2>Please leave feedback</h2>

                    <button type="button" onClick = {this.handleSelectionG}>Good</button>
                    <button type="button" onClick = {this.handleSelectionN}>Neutral</button>
                    <button type="button" onClick = {this.handleSelectionB}>Bad</button>

                <div>
                    <h2>Statistics</h2>

                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                </div>
            </div>
        )
    }
}

export default Statistics;