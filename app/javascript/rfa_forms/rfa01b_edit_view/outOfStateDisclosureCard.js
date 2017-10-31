import React from 'react'
import {getFocusClassName} from 'helpers/cardsHelper.jsx'

export default class OutOfStateDisclosureCard extends React.Component {
  render () {
    return (
      <CardLayout
        idClassName='out_of_state_disclosure_card'
        id='outOfStateDisclosureCard'
        label='This section applies only to applicants and adults residing in the home'
        handleOnClick={() => this.props.setFocusState('outOfStateDisclosureCard')}
        focusClassName={this.getFocusClassName('outOfStateDisclosureCard', this.props.focusComponentName) + ' ' + 'card phone-section double-gap-top'}>
        <div>I'm out of state</div>
      </CardLayout>
    )
  }
}
