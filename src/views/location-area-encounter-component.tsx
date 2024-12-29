import React, { useEffect, useState } from 'react'

import type { ILocationAreaEncounter } from '../interfaces/pokemon/Pokemon'
import type { IError } from '../interfaces/errors/Error'
import LocationEncouterService from '../services/location-encounter-service'
import { useParams } from 'react-router-dom'
import { Unique } from '../interfaces/utils/Unique'
import LoadingSpinnerComponent from '../components/loading-component'

function LocationAreaEncounterComponent (): React.JSX.Element {
  const { pokemonId } = useParams<{ pokemonId: string }>()

  const [locationAreaEncounters, setLocationAreaEncounters] = useState<ILocationAreaEncounter[]>([])
  const [errors, setErrors] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const locationEncounterService = new LocationEncouterService()
    if (pokemonId !== undefined) {
      locationEncounterService.getLocationEncounters((pokemonId.length > 0) ? Number(pokemonId) : 0)
        .then(
          (data: ILocationAreaEncounter[]) => {
            if (data.length > 0) {
              setLocationAreaEncounters(data)
              setLoading(false)
            } else {
              setErrors(true)
              setLoading(false)
              alert('Not found')
            }
          },
          (err: IError) => {
            setErrors(true)
            setLoading(false)
            alert(err.message)
          }
        )
    }
  }, [pokemonId])

  if (loading) {
    return <LoadingSpinnerComponent />
  }
  if (errors) {
    return <h6>error</h6>
  }
  if (locationAreaEncounters.length > 0) {
    return (
      <div className='container'>
        {locationAreaEncounters.map(
          (locationAreaEncounter, i) => {
            return <div key={i}>
              <h2>{locationAreaEncounter.location_area.name}</h2>
              {locationAreaEncounter.version_details.map((versionDetail, j) => {
                return <div key={j} className='container info border rounded border-info mb-3 pt-2'>
                  <div>
                    <b>version: </b>{versionDetail.version.name}
                    <br />
                    <b>maxChance: </b>{versionDetail.max_chance}
                    <br />
                    <br />
                    <h3>Conditions:</h3>
                    {(new Unique(versionDetail.encounter_details, item => {
                      let hashedItem = item.chance + ' ' + item.max_level + ' ' + item.method.name
                      if (item.condition_values.length > 0) {
                        hashedItem += ' ' + item.condition_values[0].name
                      }
                      return hashedItem
                    })).get().map((encounterDetail, k) => {
                      return (
                        <div key={k}>
                          <div>
                            <h5>{encounterDetail.method.name}</h5>
                            <b>Chance:</b> {encounterDetail.chance}
                            <br />
                            <b>MaxLevel:</b> {encounterDetail.max_level}
                            <br />
                            <b>MinLevel:</b> {encounterDetail.min_level}
                            <br />
                            <b>Conditions: </b> {encounterDetail.condition_values.map(conditionValue => { return conditionValue.name })}
                            <br />
                          </div>
                          <hr className='hr' />
                        </div>
                      )
                    })}
                  </div>
                  <br />
                </div>
              })}
              <br />
            </div>
          }
        )}
      </div>
    )
  }
  return <></>
}

export default LocationAreaEncounterComponent
