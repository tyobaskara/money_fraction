import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';

class Home extends React.Component {
    componentDidMount() {
        console.log(this.props.profile);
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Money Fraction</title>
                </Helmet>
                
                <Container>
                    <br />
                    <h1>Hello React</h1>
                    <hr style={{margin: '25px 0'}} />
                    <div>
                        <img src={require('../../static/images/no_pic.png')} alt="no pic"/>
                    </div>
                </Container>
            </React.Fragment>
        );
    }

};

const mapStateToPropsFunc = state => ({
    profile: state.profile
});

// export default withRouter(Home);
export default connect(mapStateToPropsFunc)(Home);