var request = require('request');
var columnify = require('columnify');

getOpenFoodTrucks = function(offset) {
    // Assumes you are in the same region as SF
    var currentDate = new Date();
    var currentDay = currentDate.getDay();

    // Configure time in 24-hour format
    var currentTime = ('0' + currentDate.getHours()).slice(-2) + ':' + ('0' + currentDate.getMinutes()).slice(-2);

    var dateQuery = 'dayorder=' + currentDay;
    var endTimeQuery = '&$where=end24>=\'' + currentTime + '\'' + ' AND start24<=\''+ currentTime + '\'';

    var order = '&$order=applicant ASC';
    var limit = '&$limit=10';
    // offset = '&$offset=' + offset * 10;

    request('http://data.sfgov.org/resource/bbb8-hzi6.json?' + dateQuery + endTimeQuery + order + limit, function (error, response, body) {
        body = JSON.parse(body);
        if (error || body.error) {
            console.log('Sorry, something went wrong and we couldn\'t get the list of open food trucks for you.');
        } else {
            var trucks = [];
            for(i=0; i<body.length; i++) {
                trucks.push({
                    applicant: body[i].applicant,
                    location: body[i].location
                });
            }
            console.log(columnify(trucks));
        }
    });
}();
