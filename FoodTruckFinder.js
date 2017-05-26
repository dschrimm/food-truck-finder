var request = require('request');
var columnify = require('columnify');

getOpenFoodTrucks = (function() {
    // Assumes you are in the same region as SF
    var currentDate = new Date();
    var currentDay = currentDate.getDay();

    // Configure time in 24-hour format
    var currentTime = ('0' + currentDate.getHours()).slice(-2) + ':' + ('0' + currentDate.getMinutes()).slice(-2);

    var dateQuery = 'dayorder=' + currentDay;
    var endTimeQuery = '&$where=end24>=\'' + currentTime + '\'' + ' AND start24<=\''+ currentTime + '\'';

    var order = '&$order=applicant ASC';
    var limit = '&$limit=10';

    if (!process.argv[2]) {
        process.argv[2] = 0;
    }
    var offset = '&$offset=' + process.argv[2] * 10;

    request('http://data.sfgov.org/resource/bbb8-hzi6.json?' + dateQuery + endTimeQuery + order + limit + offset, function (error, response, body) {
        body = JSON.parse(body);
        if (error || body.error) {
            console.log('Sorry, something went wrong and we couldn\'t get the list of open food trucks for you.');
        } else {
            var trucks = [];
            for(i=0; i<body.length; i++) {
                trucks.push({
                    name: body[i].applicant,
                    location: body[i].location
                });
            }
            console.log(columnify(trucks));
        }
    });
})();
