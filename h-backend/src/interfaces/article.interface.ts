import { ICommon } from "./common.type";

export interface IArticle extends ICommon {
    tags: Array<string>;
    summary: string;
    thumb: number;
    commentCnt: number;
    views: number;
    collection: number;
    coverImg: string;
    articlePath: string;
}