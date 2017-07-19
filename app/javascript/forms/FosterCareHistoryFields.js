import React from 'react'
import {DropDownField} from '../common/dropDownField'
import {InputComponent} from '../common/inputFields'

export default class FosterCareHistoryFields extends React.Component {
  render () {
    const hiddenAgencyName = this.props.visibleFields.visibleAgencyName ? '' : 'hidden'
    const hiddenTypeOfLicense = this.props.visibleFields.visibleTypeOfLicense ? '' : 'hidden'
    const hiddenFacilityName = this.props.visibleFields.visibleFacilityName ? '' : 'hidden'
    const hiddenSecondAgencyName = this.props.visibleFields.visibleSecondAgencyName ? '' : 'hidden'
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you been previously licensed, certified, or approved to provide forster care?'
              onChange={(e) => this.props.handleVisibility(e, 'visibleAgencyName')} />
            <div className={hiddenAgencyName}>
              <InputComponent gridClassName='col-md-4' id='agencyName'
                label='Agency Name' placeholder='' />
            </div>

            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you been previously applied for adoption?'
              onChange={(e) => this.props.handleVisibility(e, 'visibleTypeOfLicense')} />
            <div className={hiddenTypeOfLicense}>
              <InputComponent gridClassName='col-md-4' id='typeOfLicense'
                label='Type of License' placeholder='' />
            </div>

            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you previously been employed by or volunteered at a community care facility, child care center, family child care
                    home, or residential care facility for the elderly or chromincally ill?'
              onChange={(e) => this.props.handleVisibility(e, 'visibleFacilityName')} />
            <div className={hiddenFacilityName}>
              <InputComponent gridClassName='col-md-4' id='facilityName'
                label='Facility Name' placeholder='' />
            </div>

            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you had a previous license, certification, relative or nonrelative extended family member approval, or resource
                      family approval application denial?'
              onChange={(e) => this.props.handleVisibility(e, 'visibleSecondAgencyName')} />
            <div className={hiddenSecondAgencyName}>
              <InputComponent gridClassName='col-md-4' id='secondaryAgencyName'
                label='AgencyName' placeholder='' />
            </div>

            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you had a license, certification, or approval suspended, revoked, or rescinded?' />
            <br />

            <DropDownField gridClassName='col-md-7'
              selectClassName={'reusable-select'}
              optionList={this.props.yesNo.items}
              label='Have you been subject to an exclusion order?' />
          </form>
        </div>
      </div>
    )
  }
}
