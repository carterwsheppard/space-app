// THIS ENDPOINT IS PULLING 10 MOST RECENT ISS DAILY REPORTS 
var getSpaceReports = function() {
    // format the github api url
    var apiUrl = "https://api.spaceflightnewsapi.net/v3/reports";
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            //function with data input that updates HTML element and appends to page
          });
        } else {
          alert('Error: API Endpoint Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to API");
      });
  };

// THIS ENDPOINT IS PULLING 10 MOST RECENT SPACEX LAUNCHES
var getSpaceXLaunches = function() {
    // format the github api url
    var apiUrl = "https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search="+eventID+";
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            //function with data input that updates HTML element and appends to page
          });
        } else {
          alert('Error: API Endpoint Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to API");
      });
  };

  // THIS ENDPOINT IS PULLING 10 MOST RECENT NASA LAUNCHES
var getNASALaunches = function() {
    // format the github api url
    var apiUrl = "https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search=NASA";
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            //function with data input that updates HTML element and appends to page
          });
        } else {
          alert('Error: API Endpoint Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to API");
      });
  };

//getSpaceReports();
//getSpaceXLaunches();
getNASALaunches();