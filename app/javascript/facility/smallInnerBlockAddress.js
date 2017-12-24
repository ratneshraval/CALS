import React from 'react'

const SmallInnerBlockAddress = ({
  classNameTitle,
  title,
  streetApt,
  cityCountry
}) => {
  return (
    <div className={'small_inner_block' + ' ' + classNameTitle}>
      <p>{title}</p>
      <p>{streetApt}</p>
      <p>{cityCountry}</p>
    </div>

  )
}

export {SmallInnerBlockAddress}
