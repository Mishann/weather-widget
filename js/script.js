$(document).ready(function(){

getWeather('Lviv');

function getWeather(city){
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {
        q : city,
        appid : '11dcac77a39ddf638dee5d92f346e232'
      },
    type: 'get',
    success: function(res){
      var celsiusTemperature = Math.round(res.main.temp - 273.15) + '&deg;C;';
      var humidity = res.main.humidity + ' %';
      var pressure = res.main.pressure + ' hpa';
      var city = res.name;
      var country = res.sys.country;

    $('#temperature').html(celsiusTemperature);
    $('#pressure').text(pressure);
    $('#humidity').text(humidity);
    $('#city').text(city);
    $('#country').text(country);

  },
  error: function(error){
  alert('Error');
  },
})
}

$('#submitBtn').click(function(e){
  e.preventDefault();
  var city = $('#cityName').val();
  getWeather(city);
});


})
