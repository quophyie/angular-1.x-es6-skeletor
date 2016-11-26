'use strict'
/* eslint-env jasmine */
/* eslint-env protractor *
/* eslint-env phantomjs */

import myApp from '../../../index'
describe('My Tests', () => {
  let myController = null
  let $controller
  let itemsList = [
    {
      sku: 'A',
      price: 50.0,
      description: 'Item A Description'
    },
    {
      sku: 'B',
      price: 30.0,
      description: 'Item B Description'
    }]

  beforeEach(angular.mock.module(myApp))

  beforeEach(angular.mock.inject((_$controller_) => {
    $controller = _$controller_
    myController = $controller('myController')
  })
  )

  it('Should Expect myController to be defined', () => {
    expect(myController).toBeDefined()
  })
})
