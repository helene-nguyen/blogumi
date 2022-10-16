
import AddArticle from './addArticle';
import { ArticleRepository } from '../../gateways/repositories/articleRepository';

describe('Add an article', () => {
    //~GIVEN
    let addArticle: AddArticle;
    // let articleRepository: ArticleRepository;
    const username = 'yumi';
    const content = 'Some content';

    //* beforeEach is only before the test
    //my error : I've put it in the 'it' statement
    beforeEach(() => {
        addArticle = new AddArticle();
    });

    it('should contains role admin', async () => {

        //~ASSERT
        // This was my first step here ...
        // I want to have the role as admin
        expect(await addArticle.handle({
            username,
            content,
            role: 'admin'
        })).toEqual('Content created successfully !')
    })
})