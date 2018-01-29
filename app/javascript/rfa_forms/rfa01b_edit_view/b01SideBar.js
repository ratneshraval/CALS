import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import RfaSideBar from 'components/rfa_forms/rfaSideBar'
import {NavLink} from 'react-wood-duck'

const B01SideBar = ({
  isNavLinkActive,
  applicants,
  otherAdults,
  handleNavLinkClick
}) => {
  return (
    <RfaSideBar label='RFA 01 B'>
      <NavLink
        active={isNavLinkActive('#-card')}
        clickHandler={() => handleNavLinkClick('#-card')}
        text=''
        href='#-card' />
    </RfaSideBar>
  )
}

B01SideBar.propTypes = {
  isNavLinkActive: PropTypes.func,
  handleNavLinkClick: PropTypes.func,
  applicants: PropTypes.arrayOf(PropTypes.object),
  otherAdults: PropTypes.arrayOf(PropTypes.object)
}
export default B01SideBar
