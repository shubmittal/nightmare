const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

class test{
     test(){
        nightmare
    .goto('https://www.google.com')
    .end(() => 'some value')
    //prints "some value"
    .then(console.log)
    }

}

module.exports = test;