import React from "react";
import css from './Feedback.module.css';

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
            <div className={css.feedback}>
                <h2 className={css.title}>Please leave feedback</h2>

                    <button className={css.btn} type="button" onClick = {this.handleSelectionG}>Good</button>
                    <button className={css.btn} type="button" onClick = {this.handleSelectionN}>Neutral</button>
                    <button className={css.btn} type="button" onClick = {this.handleSelectionB}>Bad</button>

                <div>
                    <h2 className={css.title}>Statistics</h2>

                    <p className={css.item}>Good: {this.state.good}</p>
                    <p className={css.item}>Neutral: {this.state.neutral}</p>
                    <p className={css.item}>Bad: {this.state.bad}</p>
                </div>
            </div>
        )
    }
}

export default Statistics;