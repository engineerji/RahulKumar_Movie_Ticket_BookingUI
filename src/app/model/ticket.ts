
export class Ticket{
    ticketId:number;
    noOfSeats:number;
    seatIds:number[];
    screenName:string;
    constructor(ticketId:number,noOfSeats:number,seatIds:number[],screenName:string){
        this.ticketId=ticketId;
        this.noOfSeats=noOfSeats;
        this.seatIds=seatIds;
        this.screenName=screenName;
    }
}