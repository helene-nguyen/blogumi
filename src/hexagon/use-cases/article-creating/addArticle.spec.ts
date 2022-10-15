
import AddArticle from './addArticle';

describe('Add an article', () => {
    //~GIVEN
    let addArticle: AddArticle;
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
        expect(addArticle.handle({
            username,
            content,
            role: 'admin'
        })).toEqual('Content created successfully !')
    })
})