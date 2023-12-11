import { ICommon } from "./common.type";

export interface IArticle extends ICommon {
    tags?: Array<string>;
    summary: string;
    thumb: number;
    comments: number;
    views: number;
    collection: number;
    img?: string;
}