import React from 'react'
import Rfa01AOverview from './rfa01AOverview'
import Rfa01BOverview from './rfa01BOverview'
import Rfa01COverview from './rfa01COverview'
import Lic198BOverview from './Lic198BOverview'
import CardsGroupLayout from 'components/common/CardsGroupLayout'

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
        <CardsGroupLayout>
          <Rfa01AOverview
            focusComponentName={this.state.focusComponentName}
            applicationId={application_id}
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName} />
        </CardsGroupLayout>
        <CardsGroupLayout>
          <Rfa01BOverview
            focusComponentName={this.state.focusComponentName}
            applicationId={application_id}
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName} />
        </CardsGroupLayout>
        <CardsGroupLayout>
          <Rfa01COverview
            focusComponentName={this.state.focusComponentName}
            applicationId={application_id}
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName} />
        </CardsGroupLayout>
        <CardsGroupLayout>
          <Lic198BOverview
            focusComponentName={this.state.focusComponentName}
            applicationId={application_id}
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName} />
        </CardsGroupLayout>
      </div>
    )
  }
}
