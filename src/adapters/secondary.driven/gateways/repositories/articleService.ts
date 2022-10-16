import { Injectable } from "@nestjs/common";
import { ArticleRepository } from "src/hexagon/gateways/repositories/articleRepository";
import CreationModel from "src/hexagon/models/articleModel";
import  Database from '../database/fakeDatabase'


@Injectable()
export default class ArticleService implements ArticleRepository {
    db;

    constructor() {
        this.db = new Database();
    }

    async insert(creationModel: CreationModel): Promise<string> {
        await this.db.create(creationModel);
        return 'Content created successfully !';
    }
}