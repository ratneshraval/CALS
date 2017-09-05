import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {getDictionaryId} from 'helpers/commonHelper.jsx'

export default class CommonAddressFields extends React.Component {
  constructor (props) {
    super(props)
    this.onPhysicalAddressChange = this.onPhysicalAddressChange.bind(this)
  }
  onPhysicalAddressChange() {
    // do update
  }
  render () {
    const addressFields = this.props.addressFields
    return (
      <div>
        <InputComponent gridClassName='col-md-12' id='street_address'
          value={addressFields.mailing_address.street_address}
          label='Physical Address' placeholder=''
          type='text' onChange={(event) => this.onPhysicalAddressChange('street_address', event.target.value)} />
        <InputComponent gridClassName='col-md-4' id='zip'
          value={addressFields.mailing_address.zip}
          label='Zip' placeholder=''
          type='text' onChange={(event) => this.onPhysicalAddressChange('zip', event.target.value)} />
        <InputComponent gridClassName='col-md-4' id='city'
          value={addressFields.mailing_address.city}
          label='City' placeholder=''
          type='text' onChange={(event) => this.onPhysicalAddressChange('city', event.target.value)} />
        <DropDownField gridClassName='col-md-4' id='state_type'
          selectClassName='reusable-select'
          value={getDictionaryId(addressFields.mailing_address.state)}
          optionList={this.props.stateTypes}
          label='State'
          onChange={(event) => this.onPhysicalAddressChange('state', dictionaryNilSelect(event.target.selectedOptions[0]))} />
      </div>
    )
  }
}
