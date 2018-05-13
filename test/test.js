// Copyright (c) 2018 Hao Luo
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* global it describe */

const expect = require('chai').expect
const index = require('../dist/index.js')

const inputDataview = {
  'metadata': {
    'columns': [
      {
        'roles': {
          'name': true
        },
        'type': {
          'underlyingType': 1,
          'category': null
        },
        'displayName': 'Name',
        'queryName': 'variableWidth.Name',
        'expr': {
          '_kind': 2,
          'source': {
            '_kind': 0,
            'entity': 'variableWidth'
          },
          'ref': 'Name'
        }
      },
      {
        'roles': {
          'width': true
        },
        'type': {
          'underlyingType': 260,
          'category': null
        },
        'displayName': 'Sales',
        'queryName': 'Sum(variableWidth.Sales)',
        'expr': {
          '_kind': 4,
          'arg': {
            '_kind': 2,
            'source': {
              '_kind': 0,
              'entity': 'variableWidth'
            },
            'ref': 'Sales'
          },
          'func': 0
        },
        'sort': 2,
        'sortOrder': 0
      },
      {
        'roles': {
          'actualHeight': true
        },
        'type': {
          'underlyingType': 259,
          'category': null
        },
        'displayName': 'Current Pt',
        'queryName': 'Sum(variableWidth.Current Pt)',
        'expr': {
          '_kind': 4,
          'arg': {
            '_kind': 2,
            'source': {
              '_kind': 0,
              'entity': 'variableWidth'
            },
            'ref': 'Current Pt'
          },
          'func': 0
        }
      }
    ]
  },
  'categorical': {
    'categories': [
      {
        'source': {
          'roles': {
            'name': true
          },
          'type': {
            'underlyingType': 1,
            'category': null
          },
          'displayName': 'Name',
          'queryName': 'variableWidth.Name',
          'expr': {
            '_kind': 2,
            'source': {
              '_kind': 0,
              'entity': 'variableWidth'
            },
            'ref': 'Name'
          }
        },
        'values': [
          'Three',
          'Two',
          'Nine',
          'Eight',
          'Seven',
          'Five',
          'Four'
        ]
      }
    ],
    'values': [
      {
        'source': {
          'roles': {
            'width': true
          },
          'type': {
            'underlyingType': 260,
            'category': null
          },
          'displayName': 'Sales',
          'queryName': 'Sum(variableWidth.Sales)',
          'expr': {
            '_kind': 4,
            'arg': {
              '_kind': 2,
              'source': {
                '_kind': 0,
                'entity': 'variableWidth'
              },
              'ref': 'Sales'
            },
            'func': 0
          },
          'sort': 2,
          'sortOrder': 0
        },
        'values': [
          10000000,
          7600000,
          7200000,
          5300000,
          4900000,
          3500000,
          2300000
        ]
      },
      {
        'source': {
          'roles': {
            'actualHeight': true
          },
          'type': {
            'underlyingType': 259,
            'category': null
          },
          'displayName': 'Current Pt',
          'queryName': 'Sum(variableWidth.Current Pt)',
          'expr': {
            '_kind': 4,
            'arg': {
              '_kind': 2,
              'source': {
                '_kind': 0,
                'entity': 'variableWidth'
              },
              'ref': 'Current Pt'
            },
            'func': 0
          }
        },
        'values': [
          0.055,
          0.215,
          0.01,
          0.12,
          0.24,
          0.15,
          0.035
        ]
      }
    ]
  }
}

describe('categoryTransform function test', () => {
  it('should return Expected Object', () => {
    var result = index.categoryTransform(inputDataview)
    expect(result).to.have.nested.property('[0].name', 'Three')
    expect(result).to.have.nested.property('[0].actualHeight', 0.055)
    expect(result).to.have.nested.property('[0].width', 10000000)
    expect(result).to.have.nested.property('[6].name', 'Four')
    expect(result).to.have.nested.property('[6].actualHeight', 0.035)
    expect(result).to.have.nested.property('[6].width', 2300000)
  })
})
