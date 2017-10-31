import React from 'react'
import CompleteNameFields from './../rfa01a_edit_view/completeNameField'
import CommonAddressFields from 'components/rfa_forms/commonAddressField'
import {InputComponent} from 'components/common/inputFields'
import {fieldErrorsAsImmutableSet} from 'helpers/validationHelper.jsx'
import InputField from 'components/common/inputField.jsx'
import {DropDownFormField} from 'components/common/dropDownFormField.jsx'
import {getFocusClassName} from 'helpers/cardsHelper.jsx'
import CardLayout from 'components/common/CardLayout.js'

export default class ApplicantDetailsCard extends React.Component {
  constructor (props) {
    super(props)
    this.validateDLcombo = this.validateDLcombo.bind(this)
  }

  validateDLcombo () {
    console.log('validating')
  }
  render () {
    return (
      <CardLayout
        idClassName='appliant_details_card'
        id='applicantDetailsCard'
        label='Lic198B Section Summary'
        handleOnClick={() => this.props.setFocusState('applicantDetailsCard')}
        focusClassName={this.getFocusClassName('applicantDetailsCard', this.props.focusComponentName) + ' ' + 'card phone-section double-gap-top'}>

        <p>I declare under penalty of perjury under the laws of the State of California
           that I have read and understand the information contained in this afidavit
            and that my responses and any accompanying attachments are true and correct. </p>
        <InputComponent
          gridClassName='col-md-12'
          id='NameOfResourceFamily'
          value=''
          label='Name of Resource Family'
          type='text'
          onChange={(event) => this.props.onFieldChange()} />
        <CompleteNameFields
          index={0}
          fieldValues={{}}
          suffixTypes={this.props.nameSuffixTypes || []}
          prefixTypes={this.props.namePrefixTypes || []}
          onChange={(event) => this.props.onFieldChange()} />
        {/* <CommonAddressFields
                index={0}
                stateTypes={[]}
                addressFields={{mailing_address: {}}}
                onChange={(event) => this.props.onFieldChange()} /> */}
        <InputField
          gridClassName='col-md-4'
          id={'driversLicenseNumberId'}
          value={''}
          label='Driver License number'
          placeholder=''
          type='text'
          onChange={(event) => this.props.onFieldChange()}
          errors={fieldErrorsAsImmutableSet()}
          onBlur={(event) => this.validateDLcombo()} />
        <DropDownFormField
          gridClassName='col-md-4'
          id={'driversLicenseStateId'}
          selectClassName='reusable-select'
          value={''}
          optionList={this.props.stateTypes || []}
          label='Driver License State'
          onChange={(event) => this.props.onFieldChange()}
          errors={fieldErrorsAsImmutableSet()}
          onBlur={(event) => this.validateDLcombo()} />
      </CardLayout>
    )
  }
}
