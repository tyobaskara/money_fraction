import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './Nav';

class Header extends React.Component {
    render() {
        const { title } = this.props.header;

        return (
            <header>
                { title && <Nav title={ title }/> }
            </header>
        )
    }
}

Header.propTypes = {
    header: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    header: state.header
});

export default connect(mapStateToProps)(Header);