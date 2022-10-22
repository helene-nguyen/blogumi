import { Injectable } from "@nestjs/common";
import { HexaArticleRepository } from "src/hexagon/gateways/repositories/hexaArticleRepository";
import CreationModel from "src/hexagon/models/articleModel";
import  Database from '../database/fakeDatabase'


@Injectable()
export default class ArticleRepository implements HexaArticleRepository {
    db;

    constructor() {
        this.db = new Database();
    }

    async insert(creationModel: CreationModel): Promise<string> {
        await this.db.create(creationModel);
        // Here, I wanted to control if the content was well created after passing test
        // const data = await this.db.read();
        // console.log('data: ', data);
        return 'Content created successfully !';
    }
}