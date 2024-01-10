interface GeneralTypes {
    id: number;
    slug: string;
    name: string;
}

interface Requirements {
    minimum: string;
    recommended: string;
}

interface Image {
    image: string;
    hidden: boolean;
}

export interface IGameResults {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: number;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating: GeneralTypes;
    platforms: {
        platform: GeneralTypes;
        released_at: string;
        requirements: Requirements;
    };
}

export interface IGameScreenshots {
    count: number;
    next: string;
    previous: string;
    results: Image[];
}

export interface IGames {
    count: number;
    next: string;
    previous: string;
    results: IGameResults[];
}
interface ITrailerResultsData {
    480: string;
    max: string;
}

interface ITrailerResults {
    id: number;
    name: string;
    preview: string;
    data: ITrailerResultsData;
}

export interface IGameTrailers {
    count: number;
    next: string;
    previous: string;
    results: ITrailerResults[];
}
