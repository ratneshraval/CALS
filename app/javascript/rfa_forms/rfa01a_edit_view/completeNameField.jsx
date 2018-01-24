import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from '../../components/common/inputFields'
import {DropDownField} from '../../components/common/dropDownField'
import NameCommonFields from '../../components/common/nameCommonFields'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'

const CompleteNameFields = ({
  index,
  firstNameId,
  middleNameId,
  lastNameId,
  nameSuffixId,
  namePrefixId,
  firstName,
  middleName,
  lastName,
  nameSuffix,
  namePrefix,
  nameType,
  nameTypeId,
  onChange,
  suffixTypes,
  prefixTypes,
  nameTypes,
  validator
}) => {
  return (<div>
    {
      prefixTypes && <div className='col-md-12'>
        <DropDownField gridClassName='col-md-4'
          id={namePrefixId} value={getDictionaryId(namePrefix)}
          selectClassName={'reusable-select'}
          optionList={prefixTypes}
          label={'Prefix'}
          onChange={(event, id) => onChange(namePrefixId, dictionaryNilSelect(event.target.options), index)} />
      </div>
    }
    <div className='col-md-12'>
      <NameCommonFields
        index={index}
        firstNameId={firstNameId}
        middleNameId={middleNameId}
        lastNameId={lastNameId}
        firstName={firstName}
        middleName={middleName}
        lastName={lastName}
        onChange={onChange}
        validator={validator} />
    </div>
    <div className='col-md-12'>
      <DropDownField
        gridClassName='col-md-4'
        id='name_suffix'
        value={getDictionaryId(nameSuffix)}
        selectClassName={'reusable-select'}
        optionList={suffixTypes}
        label={'Suffix'}
        onChange={(event, id) => onChange(nameSuffixId, dictionaryNilSelect(event.target.options), index)} />
    </div>
    {
      nameTypes && <div className='col-md-12'>
        <DropDownField
          gridClassName='col-md-4'
          id={nameTypeId}
          value={getDictionaryId(nameType)}
          selectClassName={'reusable-select'}
          optionList={nameTypes}
          label={'Name Type'}
          onChange={(event, id) => onChange(nameTypeId, dictionaryNilSelect(event.target.options), index)} />
      </div>
    }
  </div>)
}

CompleteNameFields.propTypes = {
  firstNameId: PropTypes.string,
  middleNameId: PropTypes.string,
  lastNameId: PropTypes.string,
  nameSuffixId: PropTypes.string,
  namePrefixId: PropTypes.string,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  nameSuffix: PropTypes.object,
  namePrefix: PropTypes.object,
  nameType: PropTypes.object,
  nameTypeId: PropTypes.string,
  nameTypes: PropTypes.array,
  prefixTypes: PropTypes.array,
  suffixTypes: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

CompleteNameFields.defaultProps = {
  suffixTypes: []
}

export default CompleteNameFields
