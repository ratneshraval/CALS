
import React from 'react'
import {yesNo} from '../constants/constants'
import FosterCareHistoryFields from './FosterCareHistoryFields'

export default class FosterCareHistoryCard extends React.Component {
  handleVisibility (event, type) {
    this.setVisibleState(type, event.target.value === '1')
  }
  render () {
    return (
      <div className='foster_care_history_cards'>
        <div id='FosterCareHistorySection' onClick={() => this.props.setFocusState('FosterCareHistoryCard')}
          className={this.props.getFocusClassName('FosterCareHistoryCard') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Information</span></div>
          <FosterCareHistoryFields
            yesNo={yesNo}
            handleVisibility={this.handleVisibility}
            {...this.props}
           />
        </div>
      </div>
    )
  }
}
