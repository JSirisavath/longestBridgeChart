let canvas = document.querySelector('#bridge-chart');

// chart
let context = canvas.getContext('2d');

// 5 largest Bridges Array Objects
let bridges = [
  {
    name: 'Verrazano-Narrows Bridge',
    location: [40.6066, -74.0447],
    span: '1298.4 meters',
    city: 'New York, NY',
  },
  {
    name: 'Golden Gate Bridge',
    location: [37.8199, -122.4783],
    span: '1280.2 meters',
    city: 'San Francisco and Marin, CA',
  },
  {
    name: 'Mackinac Bridge',
    location: [45.8174, -84.7278],
    span: '1158.0 meters',
    city: 'Mackinaw and St Ignace, MI',
  },
  {
    name: 'George Washington Bridge',
    location: [40.8517, -73.9527],
    span: '1067.0 meters',
    city: 'New York, NY and New Jersey, NJ',
  },
  {
    name: 'Tacoma Narrows Bridge',
    location: [47.269, -122.5517],
    span: '853.44 meters',
    city: 'Tacoma and Kitsap, WA',
  },
];

// We can place the bridge names and bridge spans into variables using map method from our bridges array
let bridgeNames = bridges.map((bridge) => bridge.name);

let bridgeLength = bridges.map((bridge) => parseFloat(bridge.span));

// new chart object
let chart = new Chart(context, {
  type: 'bar',
  data: {
    labels: bridgeNames, // Bridge names as labels
    datasets: [
      {
        label: `Length of bridge in meters`,
        data: bridgeLength, // bridge data lengths
        backgroundColor: 'green ',
        borderWidth: 1,
      },
    ],
  },
});
