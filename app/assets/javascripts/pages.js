/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      header: 'Go Gitters',
      review1: '',
      reviews: ['Vue.js is super cool', 'I think this is all bad', 'I do not get the point of this', 'I think everything is cool']
    }
  });
});
