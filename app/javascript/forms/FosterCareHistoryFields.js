import React from 'react'
import Immutable from 'immutable'
import {DropDownField} from '../common/dropDownField'
import {InputComponent} from '../common/inputFields'

export default class FosterCareHistoryFields extends React.Component {
  constructor (props) {
    super(props)
    this.setFosterCareHistoryState = this.setFosterCareHistoryState.bind(this)
  }

  setFosterCareHistoryState (key, value) {
    let newData = Immutable.fromJS(this.props.fosterCareHistory)
    newData = newData.set(key, value)
    this.props.setParentState('fosterCareHistory', newData.toJS())
  }

  render () {
    const fosterCareHistory = this.props.fosterCareHistory
    const hiddenAgencyName = fosterCareHistory.visibleAgencyName === 'true' ? '' : 'hidden'
    const hiddenTypeOfLicense = fosterCareHistory.visibleTypeOfLicense === 'true' ? '' : 'hidden'
    const hiddenFacilityName = fosterCareHistory.visibleFacilityName === 'true' ? '' : 'hidden'
    const hiddenSecondAgencyName = fosterCareHistory.visibleSecondAgencyName === 'true' ? '' : 'hidden'

    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you been previously licensed, certified, or approved to provide forster care?'
              onChange={(event) => this.setFosterCareHistoryState('visibleAgencyName', event.target.selectedOptions[0].value)} />
            <div className={hiddenAgencyName}>
              <InputComponent gridClassName='col-md-4' id='agencyName'
                label='Agency Name' placeholder=''
                value={fosterCareHistory.agencyName}
                onChange={(event) => this.setFosterCareHistoryState('agencyName', event.target.value)} />
            </div>
            <br />
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you been previously applied for adoption?'

              onChange={(event) => this.setFosterCareHistoryState('visibleTypeOfLicense', event.target.selectedOptions[0].value)} />
            <div className={hiddenTypeOfLicense}>
              <InputComponent gridClassName='col-md-4' id='typeOfLicense'
                label='Type of License' placeholder=''
                value={fosterCareHistory.typeOfLicense}
                onChange={(event) => this.setFosterCareHistoryState('typeOfLicense', event.target.value)} />
            </div>
            <br />
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you previously been employed by or volunteered at a community care facility, child care center, family child care
                    home, or residential care facility for the elderly or chromincally ill?'
              onChange={(event) => this.setFosterCareHistoryState('visibleFacilityName', event.target.selectedOptions[0].value)} />
            <div className={hiddenFacilityName}>
              <InputComponent gridClassName='col-md-4' id='facilityName'
                label='Facility Name' placeholder=''
                value={fosterCareHistory.facilityName}
                onChange={(event) => this.setFosterCareHistoryState('facilityName', event.target.value)} />
            </div>
            <br />
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you had a previous license, certification, relative or nonrelative extended family member approval, or resource
                      family approval application denial?'
              onChange={(event) => this.setFosterCareHistoryState('visibleSecondAgencyName', event.target.selectedOptions[0].value)} />
            <div className={hiddenSecondAgencyName}>
              <InputComponent gridClassName='col-md-4' id='secondAgencyName'
                label='AgencyName' placeholder=''
                value={fosterCareHistory.secondAgencyName}
                onChange={(event) => this.setFosterCareHistoryState('secondAgencyName', event.target.value)} />
            </div>
            <br />
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              value={fosterCareHistory.revoked}
              label='Have you had a license, certification, or approval suspended, revoked, or rescinded?'
              onChange={(event) => this.setFosterCareHistoryState('revoked', event.target.selectedOptions[0].value)} />
            <br />
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              value={fosterCareHistory.exclusion}
              label='Have you been subject to an exclusion order?'
              onChange={(event) => this.setFosterCareHistoryState('exclusion', event.target.selectedOptions[0].value)} />
          </form>
        </div>
      </div>
    )
  }
}
