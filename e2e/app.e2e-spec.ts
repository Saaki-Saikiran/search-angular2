import { SearchAng2Page } from './app.po';

describe('search-ang2 App', () => {
  let page: SearchAng2Page;

  beforeEach(() => {
    page = new SearchAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
