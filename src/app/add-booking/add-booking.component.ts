import { Component, OnInit } from '@angular/core';
import { Show } from '../model/show';
import { Movie } from '../model/movie';
import { Theater } from '../model/theater';
import { Screen } from '../model/screen';
import { Booking } from '../model/booking';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  booking:Booking=null;
  seatShown=false;
  showbooking=false;
  cityList=["Delhi","Mumbai","Banglore","Chennai"];
  showList:Array<Show>=[];
  screenList:Array<Screen>=[];
  movieList:Array<Movie>=[];
  theaterList:Array<Theater>=[];
  seatIds:Array<number>=[];

  selectedTheaterList:Array<Theater>=[];
  selectedMovieList:Array<Movie>=[];
  selectedScreenList:Array<Screen>=[];
  selectedShowList:Array<Show>=[];

  constructor() { 
    let show1=new Show(87,new Date(),new Date(),[42,58,67],"Morning","F&F");
    let show2=new Show(88,new Date(),new Date(),[4,5,6],"Day","Dhamaal");
    let show3=new Show(89,new Date(),new Date(),[22,28,47],"Night","Golmaal");
    let show4=new Show(90,new Date(),new Date(),[52,58,57],"Evening","Dhoom");
    this.showList.push(show1);
    this.showList.push(show2);
    this.showList.push(show3);
    this.showList.push(show4);

    let movie1 = new Movie(456,"F&F","abc",127,new Date("2020-05-01"),["Hindi","English"],"Action");
    let movie2 = new Movie(766,"Dhamaal","dbc",126,new Date("2020-05-26"),["Hindi","English"],"Comedy");
    let movie3 = new Movie(656,"Golmaal","abc",128,new Date("2020-05-30"),["Hindi","English"],"Comedy");
    let movie4 = new Movie(246,"Dhoom","abc",125,new Date("2020-06-15"),["Hindi","English"],"Action");
    this.movieList.push(movie1);
    this.movieList.push(movie2);
    this.movieList.push(movie3);
    this.movieList.push(movie4);

    let screen1 = new Screen(25,200,"HD",[87],1,6);
    let screen2 = new Screen(26,201,"3D",[87],1,6);
    let screen3 = new Screen(27,202,"IMax",[87],1,6);
    let screen4 = new Screen(28,203,"SD",[87],1,6);
    this.screenList.push(screen1);
    this.screenList.push(screen2);
    this.screenList.push(screen3);
    this.screenList.push(screen4);

    let theater1= new Theater(200,"pvr","Delhi",[456],["HD"],"dasd","sdsrew");
    let theater2= new Theater(201,"INox","Mumbai",[456],["3D"],"dasd","sdsrew");
    let theater3= new Theater(202,"Delight","Banglore",[456],["IMax"],"dasd","sdsrew");
    let theater4= new Theater(203,"pvr gold","Chennai",[456],["SD"],"dasd","sdsrew");
    this.theaterList.push(theater1);
    this.theaterList.push(theater2);
    this.theaterList.push(theater3);
    this.theaterList.push(theater4);
     }

  ngOnInit(): void {
  }

  getTheater(event:any){
    this.selectedTheaterList=[];
    let city=event.target.value;
    this.theaterList.forEach(theater=>{
        if(theater.theaterCity===city){
          this.selectedTheaterList.push(theater);
        }
    });
  }
  
  getMovieAndScreen(event:any){
    this.selectedMovieList=[];
    this.selectedScreenList=[];
    let theaterId=event.target.value;
    this.screenList.forEach(screen =>{
      if(screen.theaterId==theaterId){
        this.selectedScreenList.push(screen);
      }
    });
  }

  getShow(event:any){
    this.selectedShowList=[];
    let movieId=event.target.value;
    let movieName="";
    this.movieList.forEach(movie =>{
      if(movie.movieId==movieId){
        movieName=movie.movieName;
      }
    });
    this.showList.forEach(show =>{
      if(show.movieName==movieName){
        this.selectedShowList.push(show);
      }
    });
  }

  getSeats(event:any){
    this.seatIds=[];
    let showId=event.target.value;
    this.selectedShowList.forEach(show =>{
      if(showId==show.showId){
        this.seatIds=show.seatIds;
      }
    });
    this.seatShown=true;
  }

  submit(bookingForm:any){
    let bookingDetails= bookingForm.value;
    console.log(bookingDetails.seats);
    this.booking=new Booking(bookingDetails.movie,bookingDetails.show,bookingDetails.screen,
      bookingDetails.paymentMethod,bookingDetails.seats);
      this.showbooking=true;
  }
}
