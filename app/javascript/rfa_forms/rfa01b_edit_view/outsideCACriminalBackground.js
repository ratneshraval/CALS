import React from 'react'
import {DropDownField} from 'components/common/dropDownField'
import {CriminalFields} from './criminalFields'
import {yesNo} from 'constants/constants'
import {getFocusClassName} from 'helpers/cardsHelper.jsx'
import CardLayout from 'components/common/cardLayout.js'

export default class OutsideCACriminalBackground extends React.Component {
  addCard () {
    console.log('add card')
  }
  render () {
    let crimes = this.props.crimes
    return (
      <CardLayout
        idClassName='outside_ca_criminal_background'
        id='OutsideCACriminalBackgroundCard'
        label='Disclosure of Criminal Background - Outside of California'
        handleOnClick={() => this.props.setFocusState('OutsideCACriminalBackgroundCard')}
        focusClassName={getFocusClassName('OutsideCACriminalBackgroundCard', this.props.focusComponentName) + ' ' + 'card phone-section double-gap-top'}>

        <div>Have you ever been convicted of a crime in another state, federal court, military, or a jurisdiction outside of the U.S.?</div>
        <div>Criminal convictions from another state or federal court are considered the same as criminal convictions in California.</div>
        <DropDownField
          gridClassName='col-md-4'
          id='YesNo'
          selectClassName={'reusable-select'}
          value={''}
          optionList={yesNo.items}
          label={''}
          onChange={(event) => this.props.onFieldChange()} />
        {crimes.map((crime, index) => {
          return (
            <CriminalFields
              onFieldChange={this.props.onFieldChange()} />
          )
        })}
        <div className='text-center'>
          <button onClick={this.addCard} className='btn btn-default'>Add Another Offense - Outside of California +</button>
        </div>
      </CardLayout>

    )
  }
}

OutsideCACriminalBackground.defaultProps = {
  crimes: []
}
