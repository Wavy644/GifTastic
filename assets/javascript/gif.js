$(document).ready(function() {

  $('button').on('click', function() {
    var sport = $(this).data('name');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=DF2L9z2UdPuWwh4AtyQttF8UY68K5GdS&limit=10";

    // var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=DF2L9z2UdPuWwh4AtyQttF8UY68K5GdS&limit=5");
    // queryURL.done(function(data) { console.log("success got data", data); });
    
    $.ajax({
      url: queryURL,
      method: 'GET'
    })
      .done(function(response){
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length;i++) {
          var sportDiv = $('<div/>');
          var p = $('<p/>');

          p.text(results[i].rating);

          var sportImage = $('<img/>');

          sportImage.addClass('spImg');

          sportImage.attr('src', results[i].images.url)

          sportImage.attr('data-still', results[i].images.url)

          sportImage.attr('data-animate', results[i].images.url)

          .attr('data-state', 'still');

          sportImage.append(p);
          sportImage.append(sportImage);
          sportImage.prependTo($('#gifs'));
        }

        $('spImg').on('click', function(){
          var state = $(this).attr('data-state');

          console.log(this);

          if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
          } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
          }
        });
      });
  });
  var sports = [''];

  $('#thebutton').on('click', function(){
    var sportButton = $('#gif-input').val();

    var newButton = $('<button/>').addClass( "btn btn-info sport").attr('data-name', sportButton).html(sportButton);

    $('#sportButton').append(newButton);
    
    queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=DF2L9z2UdPuWwh4AtyQttF8UY68K5GdS=&limit=10";
      console.log(sportButton);

      // var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=" + sport "&api_key=DF2L9z2UdPuWwh4AtyQttF8UY68K5GdS&limit=10");
      // queryURL.done(function(data) { console.log("success got data", data); });


    $.ajax({
      url: queryURL,
      method: 'GET'
    })

    .done(function(response){

      var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var sportDiv = $('<div/>');
          var p = $('<p/>');

          p.text(results[i].rating);

          var sportImage = $('<img/>');

          sportImage.addClass('spImg');

          sportImage.attr('src', results[i].images.url);

          sportImage.attr('data-still', results[i].images.url);

          sportImage.attr('data-animate',results[i].images.url)

          .attr('data-state', 'still');

          sportDiv.append(p);

          sportDiv.append(sportImage);

          sportDiv.prependTo($('#gifs'));
      }
    });
  });

  $('#gif-input').val("");
  return false;
})

