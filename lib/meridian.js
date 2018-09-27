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

Meridian.prototype.getNextMonth = function(date){
    if(typeof date !== date){
        date = new Date(date);
    }
    var givenMonth = date.getMonth();
    var numeric = date.getTime();
    while(true){
        var destMonth = new Date(numeric).getMonth();
        console.log(destMonth);
        numeric += this.dayConstant / 10;
        if(destMonth > givenMonth){
            break;
        }
    }
    return new Date(numeric);
}

Meridian.prototype.getLastMonth = function(date){
    if(typeof date !== date){
        date = new Date(date);
    }
    var givenMonth = date.getMonth();
    var numeric = date.getTime();
    while(true){
        var destMonth = new Date(numeric).getMonth();
        numeric -= this.dayConstant / 10;
        if(destMonth < givenMonth){
            break;
        }
    }
    return new Date(numeric);
}

Meridian.prototype.getNextYear = function(date){
    if(typeof date !== date){
        date = new Date(date);
    }
    var numeric = date.getTime();
    return new Date(numeric + this.dayConstant * 365);
}

Meridian.prototype.getLastYear = function(date){
    if(typeof date !== date){
        date = new Date(date);
    }
    var numeric = date.getTime();
    return new Date(numeric - this.dayConstant * 365);
}

var t = new Meridian();
d = new Date()

d

a = t.getLastYear(d);

a



module.exports = new Meridian();