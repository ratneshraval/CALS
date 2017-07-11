import React from 'react'
import {DropDownField} from '../common/dropDownField'
import {TextAreaComponent} from '../common/textArea'
import {InputComponent} from '../common/inputFields'
import {yesNo} from '../constants/constants'

export default class FosterCareHistoryCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      yesNo: yesNo,
      visibleAgencyName: false,
      visibleTypeOfLicense: false,
      visibleFacilityName: false,
      visibleSecondAgencyName: false

    }
    this.handleAgencyNameChange = this.handleAgencyNameChange.bind(this)
    this.handleTypeOfLicenseChange = this.handleTypeOfLicenseChange.bind(this)
    this.handleFacilityNameChange = this.handleFacilityNameChange.bind(this)
    this.handleSecondAgencyNameChange = this.handleSecondAgencyNameChange.bind(this)
  }

  onChange (value) {
    console.log(value)
  }

  handleAgencyNameChange (event) {
    this.setState({
      visibleAgencyName: !this.state.visibleAgencyName
    })
  }

  handleTypeOfLicenseChange (event) {
    this.setState({
      visibleTypeOfLicense: !this.state.visibleTypeOfLicense
    })
  }

  handleFacilityNameChange (event) {
    this.setState({
      visibleFacilityName: !this.state.visibleFacilityName
    })
  }

  handleSecondAgencyNameChange (event) {
    this.setState({
      visibleSecondAgencyName: !this.state.visibleSecondAgencyName
    })
  }

  render () {
    const hiddenAgencyName = this.state.visibleAgencyName ? '' : 'hidden'
    const hiddenTypeOfLicense = this.state.visibleTypeOfLicense ? '' : 'hidden'
    const hiddenFacilityName = this.state.visibleFacilityName ? '' : 'hidden'
    const hiddenSecondAgencyName = this.state.visibleSecondAgencyName ? '' : 'hidden'
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={''}
              optionList={this.state.yesNo.items}
              label='Have you been previously licensed, certified, or approved to provide forster care?'
              onChange={this.handleAgencyNameChange} />

            <div className={hiddenAgencyName}>
              <InputComponent gridClassName='col-md-4' id='agencyName'
                label='Agency Name' placeholder='' />
            </div>
            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={''}
              optionList={this.state.yesNo.items}
              label='Have you been previously applied for adoption?'
              onChange={this.handleTypeOfLicenseChange} />

            <div className={hiddenTypeOfLicense}>
              <InputComponent gridClassName='col-md-4' id='typeOfLicense'
                label='Type of License' placeholder='' />
            </div>
            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={''}
              optionList={this.state.yesNo.items}
              label='Have you previously been employed by or volunteered at a community care facility, child care center, family child care
                    home, or residential care facility for the elderly or chromincally ill?'
              onChange={this.handleFacilityNameChange} />

            <div className={hiddenFacilityName}>
              <InputComponent gridClassName='col-md-4' id='facilityName'
                label='Facility Name' placeholder='' />
            </div>
            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={''}
              optionList={this.state.yesNo.items}
              label='Have you had a previous license, certification, relative or nonrelative extended family member approval, or resource
                      family approval application denial?'
              onChange={this.handleSecondAgencyNameChange} />

            <div className={hiddenSecondAgencyName}>
              <InputComponent gridClassName='col-md-4' id='secondaryAgencyName'
                label='AgencyName' placeholder='' />
            </div>
            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={''}
              optionList={this.state.yesNo.items}
              label='Have you had a license, certification, or approval suspended, revoked, or rescinded?' />
            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              value={''}
              optionList={this.state.yesNo.items}
              label='Have you been subject to an exclusion order?' />

          </form>
        </div>
      </div>
    )
  }
}
