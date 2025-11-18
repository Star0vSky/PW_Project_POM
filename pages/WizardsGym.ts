import { expect, Locator, Page } from "@playwright/test";
import { MainPage } from "./MainPage";


export class WizardsGym {
  private page: Page;
  readonly TITLE_WIZARDS_GYM: Locator;
  readonly BACK_TO_HOME: Locator;

  constructor(page: Page) {
    this.page = page;
    this.TITLE_WIZARDS_GYM = this.page.getByRole('heading', { name: 'Legion QA Wizards Gym' });
    this.BACK_TO_HOME = this.page.locator('button:has-text("Back to Home")');

  }


  async wizardsGymTitle() {
    await expect(this.TITLE_WIZARDS_GYM).toBeVisible();
  }

  async backToMainClick() {
    await this.BACK_TO_HOME.click();
    return new MainPage(this.page);

  }

}