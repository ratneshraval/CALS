import React from 'react'
import {shallow, mount} from 'enzyme'
import ReferencesCard from 'rfa_forms/rfa01a_edit_view/referencesCard.jsx'
import {stateTypes, nameTypes, suffixTypes, prefixTypes} from '../../helpers/constants'


describe('References Card', () => {
  let referencesComp, setParentStateSpy, handleAddressChangeSpy
  let fieldRefValues = Object.freeze({
    name_suffix: null,
    name_prefix: null,
    first_name: '',
    middle_name: '',
    last_name: '',
    name_type: null,
    mailing_address: {
      street_address: '',
      zip: '',
      city: '',
      state: null
    },
    phone_number: '',
    email: ''
  })
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    referencesComp = mount(<ReferencesCard
      index={0}
      references={fieldRefValues}
      nameTypes={nameTypes.items}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      stateTypes={stateTypes.items}
      setParentState={setParentStateSpy}/>)
  })
  it('Verify reference Component loaded', () => {
    expect(referencesComp.length).toEqual(1)
  })
})