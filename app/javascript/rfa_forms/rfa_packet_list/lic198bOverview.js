import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

export default class Lic198BOverview extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='lic198b_overview'>
        <div id='Lic198BOverview' onClick={() => this.props.setFocusState('Lic198BOverview')}
          className={this.props.getFocusClassName('lic198b_overview') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Lic-198B Section Summary</span></div>
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

Lic198BOverview.propTypes = {
  applicationId: PropTypes.string,
  setFocusState: PropTypes.func,
  getFocusClassName: PropTypes.func

}

Lic198BOverview.defaultProps = {
  errors: {}
}
