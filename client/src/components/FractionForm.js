import React, { Component } from 'react';

export default class FractionForm extends Component {
    render() {
        const { value, onSubmit, onChange } = this.props;

        return (
            <form onSubmit={onSubmit} id="fraction">
                <input type="text" value={value} onChange={onChange} />
                <button type="submit">Check</button>
            </form>
        )
    }
}
