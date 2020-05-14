import { Component, OnInit } from '@angular/core';
import { BookingResponse } from '../dto/bookingresponse';
import { Ticket } from '../model/ticket';

@Component({
  selector: 'app-find-booking',
  templateUrl: './find-booking.component.html',
  styleUrls: ['./find-booking.component.css']
})
export class FindBookingComponent implements OnInit {

 
  booking:BookingResponse=null;
  show:boolean=false;
  bookings:Array<BookingResponse>=[];
  constructor(){
    let ticket1 = new Ticket(152,3,[24,25,26],"Gold");
    let ticket2 = new Ticket(154,3,[2,3,4],"Silver");
    let ticket3 = new Ticket(155,3,[28,29,30],"Silver");
    let ticket4 = new Ticket(156,3,[52,53,54],"Silver");
    let booking1 = new BookingResponse(1,245,548,new Date(),1546,3000,[24,25,26],ticket1);
    let booking2 = new BookingResponse(2,48,268,new Date("2020-05-11"),1548,4500,[2,3,4],ticket2);
    let booking3 = new BookingResponse(3,25,623,new Date("2020-04-29"),1576,1500,[28,29,30],ticket3);
    let booking4 = new BookingResponse(4,24,512,new Date("2020-05-10"),1572,900,[52,53,54],ticket4);
    this.bookings.push(booking1);
    this.bookings.push(booking2);
    this.bookings.push(booking3);
    this.bookings.push(booking4);
  }
  ngOnInit(): void {
  }

  getBooking(value){
    let bookingId=parseInt(value);
    console.log(bookingId);
    this.bookings.forEach(booking =>{
      if(booking.bookingId===bookingId){
        this.booking=booking;
        this.show=true;
      }
    });
  }
}
