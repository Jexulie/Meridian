var Meridian = require('./index')

d = Meridian.Days.getXDayEarlier('01.01.2018', 360);
w = Meridian.Weeks.getNextWeek('01.01.2018');
m = Meridian.Months.getNextMonth('12.12.2018');
y = Meridian.Years.getNextYear('12.12.2011')

console.log(d.toLocaleString())