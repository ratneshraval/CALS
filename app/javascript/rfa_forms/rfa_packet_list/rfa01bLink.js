import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

const Rfa01bLink = ({
  applicant,
  applicationId,
  index

}) => {
  return (
    <div id={'rfa01B' + applicant.id}>
      <a href={urlPrefixHelper('/rfa/b01/?application_id=' + applicationId + '&adult_id=' + applicant.id)} className='btn btn-default'>
        <p>Start RFA 01 B for {applicant.first_name}</p>
      </a>
    </div>
  )
}

Rfa01bLink.propTypes = {
  applicationId: PropTypes.string,
  applicant: PropTypes.object,
  index: PropTypes.number
}

export default Rfa01bLink
