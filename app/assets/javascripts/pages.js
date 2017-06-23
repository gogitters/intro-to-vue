/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      header: 'Go Gitters',
      newReview: '',
      reviewerName: '',
      reviews: [{author: 'Anonymous', text: 'Vue.js is super cool'}, {author: 'Anonymous', text: 'I think this is all bad'}, {author: 'Anonymous', text: 'I do get the point of this'}, {author: 'Anonymous', text: 'I think everything is cool'}]
    },
    methods: {
      addReview: function() {
        if (this.newReview) {
          this.reviews.push({text: this.newReview, author: this.reviewerName});
          this.newReview = "";
          this.reviewerName = "";
        } else {
          alert("Enter something!");
        }
      },
      removeReview: function(review) {
        var index = this.reviews.indexOf(review);
        this.reviews.splice(index, 1);
      },
      isNotBad: function(review) {
        return review.text.toLowerCase().indexOf('bad') === -1;
      }
    }
  });
});
