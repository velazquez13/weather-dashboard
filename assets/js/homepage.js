var getUserRepos = function(user) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={38.5816}&lon={121.4944}&exclude={hourly,alerts}&appid={API key}" + user + "/repos";
    fetch(apiUrl).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
  
  getUserRepos("lernantino");