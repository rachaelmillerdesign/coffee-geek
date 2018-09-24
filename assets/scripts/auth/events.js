'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// ~~~~~~~~~~~~~~~~~~~~~~`
//  FORM FIELD FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~`

const onSignUp = function (event) {
  event.preventDefault()
//  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
//  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// const onGetMyId = function (event) {
//   event.preventDefault()
//   console.log('get my ID ran!')
//
//   const data = getFormFields(this)
//   // api.signIn('id')
//     .then(ui.getMyId)
// }

const onSignOut = function (event) {
  event.preventDefault()
  //  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addCoffee = function (event) {
  event.preventDefault()
  // console.log('coffee recorded!')

  const data = getFormFields(this)
  api.onCoffeeSubmit(data)
    .then(ui.addCoffeeSuccess)
    .catch(ui.addCoffeeFailure)
}

const addTasting = function (event) {
  event.preventDefault()
  // console.log('tasting recorded!')

  const data = getFormFields(this)
  api.onTastingSubmit(data)
    .then(ui.addTastingSuccess)
    .catch(ui.addedTastingFailure)
}

// const getOneCoffeeId = function (event) {
//   event.preventDefault()
//   console.log('get my coffee ID ran!')
//
//   const data = getFormFields('id')
//   api.onGetOneCoffeeId(data)
//     .then(ui.getCoffeeId)
// }

const getAllCoffees = function (event) {
  event.preventDefault()
  // console.log('got all coffees!')

  const data = getFormFields(this)
  api.onGetAllCoffees(data)
    .then(ui.getAllCoffeesSuccess)
    .catch(ui.getAllCoffeesFailure)
}

const getAllTastings = function (event) {
  event.preventDefault()
  // console.log('got all tastings!')

  const data = getFormFields(this)
  api.onGetAllTastings(data)
    .then(ui.getAllTastingsSuccess)
    .catch(ui.getAllTastingsFailure)
}

const getOneTastingById = function (event) {
  event.preventDefault()
  // console.log('events got one tasting by id')

  const data = getFormFields(this)
  api.onGetOneTastingById(data)
    .then(ui.getOneTastingByIdSuccess)
    .catch(ui.getOneTastingByIdFailure)
}

const getOneTastingByIdAndEdit = function (event) {
  console.log('in getOneTastingByIdAndEdit, editTastingButton clicked')
  event.preventDefault()

  const data = getFormFields(this)
  api.onGetOneTastingById(event.data)
    .then(ui.getOneTastingByIdAndEditSuccess)
    .catch(ui.getOneTastingByIdAndEditFailure)
}

const editTasting = function (data) {
  event.preventDefault()
  console.log('edittasting button clicked')
  // $('#editTastingButton').addClass('hidden')
  $('#getOneTastingByIdAndEdit').removeClass('hidden')
  $('#submitIdForEdit').removeClass('hidden')

  const fields = getFormFields(this)
  console.log(data)
  api.onEditTasting(fields)
    .then(ui.getOneTastingByIdAndEditSuccess)
    .catch(ui.editTastingFailure)
}

// ~~~~~~~~~~~~~~~~~~~~~~
// HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#coffee').on('submit', addCoffee)
  $('#tasting').on('submit', addTasting)
  $('#getAllCoffees').on('click', getAllCoffees)
  $('#getAllCoffees').on('click', ui.selectCoffeeForTasting)
  $('#getAllTastings').on('click', getAllTastings)
  $('#getOneTastingById').on('submit', getOneTastingById)
  $('#editTastingButton').on('click', getOneTastingByIdAndEdit)
  // $('#getOneTastingByIdAndEditForm').on('submit', editTasting)
  $('#getOneTasting').on('click', $('#submitId').removeClass('hidden'))
  $('#cancelEdit').on('click', $('#getOneTasting').toggle)
}

module.exports = {
  addHandlers
}
