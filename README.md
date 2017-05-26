# Food Truck Finder

Welcome to the Food Truck Finder, your handy command-line tool that prints out a list of open food trucks in San Francisco, 10 at a time!

Use this program in the command line by running `npm install request columnify` then `node FoodTruckFinder.js`
To get the next 10 open food trucks specify an integer value, ex. `node FoodTruckFinder.js 1`, `node FoodTruckFinder.js 5`

If this were to be built as a full-scale web application, there are some initial considerations I would address: 
* __Latency__: Currently, we make a call to the data source each time a new page is selected. It might be preferable to cache all open trucks to be able to more quickly retrieve the next set of ten. However, since the availability of trucks changes can change any minute with the passing of time, we would need to re-cache every minute or check the end time of each truck before returning them as the next set of ten. 
* __Duplicate names__: Many trucks have multiple locations listed. Instead of listing them individually, it might be more intuitive to the user to have the names listed once with multiple locations if applicable.
* __Remaining time open__: It would be important for users to know how much time was remaining until a particular truck is closing. If a truck is closing shortly, a user would want to know that availability would depend on their current location and the truck end time accuracy. 
* __Sort by location__: A user could choose to sort by name or by location in order to view open trucks in order of distance from their location.
* __Link or contact information__: Should a user be able to contact a food truck?
* __Next button__: A user should not need to keep track of how much to increment the list by, but should be able to press 'Next' or 'Previous'. A user might also want to choose how many items to display at once, we could give them options (10, 20, 50, all).

Enjoy!
