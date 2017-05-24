var request = require('request');

getOpenFoodTrucks = function() {
    // Assumes you are in the same region as SF
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentTime = currentDate.getHours() + ':' + ('0'+currentDate.getMinutes()).slice(-2);

    var dateQuery = 'dayorder=' + currentDay;
    var endTimeQuery = '&$where=end24>=\'' + currentTime + '\'' + ' AND start24<=\''+ currentTime + '\'';

    request('http://data.sfgov.org/resource/bbb8-hzi6.json?' + dateQuery + endTimeQuery, function (error, response, body) {
        if (error || JSON.parse(body).error) {
            console.log('Sorry, something went wrong and we couldn\'t get the list of open food trucks for you.');
        } else {
            console.log(body);
        }
    });
}();
