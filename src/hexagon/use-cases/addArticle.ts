interface ArticleInfo {
    username: string;
    content: string;
    role: string;
}

export default class AddArticle {
    handle(
        articleInfo: ArticleInfo
    ) {
        if (articleInfo.role === 'admin')
            return 'Content created successfully !';
    }
}