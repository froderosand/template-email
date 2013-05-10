var moment = require('moment');

var m = moment();

console.log(m.format("L"));
console.log(m.format("LL"));
console.log(m.format("LLL"));
console.log(m.format("LLLL"));
console.log(m.calendar());
console.log(m.zone());
console.log(m.toJSON());

moment.lang('fr');
console.log(m.format("LLLL"));
moment.lang('es');
console.log(m.format("LLLL"));
moment.lang('nb');
console.log(m.format("LLLL"));
