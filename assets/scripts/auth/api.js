'use strict'

const config = require('../config')
const store = require('../store')

// ~~~~~~~~~~~~~~~~~~~~
//  SIGN UP SIGN IN API
// ~~~~~~~~~~~~~~~~~~~~

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onTastingSubmit = function (data) {
//  console.log('inside api.onTastingSubmit and the data is', data)
  return $.ajax({
    url: config.apiUrl + '/tastings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onCoffeeSubmit = function (data) {
//  console.log(data, store)
  return $.ajax({
    url: config.apiUrl + '/coffees',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const onGetOneCoffeeId = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/coffees',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const onGetAllCoffees = function (data) {
  return $.ajax({
    url: config.apiUrl + '/coffees',
    method: 'GET',
    data
  })
}

// const onGetMyCoffees = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/coffees',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

// const onShowCoffeeById = function (data) {
//   console.log(data)
//   return $.ajax({
//     url: config.apiUrl + '/coffees/' + data.coffee.id,
//     method: 'GET',
//     // headers: {
//     //   Authorization: 'Token token=' + store.user.token
//     // },
//     data
//   })
// }

const onGetAllTastings = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tastings',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onGetOneTastingById = function (data) {
//  console.log('inside api.gettastingbyid and the data is', data)
  return $.ajax({
    url: config.apiUrl + '/tastings/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const ongetOneTastingByIdAndEdit = function (data) {
//   console.log('inside api.gettastingbyidforedit and the data is', data)
//   return $.ajax({
//     url: config.apiUrl + '/tastings/' + data.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const onEditTasting = function (data) {
//  console.log('inside api.oneditTasting and the data is', data)
  return $.ajax({
    url: config.apiUrl + '/tastings/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  onTastingSubmit,
  onCoffeeSubmit,
  onGetAllCoffees,
  onGetAllTastings,
  onGetOneTastingById,
  onEditTasting
  // ongetOneTastingByIdAndEdit
}
