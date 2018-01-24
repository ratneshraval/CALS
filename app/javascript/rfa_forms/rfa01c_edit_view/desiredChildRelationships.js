import React from 'react'
import {InputComponent} from 'components/common/inputFields'
import PropTypes from 'prop-types'

const DesiredChildRelationships = ({
  index,
  child,
  applicants,
  handleRelationshipChange
}) => (
  <div className='row'>
    <div className='card-header'>Child's Relationship to Applicant</div>
    <div className='col-md-12'>
      {
        applicants && applicants.map((applicant, subIndex) => {
          return (
            <div className='row' key={'desiredChildRelationships' + index + 'child' + subIndex} >
              <InputComponent
                gridClassName='col-md-4'
                id={'relationship_to_applicant' + index + 'child' + subIndex}
                value={child.relationship_to_applicants && child.relationship_to_applicants[subIndex] ? child.relationship_to_applicants[subIndex].relationship_to_applicant_freeform : ''}
                label={'Relationship to Applicant ' + applicant.first_name + ' ' + applicant.last_name}
                placeholder=''
                onChange={(event) => handleRelationshipChange(applicant, event.target.value, index, subIndex)} />
            </div>
          )
        })
      }
    </div>
  </div>
)

DesiredChildRelationships.propTypes = {
  index: PropTypes.number,
  applicants: PropTypes.array,
  child: PropTypes.object,
  handleRelationshipChange: PropTypes.func
}

DesiredChildRelationships.defaultProps = {
  index: 0
}

export default DesiredChildRelationships
