import React from 'react'
import {InputComponent} from 'components/common/inputFields'
import CompleteNameFields from './completeNameField'
import CommonAddressFields from 'components/rfa_forms/commonAddressField'

export default class ReferencesCard extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <CompleteNameFields
          index={this.props.index}
          fieldValues={this.props.references}
          suffixTypes={this.props.suffixTypes}
          prefixTypes={this.props.prefixTypes}
          nameTypes={this.props.nameTypes}
          onChange={this.props.setParentState}/>
        <CommonAddressFields
          index={this.props.index}
          stateTypes={this.props.stateTypes}
          addressFields={this.props.references}
          onChange={this.props.setParentState}/>
        <InputComponent gridClassName='col-md-4' id='phone'
          value={this.props.phone_number}
          label='Phone' placeholder=''
          type='text' onChange={(event) => this.props.setParentState('phone_number', event.target.value, this.props.index)} />
        <InputComponent gridClassName='col-md-4' id='email'
          value={this.props.email}
          label='Email (optional)' placeholder=''
          type='text' onChange={(event) => this.props.setParentState('email', event.target.value, this.props.index)} />
      </div>
    )
  }
}
