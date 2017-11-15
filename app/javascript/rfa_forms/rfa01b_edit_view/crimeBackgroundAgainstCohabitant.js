import React from 'react'
import {DropDownField} from 'components/common/dropDownField'
import {CriminalFields} from './criminalFields'
import {yesNo} from 'constants/constants'
import {getFocusClassName} from 'helpers/cardsHelper.jsx'
import CardLayout from 'components/common/cardLayout.js'

export default class CrimeBackgroundAgainstCohabitant extends React.Component {
  render () {
    let crimes = this.props.crimes
    return (
      <CardLayout
        idClassName='crime_background_against_cohabitant_card'
        id='crimeBackgroundAgainstCohabitantCard'
        label='Disclosure of Criminal Background - Against Child / Spouse / Cohabitant'
        handleOnClick={this.props.setFocusState('crimeBackgroundAgainstCohabitantCard')}
        focusClassName={getFocusClassName('crimeBackgroundAgainstCohabitantCard', this.props.focusComponentName) + ' ' + 'card phone-section double-gap-top'}>

        <div>Have you ever been arrested for a crime against a child or for
                spousal/cohabitant abuse?</div>

        <DropDownField
          gridClassName='col-md-4'
          id='YesNo'
          selectClassName={'reusable-select'}
          value={''}
          optionList={yesNo.items}
          label={''}
          onChange={(event) => this.props.onFieldChange()} />

        {
                crimes.map((crime, index) => {
                  return (
                    <CriminalFields
                      onFieldChange={this.props.onFieldChange()} />
                  )
                })
            }

        <div className='row list-item'>
          <div className='text-center'>
            <button onClick={this.addCard} className='btn btn-default'>Add Another Offense - Against Child / Spouse / Cohabitant +</button>
          </div>
        </div>
      </CardLayout>

    )
  }
}

CrimeBackgroundAgainstCohabitant.defaultProps = {
  crimes: []
}
