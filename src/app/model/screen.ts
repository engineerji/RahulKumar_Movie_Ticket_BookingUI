export class Screen{
    screenId:number;
    theatreId:number;
    screenName:string;
    showList:number[];
    row:number;
    column:number;

    constructor(screenId:number,theatreId:number,screenName:string,showList:number[],row:number,column:number){
        this.screenId=screenId;
        this.theatreId=theatreId;
        this.screenName=screenName;
        this.showList=showList;
        this.row=row;
        this.column=column;
    }
}