export interface IHistory {
    id: string;
    titleOrName: string;
    summaryOrSrc: string;
}

interface IBase {
    id: string;
    userId: string;
    username: string;
    data: string;
    title: string
}

export interface IRecommend extends IBase{
    addr: string;
}

export interface IArticle extends IBase{
    tags: Array<string>;
    summary: string;
    thumb: number;
    comments: number;
    collection: number;
    img?: string;
    content?: string;
}

export interface IVideo extends IBase{
    thumb: number;  // 点赞量
    introduction?: string;
    comments: number;   // 评论量
    views?: number; // 观看量
    hotComment?: {
        userId: string;
        username: string;
        comment: string;
    };
    collection: number; // 收藏量
    forward: number;    // 转发量
    imgWebp: string;
    imgAvif: string;
    img: string;
    src: string;
}

export interface IRemark extends IBase {
    partialContent: string;
    imgs?: string[]
}