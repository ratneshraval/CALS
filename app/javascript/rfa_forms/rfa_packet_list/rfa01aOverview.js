import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

export default class Rfa01AOverview extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (

      <div className='rfa_01a_overview'>

        <div id='Rfa01AOverview' onClick={() => this.props.setFocusState('Rfa01AOverview')}
          className={this.props.getFocusClassName('rfa_01a_summary') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Rfa-01A Section Summary</span></div>

          <div className='card-body'>
            <div className='row list-item'>
              <div className='text-center'>
                <a href={urlPrefixHelper('/rfa/a01/' + this.props.applicationId + '/edit')} className='btn btn-default'>
                  <p>Start RFA 01 A</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

Rfa01AOverview.propTypes = {
  applicationId: PropTypes.string,
  setFocusState: PropTypes.func,
  getFocusClassName: PropTypes.func

}

Rfa01AOverview.defaultProps = {
  errors: {}
}
