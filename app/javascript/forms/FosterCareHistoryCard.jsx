
import React from 'react'
import {yesNo} from '../constants/constants'
import FosterCareHistoryFields from './FosterCareHistoryFields'

const blankFosterCareFields = Object.freeze({
  visibleAgencyName: null,
  visibleFacilityName: null,
  visibleTypeOfLicense: null,
  visibleSecondAgencyName: null,
  agencyName: '',
  typeOfLicense: '',
  facilityName: '',
  secondAgencyName: '',
  revoked: '',
  exclusionOrder: ''
})

export default class FosterCareHistoryCard extends React.Component {
  render () {
    return (
      <div className='foster_care_history_cards'>
        <div id='FosterCareHistorySection' onClick={() => this.props.setFocusState('FosterCareHistoryCard')}
          className={this.props.getFocusClassName('FosterCareHistoryCard') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Information</span></div>
          <FosterCareHistoryFields
            yesNo={yesNo}
            fosterCareHistory={this.props.fosterCareHistory || blankFosterCareFields}
            handleVisibility={this.handleVisibility}
            {...this.props}
           />
        </div>
      </div>
    )
  }
}
