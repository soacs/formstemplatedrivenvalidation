import { FormstemplatedrivenvalidationPage } from './app.po';

describe('formstemplatedrivenvalidation App', () => {
  let page: FormstemplatedrivenvalidationPage;

  beforeEach(() => {
    page = new FormstemplatedrivenvalidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
