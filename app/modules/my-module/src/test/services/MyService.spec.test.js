'use strict'
/* eslint-env jasmine */
/* eslint-env protractor *
 /* eslint-env phantomjs */

import shop from '../../../index'

describe('My Service Tests', () => {
  let myService = null

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
    },
    {
      sku: 'C',
      price: 40.0,
      description: 'Item C Description'
    }
  ]

  beforeEach(angular.mock.module(shop))

  beforeEach(angular.mock.inject((_myService_) => {
    myService = _myService_
  }))

  it('Product Should be defined ', () => {
    expect(myService).toBeDefined()
  })

  it('Should return all items managed by the product service', () => {
    const products = myService.findAll()
    expect(itemsList).toEqual(products)
  })

  it('Should return product with SKU "A"', () => {
    const product = myService.findBySku('A')
    expect(product).toEqual(itemsList[0])
  })

  it('Should add a new item to the items managed by the product service', () => {
    const newProduct = {
      sku: 'D',
      price: 50.0,
      description: 'Item D Description'
    }

    itemsList.push(newProduct)

    myService.addItem(newProduct)

    expect(myService.findAll()).toEqual(itemsList)
  })
})
