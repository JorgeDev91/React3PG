import React from 'react';
import PropTypes from 'prop-types';
import './AppBar.css';

const AppBar = ({title="TTITULO", subtitle="Subtitulo", ...props}) => {
  return (
    <div className='appbar'>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
    </div>
  )
}

AppBar.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default AppBar