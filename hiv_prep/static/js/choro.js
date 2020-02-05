// //Automatically load feature when page loads
// window.onload = function ( {
//     document.getElementById
// })

//Load geojson data
var statesData = "new_HIV_case_rate.geo.json";

var geojson;

console.log(statesData);


// Creating map object
var myMap = L.map('choromap').setView([37.8, -96], 4);


//Adding title layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 5,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);


//grab data with d3
d3.json(statesData).then(function(data) {
    console.log(data);
    //Create a new choropleth layer
    geojson = L.choropleth(data, {
        //Define what property in the features to use (edit this code)
        valueProperty: "2008-2012",
        //Set color scale
        scale:["65FFF6","#1B283A"],
        //Number of breaks in step range (edit this code (not sure how many yet))
        steps: 5,
        // q for quartile, e for equidistant, k for k-means
        style: {
            //Border color
            color: "#1B283A",
            weight: .5,
            fillOpacity: 0.8
        },

        // Binding a pop-up to each layer
        // onEachFeature: function(feature, layer) {
        //     layer.bindPopup(feature.properties.State_Name + "<br>" + feature.properties.2008-2012);
        // }
    }).addTo(myMap);

    //Set up the legend
    var legend = L.control({position: "bottomleft" });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var limits = geojson.options.limits;
        var colors = geojson.options.colors;
        var labels = ["min", "max"];

        //Add title (what should we title this? is this really a rate?), min & max
        var legendInfo = "<h1>New HIV Cases</h1>" + "<br>" + "<div class=\"labels\">" +
           "<div class=\"min\">" + limits[0].toFixed(3) + "</div>" +
           "<div class=\"max\">" + limits[limits.length - 1].toFixed(3) +"</div>" +
         "</div>";
        div.innerHTML = legendInfo;

        limits.forEach(function(limit, index) {
            labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        });
        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        return div;
        
}


//Add legend to the map
legend.addTo(myMap);
});
