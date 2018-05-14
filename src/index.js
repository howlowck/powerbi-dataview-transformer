import get from 'lodash/get'
import zip from 'lodash/zip'
import assign from 'lodash/assign'

export function categoryTransform (dataview) {
  'use strict'
  const categoriesOrg = get(dataview, 'categorical.categories', [])
  const valuesOrg = get(dataview, 'categorical.values', [])
  const parseCategoricalColumnValues = (d) => {
    const keyName = Object.keys(get(d, 'source.roles'))[0]
    const values = d.values
    return values.map(v => ({
      [keyName]: v
    }))
  }

  const categories = categoriesOrg.map(parseCategoricalColumnValues) // [[{name: 'one'}, {name: 'two'}]]

  const values = valuesOrg.map(parseCategoricalColumnValues)

  const preAssigned = zip(...categories, ...values)

  return preAssigned.map((d) => assign({}, ...d))
}
