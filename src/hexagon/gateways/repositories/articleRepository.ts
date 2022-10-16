import CreationModel from '../../models/articleModel'

export interface ArticleRepository {
    insert(creationModel: CreationModel) : Promise<string>;
}