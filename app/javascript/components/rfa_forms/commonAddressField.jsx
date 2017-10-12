import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'

import ReactAutosuggest from 'react-autosuggest'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'

export default class CommonAddressFields extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      suggestions: []
    }
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.renderSuggestion = this.renderSuggestion.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
    this.onStreetAddressChange = this.onStreetAddressChange.bind(this)
  }
  onChange (key, value) {
    (this.props.index != undefined) ? this.props.onChange(key, value, this.props.index) : this.props.onChange(this.props.addressType, key, value)
  }
  getSuggestionValue (suggestion) {
    return suggestion.street_address
  }
  onSuggestionsClearRequested () {
    // this.props.onSelection(suggestion)
  }
  onSuggestionSelected (event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) {
    let url = this.props.validateUrl
    let params = suggestion
    let updateSuggetions
    fetchRequest(url, 'POST', params).then(
      response => response.json()).then((response) => {
      updateSuggetions = response[0]
      this.props.onSelection(this.props.addressType, updateSuggetions)
      }).catch(() => {
      updateSuggetions = suggestion
      this.props.onSelection(this.props.addressType, updateSuggetions)
    })
  }
  onSuggestionsFetchRequested ({ value, reason }) {
    let url = this.props.url
    let params = encodeURIComponent(value)
    fetchRequest(url, 'POST', params).then(
      response => response.json()).then((response) => {
      return this.setState({
        suggestions: response
      })
    }).catch(() => {
      return this.setState({
        suggestions: []
      })
    })
  }
  renderSuggestion (suggestion) {
    return (
      <div>
        {suggestion.street_address}, {suggestion.city}, {suggestion.state}
      </div>
    )
  }
  onStreetAddressChange (event, {newValue}) {
    this.onChange(this.props.fieldName, newValue)
  }
  render () {
    const addressFields = this.props.addressFields.mailing_address ? this.props.addressFields.mailing_address : this.props.addressFields
    const inputProps = {
      id: this.props.id,
      value: addressFields.street_address,
      onChange: this.onStreetAddressChange
    }
    return (
      <div>
        <div className="col-md-12">
          <label>{this.props.addressTitle}</label>
          <ReactAutosuggest
            id={this.props.fieldName}
            suggestions={this.state.suggestions}
            inputProps={inputProps}
            renderSuggestion={this.renderSuggestion}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            getSuggestionValue={this.getSuggestionValue}
            onSuggestionSelected={this.onSuggestionSelected}
          />
        </div>
        <InputComponent gridClassName='col-md-4' id='zip'
          value={addressFields.zip}
          label='Zip' placeholder=''
          type='text' onChange={(event) => this.onChange('zip', event.target.value)} />
        <InputComponent gridClassName='col-md-4' id='city'
          value={addressFields.city}
          label='City' placeholder=''
          type='text' onChange={(event) => this.onChange('city', event.target.value)} />
        <DropDownField gridClassName='col-md-4' id='state_type'
          selectClassName='reusable-select'
          value={getDictionaryId(addressFields.state)}
          optionList={this.props.stateTypes}
          label='State'
          onChange={(event) => this.onChange('state', dictionaryNilSelect(event.target.selectedOptions[0]))} />
      </div>
    )
  }
}
CommonAddressFields.propTypes = {
  addressType: PropTypes.string.isRequired,
  addressTitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  addressFields: PropTypes.object.isRequired,
  stateTypes: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
