import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Page404 = () => {
  return (
    <React.Fragment>
      Oopss..
    </React.Fragment>
  )
}

export default withRouter(
  connect(null)(Page404)
);
