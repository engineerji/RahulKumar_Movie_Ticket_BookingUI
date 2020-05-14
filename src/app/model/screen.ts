export class Screen{
    screenId:number;
    theaterId:number;
    screenName:string;
    showList:number[];
    row:number;
    column:number;

    constructor(screenId:number,theaterId:number,screenName:string,showList:number[],row:number,column:number){
        this.screenId=screenId;
        this.theaterId=theaterId;
        this.screenName=screenName;
        this.showList=showList;
        this.row=row;
        this.column=column;
    }
}