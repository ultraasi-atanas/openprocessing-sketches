/* 
A p5.js sketch created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/933750
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	noLoop();
}

let earthquakes;

function preload() {
  // Get the most recent earthquake in the database
  // let url =
  //  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
  //   'summary/all_day.geojson';
  // earthquakes = loadJSON(url);
	earthquakes = data;
}

function draw() {
	background(200);
  // Get the magnitude and name of the earthquake out of the preselected JSON entries
	for (let i = 0; i<earthquakes.length; i += 1){
		let earthquakeMag = earthquakes[i].properties.mag;
		let earthquakeName = earthquakes[i].properties.place;
		let earthquakeTsumani = earthquakes[i].properties.tsunami;
		
		//Dots
		if (earthquakeTsumani === 1) {
			fill(35,149,254); //Blue for Tsunami
		}
		ellipse(random(width/4,width/1.5), random(height/4,height/1.5), earthquakeMag * 10, earthquakeMag * 10);
		
		//Text
		textAlign(CENTER);		
		if (earthquakeTsumani === 1) {
			text(earthquakeName + " (Tsunami)", 0, height - 30*i, width, 30); // Warn for Tsunami
		} else {
			text(earthquakeName, 0, height - 30*i, width, 30);
		}
	}
}

const data = [
{"type":"Feature","properties":{"mag":2.18,"place":"17km SSE of Lone Pine, CA","time":1595006952140,"updated":1595007177549,"tz":null,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/ci38595362","detail":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci38595362.geojson","felt":null,"cdi":null,"mmi":null,"alert":null,"status":"automatic","tsunami":0,"sig":73,"net":"ci","code":"38595362","ids":",ci38595362,","sources":",ci,","types":",nearby-cities,origin,phase-data,scitech-link,","nst":16,"dmin":0.09443,"rms":0.17,"gap":154,"magType":"ml","type":"earthquake","title":"M 2.2 - 17km SSE of Lone Pine, CA"},"geometry":{"type":"Point","coordinates":[-117.9651667,36.4578333,7.85]},"id":"ci38595362"},

{"type":"Feature","properties":{"mag":0.9,"place":"124 km S of Chuathbaluk, Alaska","time":1595006908136,"updated":1595007092378,"tz":null,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/ak02095e8hrx","detail":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak02095e8hrx.geojson","felt":null,"cdi":null,"mmi":null,"alert":null,"status":"automatic","tsunami":0,"sig":12,"net":"ak","code":"02095e8hrx","ids":",ak02095e8hrx,","sources":",ak,","types":",origin,","nst":null,"dmin":null,"rms":0.54,"gap":null,"magType":"ml","type":"earthquake","title":"M 0.9 - 124 km S of Chuathbaluk, Alaska"},"geometry":{"type":"Point","coordinates":[-159.0308,60.4612,12.7]},"id":"ak02095e8hrx"},

{"type":"Feature","properties":{"mag":0.9,"place":"25 km S of Mina, Nevada","time":1595005317630,"updated":1595006329238,"tz":null,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/nn00760893","detail":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nn00760893.geojson","felt":null,"cdi":null,"mmi":null,"alert":null,"status":"automatic","tsunami":0,"sig":12,"net":"nn","code":"00760893","ids":",nn00760893,","sources":",nn,","types":",origin,phase-data,","nst":10,"dmin":0.057,"rms":0.06,"gap":191.58,"magType":"ml","type":"earthquake","title":"M 0.9 - 25 km S of Mina, Nevada"},"geometry":{"type":"Point","coordinates":[-118.1063,38.1573,1.9]},"id":"nn00760893"},

{"type":"Feature","properties":{"mag":1.5,"place":"24 km W of Happy Valley, Alaska","time":1595004375192,"updated":1595004613743,"tz":null,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/ak02095dqw2q","detail":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak02095dqw2q.geojson","felt":null,"cdi":null,"mmi":null,"alert":null,"status":"automatic","tsunami":0,"sig":35,"net":"ak","code":"02095dqw2q","ids":",ak02095dqw2q,","sources":",ak,","types":",origin,","nst":null,"dmin":null,"rms":0.47,"gap":null,"magType":"ml","type":"earthquake","title":"M 1.5 - 24 km W of Happy Valley, Alaska"},"geometry":{"type":"Point","coordinates":[-152.173,59.9795,67.5]},"id":"ak02095dqw2q"},

{"type":"Feature","properties":{"mag":5.3,"place":"25 km E of North Vanlaiphai, India","time":1595003633557,"updated":1595005019868,"tz":null,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/us7000aqg3","detail":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000aqg3.geojson","felt":2,"cdi":3.4,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":433,"net":"us","code":"7000aqg3","ids":",us7000aqg3,","sources":",us,","types":",dyfi,origin,phase-data,","nst":null,"dmin":0.546,"rms":0.74,"gap":77,"magType":"mww","type":"earthquake","title":"M 5.3 - 25 km E of North Vanlaiphai, India"},"geometry":{"type":"Point","coordinates":[93.3092,23.1204,10]},"id":"us7000aqg3"},

{"type":"Feature","properties":{"mag":7,"place":"114 km NNW of Popondetta, Papua New Guinea","time":1594954223017,"updated":1595003971239,"tz":null,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/us7000aq3e","detail":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000aq3e.geojson","felt":86,"cdi":5.4,"mmi":6.861,"alert":"green","status":"reviewed","tsunami":1,"sig":800,"net":"us","code":"7000aq3e","ids":",at00qdlek0,pt20199000,us7000aq3e,","sources":",at,pt,us,","types":",dyfi,general-text,ground-failure,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,","nst":null,"dmin":1.663,"rms":1.14,"gap":18,"magType":"mww","type":"earthquake","title":"M 7.0 - 114 km NNW of Popondetta, Papua New Guinea"},"geometry":{"type":"Point","coordinates":[147.7656,-7.8428,79.79]},"id":"us7000aq3e"},
]
