import { ISISAppPage } from './app.po';

describe('isisapp App', () => {
  let page: ISISAppPage;

  beforeEach(() => {
    page = new ISISAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
