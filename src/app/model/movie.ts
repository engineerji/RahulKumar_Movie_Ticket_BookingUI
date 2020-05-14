export class Movie{
    movieId:number;
    movieName:string;
    movieDirector:string;
    movieLength:number;
    movieReleaseDate:Date;
    languages:string[];
    movieGenre:string;

    constructor(movieId:number, movieName:string, movieDirector:string, movieLength:number, movieReleaseDate:Date, languages:string[], movieGenre:string){
        this.movieId=movieId;
        this.movieName=movieName;
        this.movieDirector=movieDirector;
        this.movieLength=movieLength;
        this.movieReleaseDate=movieReleaseDate;
        this.languages=languages;
        this.movieGenre=movieGenre;
    }
}