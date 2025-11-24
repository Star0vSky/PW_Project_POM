import { test } from '@playwright/test';
import { AdventurePage } from '../pages/AdventurePage';
import { MainPage } from '../pages/MainPage';
import { QuestPage } from '../pages/QuestPage';

test.describe("Adventure page tests", () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        await mainPage.open();

    });

    test('E2E Adventure page tests', async ({ page }) => {

        const adventurePage = await mainPage.clickStartAdventure();

        await adventurePage.alertVisibleAdventure();
        await adventurePage.fillQuestName('E2E Adventure Test');
        await adventurePage.fillQuestDescription('Scenario Of Adventure');
        await adventurePage.complexityLevelSelection('Test Ninja');
        await adventurePage.questTypeRadio('Regression Battle');
        await adventurePage.fillExecutionDuration('ArrowUp', 7);
        await adventurePage.rewardTypeSelection('Legendary Debugging Tool');
        await adventurePage.teamSizeSlider('6');
        await adventurePage.alertVisibleInitiateQA();
        await adventurePage.epicAdventureIsVisible();
        
        const questPage = await adventurePage.embarkOnTestingClick();
        await questPage.titleQuestIsVisible();
        console.log('E2E Adventure Page Test Passed!');

    });

});
