import React, { Component } from 'react';

export default class FractionForm extends Component {
    render() {
        const { value, onSubmit, onChange, isValid } = this.props;

        return (
            <form onSubmit={onSubmit} id="fraction">
                <div className="form-group">
                    <input type="text" value={value} onChange={onChange} />
                    {!isValid && <p className="form-error">Input format not valid..</p>}
                </div>

                <button type="submit">Check</button>
            </form>
        )
    }
}
