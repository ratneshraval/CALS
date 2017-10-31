import React from 'react'
import {getFocusClassName} from 'helpers/cardsHelper.jsx'

export default class DisclosureInstructions extends React.Component {
  render () {
    return (
      <CardLayout
        idClassName='disclosure_instructions'
        id='DisclosureInstructionsCard'
        label='Disclosure Instructions (Must read before section II is completed'
        handleOnClick={() => this.props.setFocusState('DisclosureInstructionsCard')}
        focusClassName={this.getFocusClassName('DisclosureInstructionsCard', this.props.focusComponentName) + ' ' + 'card phone-section double-gap-top'}>
        <div>  I'm Disclosure Instructions </div>
      </CardLayout>
    )
  }
}
