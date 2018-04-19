$(document).ready(function(){

  $('select').change(function() {
    var filter = $(this).val()
    filterGenre(filter);
    filterDifficulty(filter);
    filterDays(filter);
  });

  function filterGenre(value) {
    if (value === "Dance") {
      $('.dance').show();
      $('.acting').fadeOut();
    } else if (value === "Acting") {
      $('.acting').show();
      $('.dance').fadeOut();
    } else if (value === "All") {
      $('article').show();
    }
  }

  function filterDifficulty(value) {
    if (value === "Intro") {
      $('.intro').show();
      $('.inter').fadeOut();
      $('.advanced').fadeOut();
    } else if (value === "Intermediate") {
      $('.inter').show();
      $('.intro').fadeOut();
      $('.advanced').fadeOut();
    } else if (value === "Advanced") {
      $('.advanced').show();
      $('.inter').fadeOut();
      $('.intro').fadeOut();
    }
  }

  function filterDays(value) {
    if (value === "Weekdays") {
      $('.weekdays').show();
      $('.weekends').fadeOut();
    } else if (value === "Weekends") {
      $('.weekends').show();
      $('.weekdays').fadeOut();
    }
  }

});
