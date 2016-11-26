/**
 * Created by dman on 06/11/2016.
 */   

import mainCss from './css/main.css'
import normalizeCss from './css/normalize.css'
import appCss from './css/app.css'

import ProductService from './modules/my-module/src/main/services/MyService'

import ProductController from './modules/my-module/src/main/controllers/MyController'

import angular from 'angular'
import uirouter from 'angular-ui-router'

export default angular.module('myModule', [uirouter])
  .service('myService', ProductService)
  .controller('myController', ProductController)
