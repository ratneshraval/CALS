import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
const setChildRelatedTo = (applicants, adult) => {
  applicants = applicants.filter(function (applicant) { return applicant.id === adult.relationship_to_applicants[0].applicant_id })
  let applicant = applicants[0]
  return {id: 0, value: applicant.first_name + ' ' + applicant.middle_name + ' ' + applicant.last_name}
}

export class OtherAdultsCardField extends React.Component {
  // setChildRelatedTo (applicants, adult) {
  //   let applicant = applicants.filter(function (applicant) { return applicant.id === adult.relationship_to_applicants[0].applicant_id })
  //   return {id: 0, value: applicant.first_name + ' ' + applicant.middle_name + ' ' + applicant.last_name}
  // }
  render () {
    const adult = this.props.otherAdults

    return (
      <form>
        <DropDownField gridClassName='col-md-4' id='relationshipType'
          selectClassName='reusable-select'
          optionList={this.props.relationship_types}
          label='Relationship Type'
          value={adult.relationship_to_applicants[0].relationship_to_applicant.id}
          onChange={(event) => this.props.handleRelationshipTypeToApplicant(this.props.index, event.target.value)}
        />
        <DropDownField gridClassName='col-md-4' id='availableApplicants'
          selectClassName='reusable-select'
          optionList={this.props.setToWhom(this.props.applicants)}
          label='To Whom'
          // value={setChildRelatedTo(this.props.applicants, adult).id}
          onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, 'child_related_to')} />
        <InputComponent gridClassName='col-md-4' id='dateOfBirth' value={adult.date_of_birth}
          label='Date of Birth' placeholder='Enter Date of Birth'
          type='text' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, 'date_of_birth')} />
        <InputComponent gridClassName='col-md-4' id='firstName' value={adult.first_name}
          label='First Name' placeholder='Enter First Name'
          type='text' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, ('first_name'))} />
        <InputComponent gridClassName='col-md-4' id='middleName' value={adult.middle_name}
          label='Middle Name' placeholder='Enter Middle Name'
          type='text' onChange={(event, id) => this.props.onFieldChange(this.props.index, event.target.value, ('middle_name'))} />
        <InputComponent gridClassName='col-md-4' id='lastName' value={adult.last_name}
          label='Last Name' placeholder='Enter Last Name'
          type='text' onChange={(event, id) => this.props.onFieldChange(this.props.index, event.target.value, ('last_name'))} />
      </form>
    )
  }
}
