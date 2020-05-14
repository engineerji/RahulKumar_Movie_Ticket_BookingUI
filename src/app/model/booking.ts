export class Booking{
    movieId:number;
    showId:number;
    screenName:string;
    paymentMethod:string;
    choosenSeats:number[];

    constructor(movieId:number,showId:number,screenName:string,paymentMethod:string,choosenSeats:number[]){
        this.movieId=movieId;
        this.showId=showId;
        this.screenName=screenName;
        this.paymentMethod=paymentMethod;
        this.choosenSeats=choosenSeats;
    }

}