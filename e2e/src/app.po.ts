import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
<<<<<<< HEAD
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
=======
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
>>>>>>> origin/master
  }
}
