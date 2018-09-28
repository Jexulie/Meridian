const Meridian = require('./meridian');

class Weeks extends Meridian{
    constructor(dayConstant){
        super(dayConstant);
    }

    getNextWeek(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric + this.dayConstant * 7);
    }

    getLastWeek(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        return new Date(numeric - this.dayConstant * 7);
    }

    getXWeekLater(date, x){

    }

    getXWeekEarlier(date, x){

    }
}

module.exports = new Weeks();