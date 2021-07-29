// //1.Create XHR object;
// //2.opening the connection open() method parameters = HTTP method , URL ,
// //3.sending a connection
// //4. server responded successfully

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.eu/rest/v2/all", true);
// request.send();
// request.onload = function () {
//   var data = JSON.parse(this.response);
//   // console.log(data)

//   for (i = 0; i < 250; i++) {
//     var cname = data[i].name;
//     var lang = data[i].latlng;
//     weatherdata(cname, ...lang);
//   }
// };
// function weatherdata(name, lat, lang) {
//   // console.log(name+" "+lat+" "+lang);

//   var req = new XMLHttpRequest();
//   var url =
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=c84f0135f315c083f98a8825ce7363e6`;
//   req.open("GET", url, true);
//   req.send();
//   req.onload = function () {
//     var data = JSON.parse(this.response);
//     console.log(`${data.name} - ${data.main.temp}`);
//   };
// }
var request = new XMLHttpRequest();
request.open("GET", "https://api.covid19api.com/summary", true);
request.send();
request.onload =function(){
  var data = JSON.parse(this.response);
  console.log(data.Global);
  console.log("New confirmed cases ->",data.Global.NewConfirmed);
  console.log("New Deaths ->",data.Global.NewDeaths);
  console.log("New NewRecovered cases ->",data.Global.NewRecovered);
  console.log("TotalConfirmed cases till date ->",data.Global.TotalConfirmed);
  console.log("TotalDeaths ->",data.Global.TotalDeaths);
  console.log("TotalRecovered ->",data.Global.TotalRecovered);

  // for (i = 0; i < 250; i++) {
  //   var cname = data[i].name;
  //   var lang = data[i].latlng;
  //   weatherdata(cname, ...lang);
  // }
};
