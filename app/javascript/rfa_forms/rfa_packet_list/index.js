import React from 'react'
import Rfa01AOverview from './rfa01AOverview'
import Rfa01BOverview from './rfa01BOverview'
import Rfa01COverview from './rfa01COverview'
import Lic198BOverview from './Lic198BOverview'

export default class Rfa01PacketList extends React.Component {
  constructor (props) {
    super(props)
    this.getFocusClassName = this.getFocusClassName.bind(this)
    this.setFocusState = this.setFocusState.bind(this)

    this.state = {
      focusComponentName: '',
      errors: {}
    }
  }

  setFocusState (focusComponentName) {
    this.setState({focusComponentName: focusComponentName})
  }

  getFocusClassName (componentName) {
    return this.state.focusComponentName === componentName ? 'edit' : 'show'
  }

  render () {
    let application_id = this.props.application_id
    return (
      <div>
        <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <Rfa01AOverview
            applicationId={application_id}
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName} />
        </div>
        <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <Rfa01BOverview
            applicationId={application_id}
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName} />
        </div>
        <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <Rfa01COverview
            applicationId={application_id}
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName} />
        </div>
        <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <Lic198BOverview
            applicationId={application_id}
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName} />
        </div>
      </div>
    )
  }
}
