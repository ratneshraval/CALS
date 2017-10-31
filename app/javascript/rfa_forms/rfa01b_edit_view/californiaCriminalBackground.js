import React from 'react'
import CriminalFields from './criminalFields'
import {DropDownField} from 'components/common/dropDownField'
import {yesNo} from 'constants/constants'
import {getFocusClassName} from 'helpers/cardsHelper.jsx'

export default class CaliforniaCriminalBackground extends React.Component {
  addCard () {
    console.log('add card')
  }

  render () {
    let crimes = this.props.crimes

  return (
    <CardLayout
      idClassName='ca_criminal_background'
      id='CACriminalBackgroundCard'
      label='Disclosure of Criminal Background - California (only)'
      handleOnClick={() => this.props.setFocusState('CACriminalBackgroundCard')}
      focusClassName={this.getFocusClassName('CACriminalBackgroundCard', this.props.focusComponentName) + ' ' + 'card phone-section double-gap-top'}>
              <div>Have you ever been convicted of a crime in California?</div>
              <div>You need not disclose any marijuana-related offenses covered
                 by the marijuana reform legislation codified in Health and Safety Code
                sections 11361.5 and 11361.7.</div>
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
        </CardLayout>

            <div className='text-center'>
              <button onClick={this.addCard} className='btn btn-default'>Add Another Offense - California (only) +</button>
            </div>

    )
  }
}

CaliforniaCriminalBackground.defaultProps = {
  crimes: []
}
