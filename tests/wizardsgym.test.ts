import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { WizardsGym } from '../pages/WizardsGym';

test.describe("Wizards Gym", () => {
    let mainPage: MainPage;
    let wizardsGym: WizardsGym;

     test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        await mainPage.open();
        await mainPage.improveSkill();

    });

    test('Wizard Gym Title and Return button tests', async ({ page }) => {

        wizardsGym = new WizardsGym(page);
       
        await wizardsGym.wizardsGymTitle();
        await wizardsGym.backToMainClick();

        console.log('Wizards Gym Page Test Passed!'); 


    });

});