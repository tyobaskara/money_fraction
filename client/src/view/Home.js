import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { setHeaderTitle } from '../actions/headerActions';

// component
import FractionForm from '../components/FractionForm';

class Home extends React.Component {
    state = {
        input: ''
    }

    componentWillMount() {
        this.props.setHeaderTitle('Money Fraction');
    }

    onChange = (e) => {
        this.setState({ input: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.input);
    }

    render() {
        const { input } = this.state;

        return (
            <React.Fragment>
                <Helmet>
                    <title>Money Fraction</title>
                </Helmet>
                
                <div className="has-header-fixed">
                    <FractionForm value={input} onSubmit={this.onSubmit} onChange={this.onChange} />

                    {/*<img src={require('../../static/images/no_pic.png')} alt="no pic"/>*/}
                </div>
            </React.Fragment>
        );
    }

};

Home.propTypes = {
    setHeaderTitle: PropTypes.func.isRequired
};

// export default withRouter(Home);
export default withRouter(
    connect(null, { setHeaderTitle })(Home)
);