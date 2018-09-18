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

//3. Crazy Object!
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);

//4. Object-ception
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

































