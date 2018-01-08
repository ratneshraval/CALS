import React from 'react'
import PropTypes from 'prop-types'
import {BinarySelectorField} from 'components/common/binarySelectorField'
import {yesNoMarginStyle} from 'constants/rfaText'
const YesNoRadioComponent = ({
  idPrefix,
  value,
  onYesSelection,
  onNoSelection,
  label
}) => (
  <div className='col-md-12' style={yesNoMarginStyle}>
    <label className='col-md-12'>{label}</label>
    <BinarySelectorField
      gridClassName='col-md-4'
      id={idPrefix + 'true'}
      labelId={idPrefix + 'Yes'}
      type='radio'
      value={true}
      checked={value === true}
      label='Yes'
      onChange={onYesSelection} />
    <BinarySelectorField
      gridClassName='col-md-4'
      id={idPrefix + 'false'}
      labelId={idPrefix + 'No'}
      type='radio'
      value={false}
      checked={value === false}
      label='No'
      onChange={onNoSelection} />
  </div>
)

YesNoRadioComponent.propTypes = {
  label: PropTypes.string,
  onFieldChange: PropTypes.func,
  idPrefix: PropTypes.string,
  value: PropTypes.bool,
  // PropTypes.oneOfType([
  //   PropTypes.bool,
  //   PropTypes.string
  // ]),
  onYesSelection: PropTypes.func,
  onNoSelection: PropTypes.func
}

export default YesNoRadioComponent
