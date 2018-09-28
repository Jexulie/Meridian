const Meridian = require('./meridian');

/* 1 month = 30 days */
/* TODO: Fix xmonth */

class Months extends Meridian{
    constructor(dayConstant){
        super(dayConstant);
    }
    getNextMonth(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var givenMonth = date.getMonth();
        var givenDay = date.getDate();
        var numeric = date.getTime();
        while(true){
            var destMonth = new Date(numeric).getMonth();
            var destDay = new Date(numeric).getDate();
            numeric += this.dayConstant / 10;
            if(destMonth !== givenMonth && destDay === givenDay){
                break;
            }
        }
        return new Date(numeric);
    }

    getLastMonth(date){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var givenMonth = date.getMonth();
        var numeric = date.getTime();
        while(true){
            var destMonth = new Date(numeric).getMonth();
            numeric -= this.dayConstant / 10;
            if(destMonth !== givenMonth && destDay === givenDay){
                break;
            }
        }
        return new Date(numeric);
    }

    getXMonthLater(date, x){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        numeric += this.dayConstant * (30 * x)
        return new Date(numeric)
    }

    getXMonthEarlier(date, x){
        if(!this.isValidDate(date)){
            date = new Date(date);
        }
        var numeric = date.getTime();
        numeric -= this.dayConstant * (30 * x)
        return new Date(numeric)
    }
}

module.exports = new Months();