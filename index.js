// Write your code in this file!

const currentUser = 'Sqkrcat'

let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`

let excitedWelcomeMessage = welcomeMessage.toUpperCase()

console.log( "We" + ' ' + `can` + " " + 'concat' + `enate` + " as many strings " + 'as our heart ' + `desires.`)

const myString = 'template literal';

const myNumber = 10;

const myBoolean = false;

console.log(`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!`)

let shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`

