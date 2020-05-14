import { Time } from '@angular/common';

export class Show{
    showId:number;
    showStartTime:Date;
    showEndTime:Date;
    seatIds:number[];
    showName:string;
    movieName:string;

    constructor(showId:number, showStartTime:Date, showEndTime:Date, seatIds:number[], showName:string, movieName:string){
        this.showId=showId;
        this.showStartTime=showStartTime;
        this.showEndTime=showEndTime;
        this.seatIds=seatIds;
        this.showName=showName;
        this.movieName=movieName;
    }

}