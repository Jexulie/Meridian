function Meridian(){}

Meridian.prototype.dayConstant = 8.64e7;

Meridian.prototype.getTomorrow = function(date){
    if(typeof date !== date){
        date = new Date(date);
    }
    var numeric = date.getTime();
    return new Date(numeric + this.dayConstant);
}

Meridian.prototype.getYesterday = function(date){
    if(typeof date !== date){
        date = new Date(date);
    }
    var numeric = date.getTime();
    return new Date(numeric - this.dayConstant);
}

Meridian.prototype.getXDayLater = function(date, x){
    if(typeof date !== date){
        date = new Date(date);
    }
    var numeric = date.getTime();
    return new Date(numeric + this.dayConstant * x);
}

Meridian.prototype.getXDayEarlier = function(date, x){
    if(typeof date !== date){
        date = new Date(date);
    }
    var numeric = date.getTime();
    return new Date(numeric - this.dayConstant * x);
}

Meridian.prototype.getNextWeek = function(date){
    if(typeof date !== date){
        date = new Date(date);
    }
    var numeric = date.getTime();
    return new Date(numeric + this.dayConstant * 7);
}

Meridian.prototype.getLastWeek = function(date){
    if(typeof date !== date){
        date = new Date(date);
    }
    var numeric = date.getTime();
    return new Date(numeric - this.dayConstant * 7);
}

var t = new Meridian();
d = new Date()

d

a = t.getXDayLater('01.01.2000', 5);

a



module.exports = new Meridian();