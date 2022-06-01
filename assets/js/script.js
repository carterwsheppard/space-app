var btnSpaceX = document.querySelector("#spaceX");
var btnNASA = document.querySelector("#nasa");
var btnBlueOrigin = document.querySelector("#blueOrigin");
var btnContainer = document.querySelector("#interactive");
var ISSContainer = document.querySelector("#issNews");
var spaceNewsContainer = document.querySelector("#spaceLaunches");


// THIS ENDPOINT IS PULLING 10 MOST RECENT ISS DAILY REPORTS 
var getSpaceReports = function() {
    // format the github api url
    var apiUrl = "https://api.spaceflightnewsapi.net/v3/reports";
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          //console.log(response);
          response.json().then(function(data) {
            console.log(data);
            //function with data input that updates HTML element and appends to page
            for (i=0; i<=4; i++) {
              var createEl = document.createElement("div");

              var ISStitle = data[i].title
              var ISSsummary = data[i].summary
              var ISSlink = data[i].url 
              var ISSimage = data[i].imageUrl

              //UPDATE CLASSES BASED ON HOGAN'S STYLE SHEET DECISIONS
              createEl.classList = "";
              createEl.setAttribute("id",ISSlink)
              createEl.innerHTML = "<h2><a href='"+ISSlink+"'>"+ISStitle+"</a></h2> <p class='text-justify text-padding'>"+ISSsummary+"</p>" ;
              ISSContainer.appendChild(createEl);
            };
          });
        } else {
          alert('Error: API Endpoint Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to API");
      });
  };

// GET NASA Images Library for Header background  
var getNasaImages = function() {
  ///event.preventDefault();
  fetch("https://images-api.nasa.gov/album/apollo")
    .then(function(response) {
      // response was successful
      if(response.ok) {
        response.json().then(function(data) {
          console.log(data);
        });
      } else {
        alert("NASA images did not load.");
      }
    });
}




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
            for (i=0; i<=9; i++) {
              var createEl = document.createElement("div");

              var spaceNewsTitle = data.results[i].name;
              var spaceNewsStatus = data.results[i].status.description;
              var spaceNewsLink = data.results[i].url;
             

              //UPDATE CLASSES BASED ON HOGAN'S STYLE SHEET DECISIONS
              createEl.classList = "";
              createEl.setAttribute("id",spaceNewsLink)
              createEl.innerHTML = "<h2><a href='"+spaceNewsLink+"'>"+spaceNewsTitle+" </a></h2> <p>"+spaceNewsStatus+"</p>" ;
              spaceNewsContainer.appendChild(createEl);
            };
          });
        } else {
          alert('Error: API Endpoint Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to API");
      });
  };

//EVENT LISTENER
btnContainer.addEventListener("click", function(event) {
  getSpaceLaunches(event.target.textContent);
})

getSpaceReports();

