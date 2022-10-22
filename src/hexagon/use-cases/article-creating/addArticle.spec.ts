
import AddArticle from './addArticle';
import ArticleRepository from '../../../adapters/secondary.driven/gateways/repositories/articleRepository';

describe('Add an article', () => {
    //~GIVEN
    let addArticle: AddArticle;
    //fake Article repository
    let articleRepository: ArticleRepository;
    const username = 'yumi';
    const content = 'Some content';

    //* beforeEach is only before the test
    //my error : I've put it in the 'it' statement
    beforeEach(() => {
        articleRepository = new ArticleRepository();

        addArticle = new AddArticle(articleRepository);
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