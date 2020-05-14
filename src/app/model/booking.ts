export class Booking{
    bookingId:number;
    movieId:number;
    showId:number;
    screenName:string;
    paymentMethod:string;
    choosenSeats:number[];

    constructor(bookingId:number, movieId:number,showId:number,screenName:string,paymentMethod:string,choosenSeats:number[]){
        this.bookingId=bookingId;
        this.movieId=movieId;
        this.showId=showId;
        this.screenName=screenName;
        this.paymentMethod=paymentMethod;
        this.choosenSeats=choosenSeats;
    }

}