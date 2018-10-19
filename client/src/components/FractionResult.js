import React, { Component } from 'react'

class FractionResult extends Component {
  render() {
    const { fractions } = this.props;
      
    const renderFraction = fractions.map((fraction, key) => {
        return (
            <li key={key}>
                <p>
                    <span>{fraction.count}x </span>
                    <span>Rp{fraction.value}</span>
                </p>
            </li>
        )
    });

    return (
        <ul id="fractions-result">
            {renderFraction}
        </ul>
    )
  }
}

export default FractionResult;
