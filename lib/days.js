const Meridian = require('./meridian');

class Days extends Meridian{
    constructor(dayConstant){
        super(dayConstant);
    }

    getTomorrow(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric + this.dayConstant);
    }

    getYesterday(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric - this.dayConstant);
    }
    
    getXDayLater(date, x){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric + this.dayConstant * x);
    }

    getXDayEarlier(date, x){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric - this.dayConstant * x);
    }
}

module.exports = new Days();