export interface Pelicula {
    title:string;
    type: string;
    release_year:number;
    age_certification: string;
    runtime:number;
    genres:string[];
    production_countries:string[];
    seasons: string;
    imdb_id: string;
    imdb_score:number;
    imdb_votes:number;
}
