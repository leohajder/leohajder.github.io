/* global $, Handlebars */

Handlebars.registerHelper('substr', function (length, context, options) {
  if (context) {
    if (context.length > length) {
      return context.substring(0, length) + "...";
    }

    return context
  }
  
  return null
})

var template = Handlebars.templates['template']

var contextData = {}

$(function () {
  $.ajax({
    url: 'https://gist.githubusercontent.com/leohajder/3048708ff1d73968617c46792fe988f6/raw',
    async: false
  }).done(function (contextDataResponse) {
    contextData = JSON.parse(contextDataResponse)

    if (contextData.birthDate) {
      contextData.age = new Date(new Date() - new Date(contextData.birthDate)).getFullYear() - 1970
    }
  })

  $.ajax({
    url: 'https://api.github.com/users/leohajder/repos',
    async: false
  }).done(function (reposResponse) {
    contextData.repos = reposResponse
  }).fail(function () {
    contextData.repos = {}
  })

  $('#content').append(template(contextData))

  $(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
      $(this).collapse('hide')
    }
  })
})
