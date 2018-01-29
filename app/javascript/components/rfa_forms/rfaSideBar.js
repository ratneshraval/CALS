import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import {NavLinks} from 'react-wood-duck'

const RfaSideBar = ({
  label,
  children
}) => {
  return (
    <div className='col-lg-12'>
      <div className='col-lg-10' >
        <Affix>
          <div className='side-bar' aria-label='Side Bar'>
            <Collapsible trigger={<h1>{label}</h1>} open>
              <NavLinks>
                {children}
              </NavLinks>
            </Collapsible>
          </div>
        </Affix>
      </div>
      <div className='col-lg-2'>
        <Affix>
          <hr className='vertical' />
        </Affix>
      </div>
    </div>
  )
}

RfaSideBar.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default RfaSideBar
