import React from 'react'
import PropTypes from 'prop-types'

const CardsGroupLayout = ({
  title,
  children
}) => {
  return (
    <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <h2><span>{title}</span></h2>
      {children}
    </div>
  )
}

CardsGroupLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default CardsGroupLayout
