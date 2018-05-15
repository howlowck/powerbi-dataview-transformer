import get from 'lodash.get'
import zip from 'lodash.zip'
import assign from 'lodash.assign'

export function categoryTransform (dataview, groupingName, selectionBuilder) {
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

  const categoriesFiltered = categoriesOrg
    .filter(category => Object.keys(get(category, 'source.roles'))[0] === groupingName)

  const categories = categoriesFiltered.map(parseCategoricalColumnValues)

  const values = valuesOrg.map(parseCategoricalColumnValues)
  // [[{sales: 100}, {sales: 200}], [{yield: 15, yield: 20}]]

  const preAssigned = zip(...categories, ...values)

  let transformed = preAssigned.map((d) => assign({}, ...d))

  if (selectionBuilder) {
    transformed = transformed.map((d, i) => {
      return {
        ...d,
        selectionId: selectionBuilder()
          .withCategory(categoriesFiltered[0], i)
          .createSelectionId()
      }
    })
  }

  return transformed
}
