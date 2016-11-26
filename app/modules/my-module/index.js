/**
 * Created by dman on 15/11/2016.
 */

import angular from 'angular'
import ProductController from './src/main/controllers/MyController'
import ProductService from './src/main/services/MyService'

export default angular.module('myApp', [])
  .controller('myController', ProductController)
  .service('myService', ProductService)
  .name
