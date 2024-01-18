import { createElement } from 'lwc';
import GetRecords_LDS_Demo from 'c/getRecords_LDS_Demo';

describe('c-get-records-l-d-s-demo', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-get-records-l-d-s-demo', {
            is: GetRecords_LDS_Demo
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});