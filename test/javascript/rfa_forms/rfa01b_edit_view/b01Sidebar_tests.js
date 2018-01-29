import React from 'react'
import {shallow, mount} from 'enzyme'
import B01SideBar from 'rfa_forms/rfa01b_edit_view/b01SideBar'

describe('RFA 01a side bar ', () => {
  let component
  let isNavLinkActiveSpy = jasmine.createSpy('isNavLinkActive')
  let handleNavLinkClickSpy = jasmine.createSpy('handleNavLinkClick')

  beforeEach(() => {
    component = mount(<B01SideBar
      isNavLinkActive={isNavLinkActiveSpy}
      handleNavLinkClick={handleNavLinkClickSpy}
    />)
  })

  it('renders the div wrapper', () => {
    expect(component.find('div.col-lg-12').exists()).toBe(true)
  })

  it('renders a link to the card', () => {
    expect(component.find('NavLink[text=""]').props().href)
      .toBe('#applicants-card')
  })
  it('clicks the link and updates link to the  card', () => {
    component.find('Link[text=""]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#-card')
  })
})
