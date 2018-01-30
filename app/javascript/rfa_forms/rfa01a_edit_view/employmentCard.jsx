import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'
import CurrencyInput from 'react-currency-input'
import AddressComponent from 'components/rfa_forms/addressComponent.js'
import Cleave from 'cleave.js/react'

const blankEmploymentFields = Object.freeze({
  employer_name: '',
  occupation: '',
  income: '',
  income_type: {
    id: 1,
    value: 'yearly'
  },
  physical_address: {
    street_address: '',
    zip: '',
    city: '',
    state: null
  }
})

export default class Employment extends React.Component {
  onEmploymentChange (key, value) {
    let newData = Immutable.fromJS(this.props.employment)
    newData = newData.set(key, value)
    this.props.setParentState('employment', newData.toJS())
  }
  onPhysicalAddressChange (key, value) {
    let newData = Immutable.fromJS(this.props.employment)
    // newData.physical_address[key] = value
    newData = newData.setIn(['physical_address', key], value)
    this.props.setParentState('employment', newData.toJS())
  }

  onSelection (key, value) {
    let newData = Immutable.fromJS(this.props.employment)
    newData = newData.set(key, value)
    this.props.setParentState('employment', newData.toJS())
  }
  render () {
    const employmentFields = this.props.employment
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <InputComponent gridClassName='col-md-4' id='employer_name'
              value={employmentFields.employer_name}
              label='Name of the Employer' placeholder=''
              type='text' onChange={(event) => this.onEmploymentChange('employer_name', event.target.value)} />

            <InputComponent gridClassName='col-md-4' id='occupation'
              value={employmentFields.occupation}
              label='Occupation' placeholder=''
              type='text' onChange={(event) => this.onEmploymentChange('occupation', event.target.value)} />

            <div className='col-md-2' >
              <label>Income</label>

              <Cleave placeholder='$0'
                id='income'
                value={employmentFields.income}
                options={{
                  prefix: '$',
                  numeral: true,
                  numeralThousandsGroupStyle: 'thousand',
                  numeralDecimalScale: 0,
                  numeralIntegerScale: 8,
                  rawValueTrimPrefix: true
                }}
                onChange={(event) => this.onEmploymentChange('income', event.target.rawValue)} />

            </div>

            <DropDownField gridClassName='col-md-2' id='income_type'
              value={employmentFields.income_type.id}
              selectClassName='reusable-select'
              optionList={this.props.salaryTypes}
              label='Interval'
              disableNullVal
              onChange={(event) => this.onEmploymentChange('income_type', dictionaryNilSelect(event.target.options))} />
            <AddressComponent
              index={this.props.index}
              stateTypes={this.props.stateTypes}
              addressTitle='Physical Address'
              id="street_address"
              addressFields={employmentFields.physical_address}
              onSelection={(autofillData) => this.onSelection('physical_address', autofillData)}
              onChange={(fieldId, event) => this.onPhysicalAddressChange(fieldId, event, this.props.index)} />
          </form>
        </div>
      </div>
    )
  }
}

Employment.propTypes = {
  employment: PropTypes.object.isRequired
}

Employment.defaultProps = {
  employment: blankEmploymentFields
}
