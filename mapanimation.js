mapboxgl.accessToken = 'pk.eyJ1IjoianNkYXZpczMzIiwiYSI6ImNsYTdhN2ZsZjAweDAzbmxpaDM3Ym4wc3gifQ.wuL-Hubju4DX2CqkpdjqVQ';





// This array contains the coordinates for all bus stops between Nashville's Nissan Stadium and the Parthenon
const busStops = [
    [-86.7699, 36.1672],
	[-86.7708, 36.1694],
	[-86.7768, 36.1671],
	[-86.7757, 36.1613],
	[-86.7860, 36.1575],
	[-86.7928, 36.1543],
	[-86.8027, 36.1497],
	[-86.8082, 36.1470],
	[-86.8103, 36.1499],
	[-86.8082, 36.1470],
	[-86.8027, 36.1497],
	[-86.7928, 36.1543],
	[-86.7860, 36.1575],
	[-86.7757, 36.1613],
	[-86.7768, 36.1671],
	[-86.7708, 36.1694],
	[-86.7699, 36.1672],
  ];
  

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-86.7699, 36.1672],
    zoom: 12,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  let marker = new mapboxgl.Marker().setLngLat([-86.7699, 36.1672]).addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }



















/* This was my attempt at real-time bus tracking*/

		// TODO: create the map object using mapboxgl.map() function
		// let map = new mapboxgl.Map({
		// 	container: 'map',
		// 	style: 'mapbox://styles/mapbox/streets-v11',
		// 	center: [-86.7827, 36.1639],
		// 	zoom: 12,
		// });

		// let marker = new mapboxgl.Marker()
		// .setLngLat([-86.7827, 36.1639])
		// .addTo(map);

		// async function getBusLocations() {
			    // api_key: "4aea5aaabe83486fa26fd28eaed1edb9";
		// 		const url = 'https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12',
		// 		response = await fetch(url),
		// 		file = await response.text()
		// 	}
		// console.log(getBusLocations)

		// async function run() {
			// get bus data    
           
			// const locations = await getBusLocations();
			//console.log(new Date());
			//console.log(locations.data);
			// let markerArray = [];

				// pushes long and lat to a markerArray
				// markerArray.push(locations.data[0].attributes.longitude);

				// markerArray.push(locations.data[0].attributes.latitude);

				// marker.setLngLat(markerArray);
		
				//  console.log(markerArray);
				//  console.log(marker);

		// 	// timer
		// 	// setTimeout(run, 10000);
		// }
	
		// async function getBusLocations() {
        //     // api_key: "4aea5aaabe83486fa26fd28eaed1edb9";
		// 	const options = {
		// 		method: 'GET',
		// 		headers: {
		// 			'X-RapidAPI-Key': '1e78ed23edmshc56c01d54954310p1c1430jsn255062cbbdbf',
		// 			'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
		// 		}

		// 	const url = 'https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12', options;
		// 	const response = await fetch(url);
		// 	const file = await response.text();
		

		// const options = {
		// 	method: 'GET',
		// 	headers: {
		// 		'X-RapidAPI-Key': '1e78ed23edmshc56c01d54954310p1c1430jsn255062cbbdbf',
		// 		'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
		// 	}
		// };
		
		// fetch('https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12', options)
		// 	.then(response => response.json())
		// 	.then(response => console.log(response))
		// 	.catch(err => console.error(err));

		run();
		
		if (typeof module !== 'undefined') {
			module.exports = { move, counter, marker, busStops };
		}