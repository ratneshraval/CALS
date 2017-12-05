import React from 'react'
import {AgencyComponent} from 'components/rfa_forms/agencyComponentFields.js'
import {shallow, mount} from 'enzyme'
import {stateTypes} from '../../helpers/constants'

describe('verify agency component fields ', () => {
  let agencyComponent, onAgencyChangeSpy,
    removeAgencyCardSpy, q1History, optionList
  let value=0;

  beforeEach(() => {
    q1History = {
      'agencies': ['new']
    }

    removeAgencyCardSpy = jasmine.createSpy('removeAgencyCard')
    onAgencyChangeSpy = jasmine.createSpy('onAgencyChange')

    agencyComponent = shallow(<AgencyComponent
      index={value}
      id={'Q1-' + value}
      defKey='foster_care_licenses_q1'
      subKey='agencies'
      agencies={q1History.agencies}
      label='Agency Name'
      placeholder=''
      dropdownLabel='license type'
      inputId={'agency-q1-name-' + value}
      dropDownId={'agency-q1-type-' + value}
      optionList={stateTypes.items}
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
    expect(removeAgencyCardSpy).toHaveBeenCalledWith('event', [ 'new' ], value, 'foster_care_licenses_q1', 'agencies')
  })

  it('verify onChange function for agency name field', () => {
    let changeAgencyName = agencyComponent.find('#agency-q1-name-' + value)
    changeAgencyName.simulate('change', {target: {value: 'Agency New'}})
    expect(onAgencyChangeSpy).toHaveBeenCalledWith({target: {value: 'Agency New'}}, [ 'new' ], value, 'name', 'foster_care_licenses_q1', 'agencies', 'Agency New')
  })

  it('verify agency change drop down', () => {
    let agencyDropDownField = agencyComponent.find('#agency-q1-type-' + value)
    agencyDropDownField.simulate('change', {target: {selectedOptions: [{value: 1, text: 'License'}]}})
    expect(onAgencyChangeSpy).toHaveBeenCalledWith(({ target: ({ selectedOptions: [ ({ value: 1, text: 'License' }) ] }) }),
      [ 'new' ], value, 'type', 'foster_care_licenses_q1', 'agencies', ({ id: 1, value: 'License' }))
  })
})
