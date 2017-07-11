import React from 'react'
import FosterCareHistoryCard from './FosterCareHistoryCard'

export default class FosterCareHistoryCardMain extends React.Component {
  constructor (props) {
    super(...arguments)
    this.state = {
      isFocused: {},
      formData: {}
    }
  }
  toggleOnFocus (name, event) {
    let focused = this.state.isFocused
    focused = {}
    let focusedCard = focused[name] == 'focused' ? 'show' : 'edit'
    focused[name] = focusedCard
    this.setState({
      isFocused: focused
    })
  }
  render () {
    const {formData} = this.state
    return (
      <div className='foster_care_history_cards'>
        <div id='fosterCareHistory' onClick={this.toggleOnFocus.bind(this, 'fosterCareHistory')} className={(this.state.isFocused['fosterCareHistory']) + ' ' + 'card foster-care-section double-gap-top'}>
          <div className='card-header'>
            <span>Information</span>
          </div>
          <FosterCareHistoryCard {...this.props} />
        </div>
      </div>
    )
  }
}
