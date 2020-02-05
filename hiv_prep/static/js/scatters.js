// var url = "/data";

// //Start of coding just piecing it
// function buildPlot() {
    // d3.json("/data").then(function(response) {

    //     console.log(response);

        var before = {
            x: [4,5,6,7],// x: response.map(data => data.year),
            y: [1, 2, 3, 4],// y: response.map(data => data.sightings),
            mode: 'markers',
            type: 'scatter',
            //Add data hover labels (shadow/pop out when hovered over?)
            name: '2008-2012', //State name here?
            // text: data.map(row => row.greekName)
            marker: {
                color:"#002e3f",
                size: 10
            }
        
        };
        var after = {
            x: [7,8,9,10],
            y: [3,6,7,1],
            // x: response.map(data => data.year),
            // y: response.map(data => data.sightings),
            mode: 'markers',
            type: 'scatter',
            name: '2013-2018',
            // text: data.map(row => row.greekName),
            marker: {
                color: "#1ac2ff",
                size: 10
            }
        };

        var data = [before, after];

        var layout = {
            xaxis: {
                autorange: true
            },
            yaxis: {
                autorange: true
            }
        };
        Plotly.newPlot('scatter', data, layout);  
//     });

// }

// buildPlot();




// / Initializes the page with a default plot
// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] }];
  
//     Plotly.newPlot("plot", data);
//   }
  
//   // Call updatePlotly() when a change takes place to the DOM
//   d3.selectAll("#selDataset").on("change", updatePlotly);
  
//   // This function is called when a dropdown menu item is selected
//   function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
  
//     // Initialize x and y arrays
//     var x = [];
//     var y = [];
  
//     if (dataset === 'dataset1') {
//       x = [1, 2, 3, 4, 5];
//       y = [1, 2, 4, 8, 16];
//     }
  
//     if (dataset === 'dataset2') {
//       x = [10, 20, 30, 40, 50];
//       y = [1, 10, 100, 1000, 10000];
//     }
  
//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle("plot", "x", [x]);
//     Plotly.restyle("plot", "y", [y]);
//   }


