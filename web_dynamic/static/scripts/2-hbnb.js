window.addEventListener('load', function () {
  $.ajax('http://localhost:5001/api/v1/status').done(function (data) {
    if (data.status === 'OK') {
      $('#api_status').css('background-color', '#ff545f');
      $('#api_status').addClass('available');
    } else {
      $('#api_status').css('background-color', '#ccc');
      $('#api_status').removeClass('available');
    }
  });

  const amenityIds = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      amenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityIds[$(this).attr('data-id')];
    }
    if (Object.keys(amenityIds).length === 0) {
      $('div.amenities h4').html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(amenityIds).join(', '));
    }
  });
});
