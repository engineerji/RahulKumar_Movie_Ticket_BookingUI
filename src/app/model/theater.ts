export class Theater{
    theaterId:number;
    theaterName:string;
    theaterCity:string;
    movieIds:number[];
    screenList:string[];
    managerName:string;
    managerContact:string;

    constructor(theaterId:number, theaterName:string, theaterCity:string, movieIds:number[], screenList:string[], managerName:string, managerContact:string){
        this.theaterId=theaterId;
        this.theaterName=theaterName;
        this.theaterCity=theaterCity;
        this.movieIds=movieIds;
        this.screenList=screenList;
        this.managerName=managerName;
        this.managerContact=managerContact;
    }
}