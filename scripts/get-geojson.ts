// const axios = require("axios");
// const fs = require("fs");
// const path = require("path");

// const API_URL = 'https://nominatim.openstreetmap.org';
// const USER_AGENT =
// 	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
// const opts = {
// 	headers: {
// 		'User-Agent': USER_AGENT,
// 	},
// };

// // Function to fetch and store geojson data
// async function fetchAndStoreGeoJSON(countyName: string) {
// 	try {
// 		const searchResponse = await axios.get(
// 			`${API_URL}/search?q=${countyName} county, CO&format=json`,
// 			opts
// 		);
// 		const osmId = searchResponse.data[0].osm_id;

// 		const detailsResponse = await axios.get(
// 			`${API_URL}/details?osmtype=R&osmid=${osmId}&class=boundary&addressdetails=0&hierarchy=0&group_hierarchy=0&polygon_geojson=1&format=json
//             `,
// 			opts
// 		);
// 		const geometry = detailsResponse.data.geometry;

// 		if (!geometry) {
// 			console.error('County not found in the response data');
// 			return;
// 		}

// 		// GeoJSON data needs to be wrapped
// 		const geoConf = {
// 			type: 'FeatureCollection',
// 			features: [
// 				{
// 					type: 'Feature',
// 					geometry,
// 				},
// 			],
// 		};

// 		// Create geojson folder if it doesn't exist
// 		const folderPath = path.join(__dirname, '../public/geojson');
// 		if (!fs.existsSync(folderPath)) {
// 			fs.mkdirSync(folderPath);
// 		}

// 		// Write the formatted data to a geojson file
// 		const fileName = `${countyName.replace(' ', '-')}-county.geojson`;
// 		const filePath = path.join(folderPath, fileName);
// 		fs.writeFileSync(filePath, JSON.stringify(geoConf, null, 2));

// 		console.log(`GeoJSON data for ${countyName} saved to ${filePath}`);
// 	} catch (error) {
// 		console.error('Error fetching or storing GeoJSON data:', error);
// 	}
// }

// const counties = [
// 	'adams',
// 	'alamosa',
// 	'arapahoe',
// 	'archuleta',
// 	'baca',
// 	'bent',
// 	'boulder',
// 	'broomfield',
// 	'chaffee',
// 	'cheyenne',
// 	'clear creek',
// 	'conejo',
// 	'costilla',
// 	'crowley',
// 	'custer',
// 	'denver',
// 	'dolores',
// 	'douglas',
// 	'eagle',
// 	'el paso',
// 	'elbert',
// 	'fremont',
// 	'garfield',
// 	'gilpin',
// 	'grand',
// 	'gunnison',
// 	'hinsdale',
// 	'huerfano',
// 	'jackson',
// 	'jefferson',
// 	'kiowa',
// 	'kit carson',
// 	'la plata',
// 	'lake',
// 	'larimer',
// 	'las animas',
// 	'lincoln',
// 	'logan',
// 	'mineral',
// 	'moffat',
// 	'montezuma',
// 	'morgan',
// 	'otero',
// 	'ouray',
// 	'park',
// 	'phillips',
// 	'pitkin',
// 	'prowers',
// 	'pueblo',
// 	'rio blanco',
// 	'rio grande',
// 	'routt',
// 	'saguache',
// 	'san miguel',
// 	'sedgwick',
// 	'summit',
// 	'teller',
// 	'washington',
// 	'weld',
// 	'yuma',
// ];

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// const run = async () => {
// 	for (const countyName of counties) {
// 		await fetchAndStoreGeoJSON(countyName);
//         console.log('finished fetching', countyName);
// 		await wait(3000);
// 	}
// };

// run();
