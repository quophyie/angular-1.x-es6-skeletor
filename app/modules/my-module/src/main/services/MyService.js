/**
 * Created by dman on 06/11/2016.
 */

import BusinessExceptions from '../exceptions/BusinessExceptions'

const privateDataSymnol = Symbol('privateDataSymnol')
export default class ProductService {

  constructor ($http) {
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

    let privateData = {
      items: itemsList,
      $http
    }

    this[privateDataSymnol] = privateData
  }

  findBySku (sku) {
    return this[privateDataSymnol].items.find((item) => item.sku === sku)
  }

  findAll () {
    return this[privateDataSymnol].items
  }

  addItem (item) {
    if (!item.sku || !item.price) {
      throw new BusinessExceptions.InvalidItemError('Invalid Item. Item must have SKU and price')
    }

    this[privateDataSymnol].items.push(item)
  }

}
