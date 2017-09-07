import React from 'react'
import {mount} from 'enzyme'
import ReferenceMain from 'rfa_forms/rfa01a_edit_view/referencesMain.jsx'
import {stateTypes, nameTypes, suffixTypes, prefixTypes} from '../../helpers/constants'

describe('Verify References Main', () => {
  let referenceMainComp, setParentStateSpy,
    getFocusClassNameSpy, setFocusStateSpy,
    setApplicationStateSpy
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
    setApplicationStateSpy = jasmine.createSpy('setResidenceState')
    getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('setFocusState')
    referenceMainComp = mount(<ReferenceMain
      focusComponentName={getFocusClassNameSpy}
      references={fieldRefValues}
      setParentState={setApplicationStateSpy}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
      stateTypes={stateTypes.items}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      nameTypes={nameTypes.items}/>)
  })
  it('verify component load', () => {
    expect(referenceMainComp.length).toEqual(1)
  })
})
