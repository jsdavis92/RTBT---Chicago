mapboxgl.accessToken = 'pk.eyJ1IjoianNkYXZpczMzIiwiYSI6ImNsYTdhN2ZsZjAweDAzbmxpaDM3Ym4wc3gifQ.wuL-Hubju4DX2CqkpdjqVQ';

		// TODO: create the map object using mapboxgl.map() function
		let map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-87.6298, 41.8781],
			zoom: 12,
		});

		let marker = new mapboxgl.Marker().setLngLat([-87.6298, 41.8781]).addTo(map);

		async function getBusLocations() {
			    // api_key: "4aea5aaabe83486fa26fd28eaed1edb9";
				const url = 'https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12',
				response = await fetch(url),
				file = await response.text()
			}
		console.log(getBusLocations)

		async function run() {
			// get bus data    
           
			const locations = await getBusLocations();
			//console.log(new Date());
			//console.log(locations.data);
			let markerArray = [];

				// pushes long and lat to a markerArray
				markerArray.push(locations.data[0].attributes.longitude);

				markerArray.push(locations.data[0].attributes.latitude);

				marker.setLngLat(markerArray);
		
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
		}

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