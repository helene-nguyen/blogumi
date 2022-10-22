import { HexaArticleRepository } from '../../gateways/repositories/hexaArticleRepository';
import CreationModel from '../../models/articleModel'
export default class AddArticle {
    //! bad idea to put it here because 
    // todo : try to remove new to not have a fixed state
    // articleService = new ArticleService();
    
    constructor(
        //put in the constructor, Nest knows what to put inside
        private articleRepository: HexaArticleRepository
    ) { }

    async handle(
        articleInfo
    ): Promise<string> {
        // Models is common to all alternatives(cf M.A)
        const articleModel = new CreationModel(articleInfo);

        if (articleModel.checkedRole) {
            const contentCreated = await this.articleRepository.insert(articleInfo);
            return contentCreated;
        }

    }
}