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
    content?: string;
}

export interface IVideo {
    id: string;
    title: string;
    author: string;
    userId: string;
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
    date: string;
}