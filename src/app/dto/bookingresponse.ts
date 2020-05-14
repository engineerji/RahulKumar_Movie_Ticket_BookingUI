import { Ticket } from '../model/ticket';

export class BookingResponse{
    bookingId:number;
    movieId:number;
    showId:number;
    bookingDate:Date;
    transactionId:number;
    totalCost:number;
    seatIds:number[];
    ticket:Ticket;

    constructor(bookingId:number, movieId:number, showId:number, bookingDate:Date, transactionId:number, totalCost:number, seatIds:number[], ticket:Ticket){
        this.bookingId=bookingId;
        this.movieId=movieId;
        this.showId=showId;
        this.bookingDate=bookingDate;
        this.transactionId=transactionId;
        this.totalCost=totalCost;
        this.seatIds=seatIds;
        this.ticket=ticket;
    }
}