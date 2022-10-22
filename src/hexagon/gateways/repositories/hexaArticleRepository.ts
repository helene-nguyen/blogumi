import CreationModel from '../../models/articleModel'

export interface HexaArticleRepository {
    insert(creationModel: CreationModel) : Promise<string>;
}