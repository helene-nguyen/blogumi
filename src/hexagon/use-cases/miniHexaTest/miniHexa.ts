import TestService from '../../../adapters/secondary.driven/gateways/testService/testService';

export default class MiniHexa {
    testService = new TestService();

    test() {
       return this.testService.getHello();
        }
}