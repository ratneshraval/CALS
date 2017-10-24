import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import CardLayout from 'components/common/CardLayout'

export default class Rfa01COverview extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <CardLayout
        idClassName='rfa_01c_overview'
        id='Rfa01COverview'
        label='Rfa-01C Section Summary'
        handleOnClick={() => this.props.setFocusState('Rfa01COverview')}
        focusClassName={this.props.getFocusClassName('Rfa01COverview') + ' ' + 'card phone-section double-gap-top'}>
        <span>Default Rfa-01 C</span>
      </CardLayout>

    )
  }
}

Rfa01COverview.propTypes = {
  applicationId: PropTypes.string,
  setFocusState: PropTypes.func,
  getFocusClassName: PropTypes.func
}
