import { test } from '@playwright/test';
import { QuestPage } from '../pages/QuestPage';
import { config } from '../config';

test.describe("Quest page tests", () => {
    let questPage: QuestPage;

    test.beforeEach(async ({ page }) => {
        questPage = new QuestPage(page);
        await page.goto(config.baseUrl);

    });

    test('E2E Quest Page Tests', async ({ page }) => {

    // All titles are visible.
        await questPage.titleQuestIsVisible();
        await questPage.descriptionTitleIsVisible();
        await questPage.descriptionTextIsVisible();
        await questPage.progressTitleIsVisible();
        await questPage.warriorsTitleIsVisible();
        await questPage.rewardsTitleIsVisible();
    // The warriors are visible.
        await questPage.firstWarriorIsVisible();
        await questPage.secondWarriorIsVisible();
        await questPage.thirdWarriorIsVisible();
    // The rewards pictures are visible.
        await questPage.goldCoinPicIsVisible();
        await questPage.artifactPicIsVisible();
        await questPage.dayOffPicIsVisible();
    // Progress tracking.
        await questPage.progressBarIsVisible();
        await questPage.progressBarVictoryAlertIsPoppedUp(7);
        await questPage.progressBarFailureAlertIsPoppedUp(10);
    // Action Buttons Functionality.
        await questPage.actionButtonsAreVisible();
        await questPage.fixFindButtonProgress();
        await questPage.claimBonusButtonStep(8, '80');
        await questPage.artifactButtonStep(4, '4');
        await questPage.daysOffButtonStep(15, '75');
    // Custom Action Check.
        await questPage.customWrongActionAlertIsPoppedUp();
        await questPage.customValidActionAlertIsPoppedUp('Error detection');
        console.log('E2E Quest Page Test Passed!')

    });

});