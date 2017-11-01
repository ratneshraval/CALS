import React from 'react'
import {getFocusClassName} from 'helpers/cardsHelper.jsx'
import CardLayout from 'components/common/cardLayout.js'

export default class PrivacyStatement extends React.Component {
  render () {
    return (

      <CardLayout
        idClassName='privacy_statement'
        id='PrivacyStatementCard'
        label='Disclosure of Criminal Background - Outside of California'
        handleOnClick={() => this.props.setFocusState('PrivacyStatementCard')}
        focusClassName={getFocusClassName('PrivacyStatementCard', this.props.focusComponentName) + ' ' + 'card phone-section double-gap-top'}>

        <div>I'm PrivacyStatement</div>
      </CardLayout>

    )
  }
}
PrivacyStatement.defaultProps = {
  crimes: []
}
