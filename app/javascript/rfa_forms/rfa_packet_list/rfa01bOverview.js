import React from 'react'
import PropTypes from 'prop-types'
import CardLayout from 'components/common/cardLayout'
import Rfa01bLink from './rfa01bLink'

export default class Rfa01BOverview extends React.Component {
  render () {
    let applicationId = this.props.applicationId
    let rfa01A = this.props.rfa01A
    let applicants = rfa01A.applicants
    let otherAdults = rfa01A.other_adults

    return (
      <CardLayout
        idClassName='rfa_01b_overview'
        id='Rfa01BOverview'
        label='Rfa-01B Section Summary'
        handleOnClick={() => this.props.setFocusState('Rfa01BOverview')}
        focusClassName={this.props.getFocusClassName('Rfa01BOverview') + ' ' + 'card phone-section double-gap-top'}>
        {applicants && applicants.map((applicant, index) => {
          <div id={'rfa01BForm_applicants' + index}>
          return (
              <Rfa01bLink
                index={index}
                applicant={applicant}
                applicationId={applicationId} />)
            </div>
        })}
        {otherAdults && otherAdults.map((otherAdult, index) => {
          <div id={'rfa01BForm_otherAdults' + index}>
          return (
              <Rfa01bLink
                index={index}
                applicant={otherAdult}
                applicationId={applicationId} />)
            </div>
        })}

      </CardLayout>
    )
  }
}

Rfa01BOverview.propTypes = {
  applicationId: PropTypes.string,
  setFocusState: PropTypes.func,
  getFocusClassName: PropTypes.func
}
