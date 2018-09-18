//1. Data types
//light switch: boolean
const lightSwitch = true; //true means on, false means off
//email: string
let email = "joe@joe.com"
//spaceship: object
const spaceship = {
	hull: "metal",
	laserBlasters: 4,
	tractorBeam: "5TW",
	warpDrive: "ludicrous"
}
//name list: array
const nameArray = ["Ashley","Chris","John"]
//name list w/locations: array of objects
const nameLocationArray = 
	[
		{name: "Ashley",
		location: "Madison"
		},
		{name: "Chris",
		location: "Boston"}
	]
//name w/location and list of shows: array of objects, each w/array
const nameLocationShowsArray = 
	[
		{name: "Ashley",
		location: "Madison",
		shows: ["The Colbert Report","Bojack Horseman"]
		},
		{name: "Chris",
		location: "Boston",
		shows: ["South Park","Planet Earth"]}
	]

//2. Take it Easy
const rainbow = ["red","orange","yellow","green","blue","indigo","violet"];
console.log(rainbow[4]);
const chris = {
	favFood: "duck",
	hobby: "weightlifting",
	town: "Chicago",
	favDatatype: "boolean"
}
console.log(chris.hobby);