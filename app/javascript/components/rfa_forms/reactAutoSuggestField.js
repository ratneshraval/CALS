import React from 'react'
import PropTypes from 'prop-types'
import ReactAutosuggest from 'react-autosuggest'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'

export default class ReactAutosuggestField extends React.Component {
  constructor (props) {
    super(props)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.renderSuggestion = this.renderSuggestion.bind(this)
  }

  onSuggestionSelected (event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) {
    let url = '/geoservice/validate'
    let params = suggestion
    let updateSuggetions
    fetchRequest(url, 'POST', params).then(
      response => response.json()).then((response) => {
        updateSuggetions = response[0]
        this
        .onSelection(updateSuggetions, addressType)
      }).catch(() => {
        updateSuggetions = suggestion
        this.onSelection(updateSuggetions, addressType)
      })
  }

  onSelection (autoFillData, addressType) {
    this.props.onChange(addressType, 'fromSelection', autoFillData)
  }
  onSuggestionsFetchRequested ({ value, reason }) {
    let url = '/geoservice/'
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

  getSuggestionValue (suggestion) {
    return suggestion.street_address
  }

  onSuggestionsClearRequested () {
      // this.props.onSelection(suggestion)
  }
  renderSuggestion (suggestion) {
    return (
      <div>
        {suggestion.street_address}, {suggestion.city}, {suggestion.state}
      </div>
    )
  }

  render () {
    return (
      <div>
        <ReactAutosuggest
          id={this.props.fieldId}
          suggestions={this.props.suggestions}
          inputProps={this.props.inputProps}
          renderSuggestion={this.renderSuggestion}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          getSuggestionValue={this.getSuggestionValue}
          onSuggestionSelected={this.onSuggestionSelected}
      />
      </div>
    )
  }
}

ReactAutosuggestField.propTypes = {
  fieldId: PropTypes.string,
  suggestions: PropTypes.array,
  inputProps: PropTypes.object
}
