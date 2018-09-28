const Meridian = require('./meridian');

class Years extends Meridian{
    constructor(dayConstant){
        super(dayConstant);
    }

    getNextYear(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric + this.dayConstant * 365);
    }

    getLastYear(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric - this.dayConstant * 365);
    }
    
    getXYearLater(date, x){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric + this.dayConstant * (365 * x));
    }

    getXYearEarlier(date, x){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric - this.dayConstant * (365 * x));
    }
}

module.exports = new Years();