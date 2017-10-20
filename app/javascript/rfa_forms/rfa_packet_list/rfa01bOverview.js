import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

export default class Rfa01BOverview extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='rfa_01b_overview'>
        <div id='Rfa01BOverview' onClick={() => this.props.setFocusState('Rfa01BOverview')}
          className={this.props.getFocusClassName('rfa_01b_summary') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Rfa-01B Section Summary</span></div>
          <div className='card-body'>
            <div className='row list-item'>
              <div className='text-center'>
                hiiiiiiiiiiiiiiii
                {/* <a href={urlPrefixHelper('/rfa/a01/' + this.props.applicationId + '/edit')} className='btn btn-default'>
                  <p>Start RFA 01 A</p>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

Rfa01BOverview.propTypes = {
  applicationId: PropTypes.string,
  setFocusState: PropTypes.func,
  getFocusClassName: PropTypes.func

}

Rfa01BOverview.defaultProps = {
  errors: {}
}
