/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      header: 'Go Gitters',
      newReview: '',
      reviewerName: '',
      reviews: [{author: 'Anonymous', text: 'Vue.js is super cool', complete: false}, {author: 'Anonymous', text: 'I think this is all bad', complete: false}, {author: 'Anonymous', text: 'I do get the point of this', complete: false}, {author: 'Anonymous', text: 'I think everything is cool', complete: false}]
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
      },
      markComplete: function(review) {
        review.complete = !review.complete;
        this.countIncomplete();
      },
      countIncomplete: function() {
        var counter = 0;
        for (var i = 0; i < this.reviews.length; i++) {
          if (!this.reviews[i].complete) {
            counter++;
          }
        }
        return counter;
      },
      removeCompletedReviews: function() {
        var incompleteReviews = [];
        for (var i = 0; i < this.reviews.length; i++) {
          if (!this.reviews[i].complete) {
            incompleteReviews.push(this.reviews[i]);
          }
        }
        this.reviews = incompleteReviews;
      }
    }
  });
});
