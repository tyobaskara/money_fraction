import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { setHeaderTitle } from '../actions/headerActions';
import { Container } from 'semantic-ui-react';

class Home extends React.Component {
    componentWillMount() {
        this.props.setHeaderTitle('Money Fraction');
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Money Fraction</title>
                </Helmet>
                
                <div className="has-header-fixed">
                    <Container>
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
    setHeaderTitle: PropTypes.func.isRequired
};

// export default withRouter(Home);
export default withRouter(
    connect(null, { setHeaderTitle })(Home)
);