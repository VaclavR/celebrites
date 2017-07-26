import { CelebritesPage } from './app.po';

describe('celebrites App', () => {
  let page: CelebritesPage;

  beforeEach(() => {
    page = new CelebritesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
