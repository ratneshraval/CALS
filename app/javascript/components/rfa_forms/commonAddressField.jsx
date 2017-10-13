import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'
import ReactAutosuggestField from './reactAutosuggestField'

export default class CommonAddressFields extends React.Component {
  render () {
    const addressFields = this.props.addressFields.mailing_address ? this.props.addressFields.mailing_address : this.props.addressFields
    const inputProps = {
      id: this.props.id,
      placeholder: this.props.placeholder,
      value: addressFields.street_address,
      onChange: this.props.onChange
    }
    return (
      <div>
        <div className='col-md-12'>
          <label>{this.props.addressTitle}</label>
          <ReactAutosuggestField
            fieldId={this.props.id}
            suggestions={this.props.suggestions}
            inputProps={inputProps}
           />
        </div>
        <InputComponent gridClassName='col-md-4' id='zip'
          value={addressFields.zip}
          label='Zip' placeholder=''
          type='text' onChange={this.props.onChange} />
        <InputComponent gridClassName='col-md-4' id='city'
          value={addressFields.city}
          label='City' placeholder=''
          type='text' onChange={this.props.onChange} />
        <DropDownField gridClassName='col-md-4' id='state_type'
          selectClassName='reusable-select'
          value={getDictionaryId(addressFields.state)}
          optionList={this.props.stateTypes}
          label='State'
          onChange={this.props.onChange} />
      </div>
    )
  }
}
CommonAddressFields.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onSuggestionSelected: PropTypes.func,
  onSuggestionsFetchRequested: PropTypes.func,
  addressType: PropTypes.string,
  suggestions: PropTypes.array.isRequired,
  addressFields: PropTypes.object.isRequired,
  stateTypes: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelection: PropTypes.func
}

CommonAddressFields.defaultProps = {
  addressType: '',
  placeholder: '',
  suggestions: []
}
