import { MatTabsDemoPage } from './app.po';

describe('mat-tabs-demo App', () => {
  let page: MatTabsDemoPage;

  beforeEach(() => {
    page = new MatTabsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
