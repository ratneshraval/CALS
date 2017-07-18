import Immutable from 'immutable'
import React from 'react'
import {yesNo} from '../constants/constants'
import FosterCareHistoryCard from './FosterCareHistoryCard'

const defaults = Object.freeze({
  // TODO
})
export default class FosterCareHistoryCardMain extends React.Component {
  constructor (props) {
    super(props)
  //  this.state = {isFocused: true}
    this.handleVisibility = this.handleVisibility.bind(this)
  }

  handleVisibility (type) {
    console.log('hi')
  //  this.props.setParentState('type', Immutable.fromJS(event.target.value === '1').toJS)
  }
  render () {
    // const {formData} = this.state
    return (
      <div className='foster_care_history_cards'>
        <div id='FosterCareHistorySection' onClick={() => this.props.setFocusState('FosterCareHistoryCard')}
          className={this.getFocusClassName('FosterCareHistoryCard') + ' ' + 'card phone-section double-gap-top'}>

          <div className='card-header'>
            <span>Information</span>
          </div>

          <FosterCareHistoryCard
            yesNo={yesNo}
            handleVisibility={this.handleVisibility}
            {...this.props} />
        </div>
      </div>

    )
  }
}
