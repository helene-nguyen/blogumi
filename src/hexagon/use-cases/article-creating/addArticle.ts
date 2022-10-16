import ArticleService from '../../../adapters/secondary.driven/gateways/repositories/articleService'
import CreationModel from '../../models/articleModel'
export default class AddArticle {
    articleService = new ArticleService();

    // here a mistake, I've got error, object sent beacause i added async
    async handle(
        articleInfo
    ) {
        const articleModel = new CreationModel(articleInfo);

        if (articleModel.checkedRole) {
            const contentCreated = await this.articleService.insert(articleInfo)
            return contentCreated;
        }

    }
}