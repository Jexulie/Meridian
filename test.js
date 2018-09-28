var Meridian = require('./index')

// d = Meridian.Months.getXMonthLater('02.11.2018', 1);
d = Meridian.Months.getXMonthEarlier('01.01.2018', 5)

// e = new Date('02.31.2018')

console.log(`result ${d.toDateString()}`)