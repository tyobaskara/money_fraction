import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { getHeaderTitle } from '../actions/headerActions';
import { Container } from 'semantic-ui-react';

class Home extends React.Component {
    componentWillMount() {
        this.props.getHeaderTitle('Money Fraction');
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Money Fraction</title>
                </Helmet>
                
                <div className="has-header-fixed">
                    <Container>
                        <br />
                        <h1>Hello React</h1>
                        <hr style={{margin: '25px 0'}} />
                        <div>
                            <img src={require('../../static/images/no_pic.png')} alt="no pic"/>
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        );
    }

};

Home.propTypes = {
    getHeaderTitle: PropTypes.func.isRequired
};

// export default withRouter(Home);
export default withRouter(
    connect(null, { getHeaderTitle })(Home)
);