import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeHeaderTitle } from '../actions/headerActions';

class Page404 extends React.Component {
  componentWillMount() {
    this.props.removeHeaderTitle();  
  }

  render() {
    return (
      <div className="page-404">
        <div className="page-404__content">
          <h1>Oopss..</h1>
          <Link to="/">Back to homepage!</Link>
        </div>
      </div>
    )
  }
}

Page404.propTypes = {
  removeHeaderTitle: PropTypes.func.isRequired
}

export default connect(null, { removeHeaderTitle })(Page404);
