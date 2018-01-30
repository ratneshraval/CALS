import React from 'react'

export const respectiveStreetAddressOrNA = (addresses, addressType) => {
  const addressObject = addresses && addresses.find(o => o.type === addressType)
  if (addressObject && addressObject.address.street_address) {
    return addressObject.address.street_address + ','
  } else {
    return 'N/A'
  }
}

export const cityStateZipOfRespectiveAddressOrNA = (addresses, addressType) => {
  const addressObject = addresses && addresses.find(o => o.type === addressType)
  if (addressObject) {
    const cityStateString = checkForValueOrBlank(addressObject.address.city) + ', ' + checkForValueOrBlank(addressObject.address.state) + ' ' + checkForValueOrBlank(addressObject.address.zip_code)
    return cityStateString === ',  ' ? '' : cityStateString
  } else {
    return 'N/A'
  }
}

export const checkForValueOrBlank = (value) => {
  return value || ''
}

export const respectiveNumberOrNA = (phones, phoneRelation) => {
  const phoneObject = phones && phones.find(o => o.relation === phoneRelation)
  if (phoneObject && Boolean(phoneObject.number)) {
    return formatPhoneNumberForDashes(phoneObject.number)
  } else {
    return 'N/A'
  }
}

export const respectiveFullAddressOrNA = (addresses, addressType) => {
  const addressObject = addresses && addresses.find(o => o.type === addressType)
  if (addressObject) {
    const stringForFullAddress = checkForValueOrBlank(addressObject.address.street_address) + ', ' + checkForValueOrBlank(addressObject.address.city) + ', ' + checkForValueOrBlank(addressObject.address.state) + ' ' + checkForValueOrBlank(addressObject.address.zip_code)
    return stringForFullAddress === ', ,  ' ? '' : stringForFullAddress
  } else {
    return 'N/A'
  }
}

export const checkforDateOrNa = (date) => {
  if (date) {
    let dateString = date.split(' ')[0]
    try {
      if (dateString === ' ' || Boolean(/(\d{4})-(\d{2})-(\d{2})/.test(dateString)) === false) {
        throw stringInvalidDate
      } else {
        return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1')
      }
    } catch (err) {
      return err
    }
  } else {
    return 'N/A'
  }
}

export const formatPhoneNumberForDashes = (phone) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

export const checkForNA = (object) => {
  return (object && object.value) ? object.value : 'N/A'
}

export const checkNameorNA = (object) => {
  return (object && object.name) ? object.name : 'N/A'
}

export const checkfullNameorNA = (object) => {
  return object ? fullName(object) : 'N/A'
}

export const fullName = (object) => {
  return object.first_name + ' ' + object.last_name
}

export const checkValueForNull = (value) => {
  return value == null ? 'N/A' : value
}

export const primaryPhoneRelation = 'primary'

export const alternativePhoneRelation = 'alternate'

export const physicalAddressType = 'Residential'

export const mailingAddressType = 'Mailing'

export const listOfStatus = ['LICENSED', 'CERTIFIED/APPROVED', 'LICENSED(PENDING CAPACITY CHANGE)']

export const stringInvalidDate = 'Invalid Date'

export const handleLicenseEffectiveDate = (result) => {
  if (result.status) {
    return listOfStatus.indexOf(result.status.value) >= 0 ? checkforDateOrNa(result.license_effective_date) : 'N/A'
  } else {
    return 'N/A'
  }
}
