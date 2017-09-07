import React from 'react'
import Immutable from 'immutable'
import {InputComponent} from 'components/common/inputFields'
import CompleteNameFields from './completeNameField'
import CommonAddressFields from 'components/rfa_forms/commonAddressField'
import PropTypes from 'prop-types'
export default class ReferencesCard extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddressChange = this.handleAddressChange.bind(this)
  }
  handleAddressChange (key, value, referencesIndex) {
    let mailingAddressObj = Immutable.fromJS(this.props.references.mailing_address)
    mailingAddressObj = mailingAddressObj.set(key, value)
    this.props.setParentState('mailing_address', mailingAddressObj, referencesIndex)
  }
  render () {
    return (
      <div>
        <CompleteNameFields
          referenceId={this.props.index}
          fieldValues={this.props.references}
          suffixTypes={this.props.suffixTypes}
          prefixTypes={this.props.prefixTypes}
          nameTypes={this.props.nameTypes}
          onChange={this.props.setParentState}/>
        <CommonAddressFields
          index={this.props.index}
          stateTypes={this.props.stateTypes}
          addressFields={this.props.references}
          onChange={this.handleAddressChange}/>
        <InputComponent gridClassName='col-md-4' id='phone'
          value={this.props.references.phone_number}
          label='Phone' placeholder=''
          type='text' onChange={(event) => this.props.setParentState('phone_number', event.target.value, this.props.index)} />
        <InputComponent gridClassName='col-md-4' id='email'
          value={this.props.references.email}
          label='Email (optional)' placeholder=''
          type='text' onChange={(event) => this.props.setParentState('email', event.target.value, this.props.index)} />
      </div>
    )
  }
}

ReferencesCard.propTypes = {
  suffixTypes: PropTypes.array.isRequired,
  references: PropTypes.object.isRequired,
  prefixTypes: PropTypes.array.isRequired,
  nameTypes: PropTypes.array.isRequired,
  stateTypes: PropTypes.array.isRequired,
  setParentState: PropTypes.func.isRequired
}
