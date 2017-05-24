var request = require('request');

getOpenFoodTrucks = function() {
    // Assumes you are in the same region as SF
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentTime = currentDate.getHours() + ':' + ('0'+currentDate.getMinutes()).slice(-2);

    var dateQuery = 'dayorder=' + currentDay;
    var endTimeQuery = '&$where=end24>=\'' + currentTime + '\'' + ' AND start24<=\''+ currentTime + '\'';

    request('http://data.sfgov.org/resource/bbb8-hzi6.json?' + dateQuery + endTimeQuery, function (error, response, body) {
        console.log(body);
    });
}();
