export interface IHistory {
    id: string;
    titleOrName: string;
    summaryOrSrc: string;
}

export interface IRecommend {
    id: string;
    title: string;
    addr: string;
}

export interface IArticle {
    id: string;
    title: string;
    author: string;
    userId: string;
    tags: Array<string>;
    summary: string;
    thumb: number;
    comments: number;
    collection: number;
    img?: string;
}