webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = {};

module.exports = store;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

__webpack_require__(3);

// styles
__webpack_require__(10);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// ~~~~~~~~~~~~~~~~~~~~~
// ON DOCUMENT READY
// ~~~~~~~~~~~~~~~~~~~~~

var authEvents = __webpack_require__(4);

$(function () {
  authEvents.addHandlers();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var getFormFields = __webpack_require__(5);
var api = __webpack_require__(7);
var ui = __webpack_require__(9);

// ~~~~~~~~~~~~~~~~~~~~~~`
//  FORM FIELD FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~`

var onSignUp = function onSignUp(event) {
  event.preventDefault();
  //  console.log('sign up ran!')

  var data = getFormFields(this);
  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure);
};

var onSignIn = function onSignIn(event) {
  event.preventDefault();
  //  console.log('sign in ran!')

  var data = getFormFields(this);
  api.signIn(data).then(ui.signInSuccess).catch(ui.signInFailure);
};

// const onGetMyId = function (event) {
//   event.preventDefault()
//   console.log('get my ID ran!')
//
//   const data = getFormFields(this)
//   // api.signIn('id')
//     .then(ui.getMyId)
// }

var onSignOut = function onSignOut(event) {
  event.preventDefault();
  //  console.log('sign out ran')

  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure);
};

var onChangePassword = function onChangePassword(event) {
  event.preventDefault();
  // console.log('change password ran!')

  var data = getFormFields(this);
  api.changePassword(data).then(ui.changePasswordSuccess).catch(ui.changePasswordFailure);
};

var addCoffee = function addCoffee(event) {
  event.preventDefault();
  // console.log('coffee recorded!')

  var data = getFormFields(this);
  api.onCoffeeSubmit(data).then(ui.addCoffeeSuccess).catch(ui.addCoffeeFailure);
};

var addTasting = function addTasting(event) {
  event.preventDefault();
  // console.log('tasting recorded!')

  var data = getFormFields(this);
  api.onTastingSubmit(data).then(ui.addTastingSuccess).catch(ui.addedTastingFailure);
};

// const getOneCoffeeId = function (event) {
//   event.preventDefault()
//   console.log('get my coffee ID ran!')
//
//   const data = getFormFields('id')
//   api.onGetOneCoffeeId(data)
//     .then(ui.getCoffeeId)
// }

var getAllCoffees = function getAllCoffees(event) {
  event.preventDefault();
  // console.log('got all coffees!')

  var data = getFormFields(this);
  api.onGetAllCoffees(data).then(ui.getAllCoffeesSuccess).catch(ui.getAllCoffeesFailure);
};

var getAllTastings = function getAllTastings(event) {
  event.preventDefault();
  // console.log('got all tastings!')

  var data = getFormFields(this);
  api.onGetAllTastings(data).then(ui.getAllTastingsSuccess).catch(ui.getAllTastingsFailure);
};

var getOneTastingById = function getOneTastingById(event) {
  event.preventDefault();
  // console.log('events got one tasting by id')

  var data = getFormFields(this);
  api.onGetOneTastingById(data).then(ui.getOneTastingByIdSuccess).catch(ui.getOneTastingByIdFailure);
};

var getOneTastingByIdAndEdit = function getOneTastingByIdAndEdit(event) {
  //  console.log('in getOneTastingByIdAndEdit, editTastingButton clicked')
  event.preventDefault();

  var data = getFormFields(this);
  api.onGetOneTastingById(event.data).then(ui.getOneTastingByIdAndEditSuccess).catch(ui.getOneTastingByIdAndEditFailure);
};

var editTasting = function editTasting(data) {
  event.preventDefault();
  //  console.log('edittasting button clicked')
  // $('#editTastingButton').addClass('hidden')
  $('#getOneTastingByIdAndEdit').removeClass('hidden');
  $('#submitIdForEdit').removeClass('hidden');

  var fields = getFormFields(this);
  //  console.log(data)
  api.onEditTasting(fields).then(ui.getOneTastingByIdAndEditSuccess).catch(ui.editTastingFailure);
};

// ~~~~~~~~~~~~~~~~~~~~~~
// HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~

var addHandlers = function addHandlers() {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#coffee').on('submit', addCoffee);
  $('#tasting').on('submit', addTasting);
  $('#getAllCoffees').on('click', getAllCoffees);
  $('#getAllCoffees').on('click', ui.selectCoffeeForTasting);
  $('#getAllTastings').on('click', getAllTastings);
  $('#getOneTastingById').on('submit', getOneTastingById);
  $('#editTastingButton').on('click', getOneTastingByIdAndEdit);
  // $('#getOneTastingByIdAndEditForm').on('submit', editTasting)
  $('#getOneTasting').on('click', $('#submitId').removeClass('hidden'));
  $('#cancelEdit').on('click', $('#getOneTasting').toggle);
};

module.exports = {
  addHandlers: addHandlers
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(6);

var getFormFields = function getFormFields(form) {
  var target = {};

  var elements = form.elements || [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    var type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    var name = e.getAttribute('name');

    if (type === 'MULTIPLE') {
      for (var _i = 0; _i < e.length; _i++) {
        if (e[_i].selected) {
          addNestedValue(target, name, e[_i].value);
        }
      }
    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
      addNestedValue(target, name, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = function addNestedValue(pojo, name, value) {
  var recurse = function recurse(pojo, keys, value) {
    var key = keys.shift();
    var next = keys[0];
    if (next === '') {
      // key is an array
      pojo[key] = pojo[key] || [];
      pojo[key].push(value);
    } else if (next) {
      // key is a parent key
      pojo[key] = pojo[key] || {};
      recurse(pojo[key], keys, value);
    } else {
      // key is the key for value
      pojo[key] = value;
    }

    return pojo;
  };

  var keys = name.split('[').map(function (k) {
    return k.replace(/]$/, '');
  });
  return recurse(pojo, keys, value);
};

module.exports = addNestedValue;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var config = __webpack_require__(8);
var store = __webpack_require__(1);

// ~~~~~~~~~~~~~~~~~~~~
//  SIGN UP SIGN IN API
// ~~~~~~~~~~~~~~~~~~~~

var signUp = function signUp(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  });
};

var signIn = function signIn(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  });
};

var signOut = function signOut() {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var changePassword = function changePassword(data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

var onTastingSubmit = function onTastingSubmit(data) {
  //  console.log('inside api.onTastingSubmit and the data is', data)
  return $.ajax({
    url: config.apiUrl + '/tastings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

var onCoffeeSubmit = function onCoffeeSubmit(data) {
  //  console.log(data, store)
  return $.ajax({
    url: config.apiUrl + '/coffees',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

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

var onGetAllCoffees = function onGetAllCoffees(data) {
  return $.ajax({
    url: config.apiUrl + '/coffees',
    method: 'GET',
    data: data
  });
};

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

var onGetAllTastings = function onGetAllTastings(data) {
  return $.ajax({
    url: config.apiUrl + '/tastings',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

var onGetOneTastingById = function onGetOneTastingById(data) {
  //  console.log('inside api.gettastingbyid and the data is', data)
  return $.ajax({
    url: config.apiUrl + '/tastings/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

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

var onEditTasting = function onEditTasting(data) {
  //  console.log('inside api.oneditTasting and the data is', data)
  return $.ajax({
    url: config.apiUrl + '/tastings/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  onTastingSubmit: onTastingSubmit,
  onCoffeeSubmit: onCoffeeSubmit,
  onGetAllCoffees: onGetAllCoffees,
  onGetAllTastings: onGetAllTastings,
  onGetOneTastingById: onGetOneTastingById,
  onEditTasting: onEditTasting
  // ongetOneTastingByIdAndEdit
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apiUrl = void 0;
var apiUrls = {
  production: 'https://quiet-fjord-54164.herokuapp.com',
  development: 'http://localhost:4741'
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

module.exports = {
  apiUrl: apiUrl
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var store = __webpack_require__(1);
// const events = require('./events')

var signUpSuccess = function signUpSuccess(data) {
  $('#sign-out').removeClass('hidden');
  $('#sign-up').addClass('hidden');
  $('#change-password').removeClass('hidden');
  $('#signUpSuccess').modal({
    show: true
  });
  setTimeout(function () {
    $('#signUpSuccess').modal('hide');
  }, 2000);
  $('#sign-up')[0].reset();
  // console.log('signUpSuccess ran. Data is :', data)
};

var signUpFailure = function signUpFailure(error) {
  $('#signInFailure').modal({
    show: true
  });
  setTimeout(function () {
    $('#signUpFailure').modal({
      show: false
    });
  }, 2000);
  $('#sign-up')[0].reset();
  console.error('signUpFailure ran. Error is :', error);
};

var signInSuccess = function signInSuccess(data) {
  $('#sign-out').removeClass('hidden');
  $('#sign-in').addClass('hidden');
  $('#sign-up').addClass('hidden');
  $('#change-password').removeClass('hidden');
  $('#myId').removeClass('hidden');
  // console.log('signInSuccess ran. Data is :', data)
  $('#signInSuccess').modal({
    show: true
  });
  setTimeout(function () {
    $('#signInSuccess').modal('hide');
  }, 2000);
  store.user = data.user;
  // console.log(store.user.id)
  $('#sign-in')[0].reset();
  // $('#myId').html(`<p>${store.user.id}</p>`)
};

var signInFailure = function signInFailure(error) {
  $('#signInFailure').modal({
    show: true
  });
  setTimeout(function () {
    $('#signInFailure').modal('hide');
  }, 2000);
  $('#sign-in')[0].reset();
  console.error('signInFailure ran. Error is :', error);
};

var signOutSuccess = function signOutSuccess() {
  $('#sign-in').removeClass('hidden');
  $('#sign-up').removeClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#change-password').addClass('hidden');
  $('#signOutSuccess').modal({
    show: true
  });
  setTimeout(function () {
    $('#signOutSuccess').modal('hide');
  }, 2000);
  $('#sign-out')[0].reset();
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null;
};

var signOutFailure = function signOutFailure(error) {
  $('#signOutFailure').modal({
    show: true
  });
  setTimeout(function () {
    $('#signOutFailure').modal('hide');
  }, 2000);
  $('#sign-out')[0].reset();
  console.error('signOutFailure ran. Error is :', error);
};

var changePasswordSuccess = function changePasswordSuccess() {
  $('#changePasswordSuccess').modal({
    show: true
  });
  setTimeout(function () {
    $('#changePasswordSuccess').modal('hide');
  }, 2000);
  $('#change-password')[0].reset();
  // console.log('changePasswordSuccess ran and nothing was returned!')
};

var changePasswordFailure = function changePasswordFailure(error) {
  $('#changePasswordFailure').modal({
    show: true
  });
  setTimeout(function () {
    $('#changePasswordFailure').modal('hide');
  }, 2000);
  $('#change-password')[0].reset();
  console.error('changePasswordFailure ran. Error is :', error);
};

var addCoffeeSuccess = function addCoffeeSuccess() {
  $('#addCoffeeSuccess').modal({
    show: true
  });
  setTimeout(function () {
    $('#addCoffeeSuccess').modal('hide');
  }, 2000);
  $('#coffee')[0].reset();
  // console.log('addCoffeeSuccess ran and nothing was returned!')
};

var addCoffeeFailure = function addCoffeeFailure(error) {
  $('#addCoffeeFailure').modal({
    show: true
  });
  setTimeout(function () {
    $('#addCoffeeFailure').modal('hide');
  }, 2000);
  console.error('addCoffeeFailure ran. Error is :', error);
};

var addTastingSuccess = function addTastingSuccess() {
  $('#addTastingSuccess').modal({
    show: true
  });
  setTimeout(function () {
    $('#addTastingSuccess').modal('hide');
  }, 2000);
  $('#tasting')[0].reset();
  // console.log('addTastingSuccess ran and nothing was returned!')
};

var addTastingFailure = function addTastingFailure(error) {
  $('#addTastingFailure').modal({
    show: true
  });
  setTimeout(function () {
    $('#addTastingFailure').modal('hide');
  }, 2000);
  console.error('addTastingFailure ran. Error is :', error);
};

var getAllCoffeesSuccess = function getAllCoffeesSuccess(data) {
  // console.log('getAllCoffeesSuccess ran and the data is ', data)
  // console.log('In getAllCoffeeSuccess and data.coffees is ', data.coffees)
  generateCoffeeTableDiv(data);
};

var getAllTastingsSuccess = function getAllTastingsSuccess(data) {
  $('#getAllTastingsSuccess').modal({
    show: true
  });
  setTimeout(function () {
    $('#getAllTastingsSuccess').modal('hide');
  }, 2000);
  // console.log('getAllTastingsSuccess ran and the data is ', data)
  // console.log('In getAllTastingsSuccess and data.tastings is ', data.coffees)
  generateAllTastingsTable(data);
};

var generateOneTastingByIdTable = function generateOneTastingByIdTable(data) {
  var table = document.createElement('table');
  table.id = 'tastingTable';
  var tableData = void 0;
  var inputField = void 0;
  // console.log('generateOneTastingByIdTable and the data is ', data)
  var coffeeFields = ['roaster', 'blend', 'rating', 'fave'];
  var fields = ['notes', 'grams_in', 'grams_out', 'time', 'temperature', 'extraction_notes'];
  var tableRow = document.createElement('tr');
  tableData = document.createElement('th');
  tableData.innerHTML = 'Property';
  inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.name = 'id';
  inputField.value = data.tasting.id;
  inputField.setAttribute('type', 'hidden');
  tableData.appendChild(inputField);
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'Value';
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
  for (var _i = 0; _i < coffeeFields.length; _i++) {
    tableRow = document.createElement('tr');
    tableData = document.createElement('td');
    tableData.innerHTML = coffeeFields[_i];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.name = 'tasting.coffee[' + coffeeFields[_i] + ']';
    inputField.value = data.tasting.coffee[coffeeFields[_i]];
    tableData.appendChild(inputField);
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
  for (var _i2 = 0; _i2 < fields.length; _i2++) {
    tableRow = document.createElement('tr');
    tableData = document.createElement('td');
    tableData.innerHTML = fields[_i2];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.name = 'tasting[' + fields[_i2] + ']';
    inputField.value = data.tasting[fields[_i2]];
    tableData.appendChild(inputField);
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
  tableRow = document.createElement('tr');
  tableData = document.createElement('td');
  var btn = document.createElement('button');
  btn.innerHTML = "<button type ='button' id='cancelEdit'>CANCEL</button>";
  tableData.appendChild(btn);
  tableRow.appendChild(tableData);
  tableData = document.createElement('td');
  // tableRow.appendChild(tableData)
  // table.appendChild(tableRow)
  // tableData.innerHTML = "<id='submitTD'>"
  btn = document.createElement('button');
  btn.innerHTML = "<button type ='button' id='submitEdit' class ='submit'>SAVE EDIT</button>";
  tableData.appendChild(btn);
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
  document.getElementById('getOneTastingByIdAndEditForm').appendChild(table);
  // console.log('adding one tastings by id table', table)
};

var getOneTastingByIdSuccess = function getOneTastingByIdSuccess(data) {
  // console.log('in getOneTastingByIdSuccess')
  // const myTable = document.getElementById('tastingTable')
  generateOneTastingByIdTable(data);
  $('#singleTastingTableForEdit').removeClass('hidden');
  $('#submitId').addClass('hidden');
  $('#submitIdForEdit').addClass('hidden');
  $('#edit').removeClass('hidden');
};
//
// const generateOneTastingByIdAndEditTable = function (data) {
//   debugger
//   const table = document.createElement('table')
//   table.id = 'tastingTable'
//   let tableData
//   let inputField
//   console.log('generateOneTastingByIdAndEditTable and the data is ', data)
//   const coffeeFields = ['roaster', 'blend', 'rating', 'fave']
//   const fields = ['notes', 'grams_in', 'grams_out', 'time', 'temp', 'extraction_notes']
//   let tableRow = document.createElement('tr')
//   tableData = document.createElement('th')
//   tableData.innerHTML = 'Property'
//   tableRow.appendChild(tableData)
//   tableData = document.createElement('th')
//   tableData.innerHTML = 'Value'
//   tableRow.appendChild(tableData)
//   table.appendChild(tableRow)
//   for (let i = 0; i < coffeeFields.length; i++) {
//     tableRow = document.createElement('tr')
//     tableData = document.createElement('td')
//     tableData.innerHTML = coffeeFields[i]
//     tableRow.appendChild(tableData)
//     tableData = document.createElement('td')
//     inputField = document.createElement('input')
//     inputField.type = 'text'
//     inputField.name = 'tasting.coffee[' + coffeeFields[i] + ']'
//     inputField.placeholder = data.tasting.coffee[coffeeFields[i]]
//     tableData.appendChild(inputField)
//     tableRow.appendChild(tableData)
//     table.appendChild(tableRow)
//   }
//   for (let i = 0; i < fields.length; i++) {
//     tableRow = document.createElement('tr')
//     tableData = document.createElement('td')
//     tableData.innerHTML = fields[i]
//     tableRow.appendChild(tableData)
//     tableData = document.createElement('td')
//     inputField = document.createElement('input')
//     inputField.type = 'text'
//     inputField.name = 'tasting[' + fields[i] + ']'
//     inputField.placeholder = data.tasting[fields[i]]
//     tableData.appendChild(inputField)
//     tableRow.appendChild(tableData)
//     table.appendChild(tableRow)
//   }
//   // tableRow = document.createElement('tr')
//   // tableData = document.createElement('td')
//   // const btn = document.createElement('button')
//   // btn.innerHTML = "<button type ='button' class ='submit'>SAVE EDIT</button>"
//   // tableData.appendChild(btn)
//   // tableRow.appendChild(tableData)
//   // table.appendChild(tableRow)
//
//   document.getElementById('singleTastingTableForEdit').appendChild(table)
//   console.log('Adding one tastings by id for edit table', table)
// }

var clickOnSubmitIdForEdit = function clickOnSubmitIdForEdit(data) {
  var myTable = document.getElementById('singleTastingTableForEdit');
  if (myTable !== null) {
    $('#editTasting'(data));
  } else {
    generateOneTastingByIdTable(data);
    // $('#singleTastingTableForEdit').removeClass('hidden')
    $('#submitIdForEdit').addClass('hidden');
    $('#edit').removeClass('hidden');
    $('#submitEdit').removeClass('hidden');
  }
};

var getOneTastingByIdAndEditSuccess = function getOneTastingByIdAndEditSuccess(data) {
  //  console.log('in getOneTastingByIdAndEditSuccess')
  var myTable = document.getElementById('singleTastingTableForEdit');
  if (myTable !== null) {
    $('#editTasting'(data));
  } else {
    generateOneTastingByIdTable(data);
    $('#singleTastingTable').removeClass('hidden');
    $('#submitIdForEdit').addClass('hidden');
    $('#edit').removeClass('hidden');
    $('#submitEdit').removeClass('hidden');
  }
};

var editTastingSuccess = function editTastingSuccess(data) {
  //  console.log('in editTastingSuccess and nothing was returned')
};

var editTastingFailure = function editTastingFailure(data) {
  //  console.log('in editTastingFailure')
};

var i = void 0;
var acc = document.getElementsByClassName('accordion');

for (i = 0; i < acc.length; i++) {
  // console.log('counter: ', i)
  acc[i].addEventListener('click', function () {
    $('table').empty();
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

// const coffee = document.getElementsByClassName('coffee')
//
// function selectCoffeeForTasting () {
//   coffee.onclick = function (event) {
//     // console.log('coffee clicked')
//     event = event || window.event // IE8
//     let target = event.target || event.srcElement
//     while (target && target.nodeName !== 'tr') { // find TR
//       target = target.parentElement
//     }
//     const cells = target.cells
//     if (!cells.length || target.parentNode.nodeName === 'th') {
//       return
//     }
//     const id = document.getElementById('id')
//     for (let c = 0; c < tr.length; c++) {
//       const cell = row.insertCell(-1)
//       // cell.setAttribute(class: 'coffee';)
//       id.value = cells[0].innerHTML
//     // console.log(target.nodeName, event)
//     }
//   }
// }

var generateCoffeeTableDiv = function generateCoffeeTableDiv(data) {
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('th');
  tableData.innerHTML = 'id';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'roaster';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'blend';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'rating';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'favorite';
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
  for (var row = 0; row < data.coffees.length; row++) {
    tableRow = document.createElement('tr');
    tableData = document.createElement('td');
    tableData.innerHTML = data.coffees[row]['id'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.coffees[row]['roaster'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.coffees[row]['blend'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.coffees[row]['rating'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.coffees[row]['favorite'];
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
  document.getElementById('myCoffeesTable').appendChild(table);
  // console.log('adding table', table)
};

var generateAllTastingsTable = function generateAllTastingsTable(data) {
  //  console.log(data.tastings)
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('th');
  tableData.innerHTML = 'ID';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'roaster';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'blend';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'rating';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'fave';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'notes';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'grams_in';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'grams_out';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'time';
  tableData = document.createElement('th');
  tableData.innerHTML = 'temp';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'extraction_notes';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = '';
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
  for (var row = 0; row < data.tastings.length; row++) {
    tableRow = document.createElement('tr');
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row]['id'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row].coffee['roaster'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row].coffee['blend'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row].coffee['rating'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row].coffee['favorite'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row]['tasting_notes'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row]['grams_in'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row]['grams_out'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row]['time'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row]['temperature'];
    tableRow.appendChild(tableData);
    tableData = document.createElement('td');
    tableData.innerHTML = data.tastings[row]['extraction_notes'];
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
  document.getElementById('allTastingsTable').appendChild(table);
  $('table tr th').addClass('tastingsHeader');
  // console.log('adding all tastings table', table)
};

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  addCoffeeFailure: addCoffeeFailure,
  addCoffeeSuccess: addCoffeeSuccess,
  addTastingSuccess: addTastingSuccess,
  addTastingFailure: addTastingFailure,
  getAllCoffeesSuccess: getAllCoffeesSuccess,
  generateCoffeeTableDiv: generateCoffeeTableDiv,
  generateAllTastingsTable: generateAllTastingsTable,
  getAllTastingsSuccess: getAllTastingsSuccess,
  generateOneTastingByIdTable: generateOneTastingByIdTable,
  getOneTastingByIdSuccess: getOneTastingByIdSuccess,
  getOneTastingByIdAndEditSuccess: getOneTastingByIdAndEditSuccess,
  clickOnSubmitIdForEdit: clickOnSubmitIdForEdit,
  editTastingSuccess: editTastingSuccess,
  editTastingFailure: editTastingFailure
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(11);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(13)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Raleway', sans-serif; }\n\n.hidden {\n  display: none; }\n\n/* The Modal (background) */\n.modal {\n  background-color: #e2f984;\n  outline: none;\n  display: none;\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  height: auto; }\n\n/* The Close Button */\n.close {\n  border: none;\n  outline: none;\n  color: #9ece00;\n  float: right;\n  font-size: 1.4rem;\n  font-weight: 300;\n  padding: 4vw; }\n\n.close-fail {\n  border: none;\n  outline: none;\n  color: #f98900;\n  float: right;\n  font-size: 1.4rem;\n  font-weight: 300;\n  padding: 4vw; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\n:focus {\n  outline: none; }\n\nbody {\n  background-image: url(\"https://i.imgur.com/VLDGvOg.jpg\");\n  margin: 0 auto; }\n\n#maxWidth {\n  background-color: #f0e4cd;\n  position: relative;\n  max-width: 450px;\n  margin: 0 auto;\n  overflow: auto; }\n\n@media only screen and (max-width: 600px) and (min-width: 300px) {\n  #logo {\n    -webkit-transform: rotate(90deg) translateX(-400px) translateY(-15%);\n    /* Safari */\n    transform: rotate(90deg) translateX(-610%) translateY(-15%);\n    transform-origin: bottom left;\n    margin: 0 auto;\n    float: none;\n    max-width: 12vw; }\n  #spacer {\n    height: 18vw; } }\n\n#logo {\n  float: left;\n  margin: 1%;\n  position: absolute;\n  max-height: 500px; }\n\nh3 {\n  text-align: left;\n  float: left;\n  font-weight: 400;\n  font-size: 1.2rem; }\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n  text-align: center;\n  table-layout: fixed;\n  border-spacing: 0px; }\n\ntd, tr {\n  border: 1px solid #F0E4CC;\n  background-color: white;\n  color: #2B2211;\n  font-size: .65rem;\n  font-weight: 600;\n  padding: 4px; }\n\nth {\n  color: #2B2211;\n  font-size: .8rem;\n  font-weight: 600;\n  margin: 0 auto;\n  padding: 1.75vw 0 1.75vw 0;\n  word-wrap: break-word;\n  white-space: nowrap;\n  border: 1px solid #4F3828;\n  background-color: #f98900;\n  text-transform: uppercase; }\n\n.tastingsHeader {\n  height: 20px;\n  line-height: 20px;\n  color: #2B2211;\n  font-size: .8rem;\n  font-weight: 600;\n  margin: 0 auto;\n  border: 1px solid #4F3828;\n  border-collapse: collapse;\n  background-color: none;\n  text-transform: uppercase;\n  transform: rotate(-90deg);\n  transform-origin: initial;\n  text-align: center;\n  overflow: auto;\n  border-spacing: 0; }\n\np {\n  margin-right: 20px; }\n\nfieldset {\n  display: block;\n  -webkit-margin-start: 2px;\n  -webkit-margin-end: 2px;\n  -webkit-padding-before: 0em;\n  -webkit-padding-start: 0em;\n  -webkit-padding-end: 0em;\n  -webkit-padding-after: 0em;\n  min-width: -webkit-min-content;\n  border-width: 0; }\n\nlabel {\n  display: inline-block;\n  float: left;\n  clear: left;\n  text-align: left; }\n\ninput {\n  display: inline-block;\n  float: right;\n  clear: right;\n  padding: 2.5px; }\n\ninput[type='submit'] {\n  background-color: #9ece00;\n  border: none;\n  padding: 2.5px;\n  background-color: none;\n  outline: none; }\n\ninput[type='submit'].focus {\n  outline: none; }\n\nbutton {\n  border: 0px;\n  padding: 0px; }\n\nform {\n  padding: 1vw; }\n\n#oneTasting,\n#getOneTastingByIdAndEditForm {\n  padding: 0; }\n\n#notes {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100px; }\n\n.submit {\n  padding: 8px;\n  margin: 10px;\n  float: right;\n  font-size: 1rem;\n  border: none;\n  background-color: #9ece00; }\n\n.active, .submit:hover {\n  background-color: #9ece00;\n  border: none;\n  -webkit-appearance: none;\n  background-color: none; }\n\n#fave {\n  background-color: white;\n  border: 1px solid #4F3828;\n  zoom: 2; }\n\n#myId, #coffeeId {\n  color: #2B2211;\n  background-color: #9ece00;\n  width: 100%;\n  text-align: right;\n  font-weight: 500;\n  height: 3vw;\n  font-size: 1.5rem; }\n\n#submitId {\n  float: right;\n  background-color: #9ece00; }\n\n#editTastingButton {\n  float: right;\n  border: none; }\n\n#sign-up {\n  border-bottom: 1px solid black; }\n\n#oneTasting {\n  background-color: white; }\n\n#submitEdit {\n  padding: 1vw;\n  background-color: #9ece00;\n  font-size: 1rem; }\n\n#cancelEdit {\n  padding: 1vw;\n  background-color: #f98900;\n  font-size: 1rem; }\n\n.accordion {\n  background-color: #b28c5e;\n  color: #382f25;\n  cursor: pointer;\n  padding: 3vh;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 1.5rem;\n  transition: 0.4s; }\n\n.active, .accordion:hover {\n  color: white;\n  background-color: #78572e; }\n\n.panel {\n  display: none;\n  background-color: B28C5F; }\n\n.star {\n  float: right; }\n\n.rating {\n  unicode-bidi: bidi-override;\n  direction: rtl;\n  text-align: center; }\n\n.rating > span {\n  display: inline-block;\n  position: relative;\n  width: 1.1em; }\n\n.rating > span:hover,\n.rating > span:hover ~ span {\n  color: transparent; }\n\n.rating > span:hover:before,\n.rating > span:hover ~ span:before {\n  content: \"\\2605\";\n  position: absolute;\n  left: 0;\n  color: gold; }\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[2]);