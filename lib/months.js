const Meridian = require('./meridian');

class Months extends Meridian{
    constructor(dayConstant){
        super(dayConstant);
    }
    // TODO: Problem at december
    getNextMonth(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var givenMonth = this.isValidDate(date);
        var numeric = date.getTime();
        while(true){
            var destMonth = new Date(numeric).getMonth();
            numeric += this.dayConstant / 10;
            if(destMonth > givenMonth){
                break;
            }
        }
        return new Date(numeric);
    }

    getLastMonth(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var givenMonth = this.isValidDate(date);
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

    getXMonthLater(date, x){

    }

    getXMonthEarlier(date, x){

    }
}

module.exports = new Months();