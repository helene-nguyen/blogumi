import TestService from '../../../adapters/secondary.driven/testService/testService';

export default class MiniHexa {
    testService = new TestService();

    test() {
       return this.testService.getHello();
        }
}