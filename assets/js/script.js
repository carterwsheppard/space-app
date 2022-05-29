var btnSpaceX = document.querySelector("#spaceX");
var btnNASA = document.querySelector("#nasa");
var btnBlueOrigin = document.querySelector("#blueOrigin");
var btnContainer = document.querySelector("#interactive")

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
var getSpaceLaunches = function(spaceClub) {
    //event.preventDefault();
    // format the github api url
    var apiUrl = "https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search="+spaceClub;
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
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

  //blue origin button handler
  var BlueOriginHandler = function() {
      getSpaceLaunches("Blue Origin");
  };
//spaceX button handler
  var spaceXHandler = function() {
      getSpaceLaunches("SpaceX");
  };
//nasa button handler
  var nasaHandler = function() {
      getSpaceLaunches("NASA");
  };

//EVENT LISTENER
btnBlueOrigin.addEventListener("click", BlueOriginHandler);
btnNASA.addEventListener("click", spaceXHandler);
btnSpaceX.addEventListener("click", nasaHandler); 
