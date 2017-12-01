import React from 'react'
import {AgencyComponent} from 'components/rfa_forms/agencyComponentFields.js'
import {shallow, mount} from 'enzyme'



describe('verify agency component fields ', () => {
  let agencyComponent, onAgencyChangeSpy,
  removeAgencyCardSpy, q1History, optionList;

  optionList = ['a','b','c'];

  beforeEach(() => {
    q1History = {
      'agencies': ['new']
    }
    

    removeAgencyCardSpy = jasmine.createSpy('removeAgencyCard')
    onAgencyChangeSpy = jasmine.createSpy('onAgencyChange')


    agencyComponent = shallow(<AgencyComponent
        index={0}
	    id={'Q1-' + 0}
	    defKey='foster_care_licenses_q1' 
	    subKey='agencies'
	    agencies={q1History.agencies}
	    label='Agency Name'
	    placeholder=''
	    dropdownLabel='license type'
	    inputId={'agency-q1-name-' + 0}
	    dropDownId={'agency-q1-type-' + 0}
	    optionList={optionList}
	    dropDownValue='a'
	    inputValue='ABC'
	    removeAgencyCard={removeAgencyCardSpy}
	    onAgencyChange={onAgencyChangeSpy}
    />)

  })

    
    
  it('Test Render', () => {
    expect(agencyComponent.find('.list-item').length).toBe(1)
  })


  it('verify remove added Agency Name', () => {
    let removeButton = agencyComponent.find('span')
    removeButton.simulate('click', 'event')
    expect(removeAgencyCardSpy).toHaveBeenCalledWith('event', [ 'new' ], 0, 'foster_care_licenses_q1', 'agencies')
  })


  it('verify onChange function for agency name field', () => {
    let changeAgencyName = agencyComponent.find('#agency-q1-name-0')
    changeAgencyName.simulate('change', {target: {value: 'Agency New'}})
    expect(onAgencyChangeSpy).toHaveBeenCalledWith({target: {value: 'Agency New'}}, [ 'new' ], 0, 'name', 'foster_care_licenses_q1', 'agencies', 'Agency New')
  })

  it('verify agency change drop down', () => {
    let agencyDropDownField = agencyComponent.find('#agency-q1-type-0')
    agencyDropDownField.simulate('change', {target: {selectedOptions: [{value: 1, text: 'License'}]}})
    expect(onAgencyChangeSpy).toHaveBeenCalledWith( Object({ target: Object({ selectedOptions: 
    	[ Object({ value: 1, text: 'License' }) ] }) }), [ 'new' ], 0, 'type', 'foster_care_licenses_q1',
    	 'agencies', Object({ id: 1, value: 'License' }) )
    										
 
  })


})
