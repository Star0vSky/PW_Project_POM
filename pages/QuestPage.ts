import { expect, Locator, Page } from "@playwright/test";

export class QuestPage {
    private page: Page;
    readonly TITLE_QUEST: Locator;
    readonly QUEST_DESCRIPTION_TITLE: Locator;
    readonly QUEST_DESCRIPTION_TEXT: Locator;
    readonly PROGRESS_BAR_TITLE: Locator;
    readonly PROGRESS_BAR: Locator;
    readonly VICTORY_ALERT: Locator;
    readonly FAILURE_ALERT: Locator;
    readonly QA_WARRIORS_TITLE: Locator;
    readonly WARRIOR_1: Locator;
    readonly WARRIOR_2: Locator;
    readonly WARRIOR_3: Locator;
    readonly REWARDS_TITLE: Locator;
    readonly GOLD_COINS: Locator;
    readonly GOLD_COINS_COUNT: Locator;
    readonly ARTIFACTS: Locator;
    readonly ARTIFACTS_COUNT: Locator;
    readonly DAYS_OFF: Locator;
    readonly DAYS_OFF_COUNT: Locator;
    readonly FIX_BUG_BUTTON: Locator;
    readonly FIND_BUG_BUTTON: Locator;
    readonly CLAIM_BONUS_BUTTON: Locator;
    readonly OBTAIN_ARTIFACTS_BUTTON: Locator;
    readonly EARN_DAYS_OFF_BUTTON: Locator;
    readonly CUSTOM_ACTION_BOX: Locator;
    readonly SUBMIT_BUTTON: Locator;
    readonly VALID_ACTION_WARNING: Locator;
    readonly NOT_VALID_ACTION_WARNING: Locator;
    readonly OK_ACTION_WARNING_BUTTON: Locator;
    readonly SUBMIT_ACTION_WARNING: Locator;



    constructor(page: Page) {
        this.page = page;
        // this.TITLE_QUEST = this.page.getByRole('heading', { name: 'QA Quest: [Quest Name]' });
        this.TITLE_QUEST = this.page.locator('h1', { hasText: 'QA Quest: [Quest Name]' });
        this.QUEST_DESCRIPTION_TITLE = this.page.locator('h2', { hasText: 'Quest Description' });
        this.QUEST_DESCRIPTION_TEXT = this.page.getByText('Embark on a journey');
        this.PROGRESS_BAR_TITLE = this.page.locator('h2', { hasText: 'Progress' });
        this.PROGRESS_BAR = this.page.locator('#progressBarFill', { hasText: /^30% Defect-Free$/ });
        this.VICTORY_ALERT = this.page.locator('#customAlert', { hasText: '🎉 Victory! All defects vanquished! 🎉' });
        this.FAILURE_ALERT = this.page.locator('#customAlert', { hasText: '💀 Quest Failed! The bugs have taken over. 💀' });
        this.QA_WARRIORS_TITLE = this.page.locator('h2', { hasText: 'QA Warriors' });
        this.WARRIOR_1 = this.page.getByText('Warrior 1: Bug Hunter', { exact: true });
        this.WARRIOR_2 = this.page.getByText('Warrior 2: Code Guardian', { exact: true });
        this.WARRIOR_3 = this.page.getByText('Warrior 3: Test Mage', { exact: true });
        this.REWARDS_TITLE = this.page.locator('h2', { hasText: 'Rewards' });
        this.GOLD_COINS = this.page.locator('img[src="gold.png"]');
        this.GOLD_COINS_COUNT = this.page.locator('#goldCount', { hasText: /^0$/ });
        this.ARTIFACTS = this.page.locator('img[src="artifact.png"]');
        this.ARTIFACTS_COUNT = this.page.locator('#artifactCount', { hasText: /^0$/ });
        this.DAYS_OFF = this.page.locator('img[src="points.png"]');
        this.DAYS_OFF_COUNT = this.page.locator('#honorCount', { hasText: /^0$/ });
        this.FIX_BUG_BUTTON = this.page.locator('button', { hasText: 'Fix Bug' });
        this.FIND_BUG_BUTTON = this.page.locator('button', { hasText: 'Find Bug' });
        this.CLAIM_BONUS_BUTTON = this.page.locator('button', { hasText: 'Claim Bonus' });
        this.OBTAIN_ARTIFACTS_BUTTON = this.page.locator('button', { hasText: 'Obtain QA Artifact' });
        this.EARN_DAYS_OFF_BUTTON = this.page.locator('button', { hasText: 'Earn Days Off' });
        this.CUSTOM_ACTION_BOX = this.page.getByPlaceholder('Enter custom QA action');
        this.SUBMIT_BUTTON = this.page.getByText('Submit Action');
        this.VALID_ACTION_WARNING = this.page.locator('#customAlertMessage', { hasText: 'You have performed the action:' });
        this.NOT_VALID_ACTION_WARNING = this.page.locator('#customAlertMessage', { hasText: 'Please enter a valid action.' });
        this.OK_ACTION_WARNING_BUTTON = this.page.locator('button', { hasText: 'Aye, I Shall Comply!' });
        this.SUBMIT_ACTION_WARNING = this.page.locator('#customAlert');


    }

    // All titles are visible.

    async titleQuestIsVisible() {
        await expect(this.TITLE_QUEST).toBeVisible();
    }

    async descriptionTitletIsVisible() {
        await expect(this.QUEST_DESCRIPTION_TITLE).toBeVisible();
    }

    async descriptionTextIsVisible() {
        await expect(this.QUEST_DESCRIPTION_TEXT).toBeVisible();
    }

    async progressTitleIsVisible() {
        await expect(this.PROGRESS_BAR_TITLE).toBeVisible();
    }

    async warriorsTitleIsVisible() {
        await expect(this.QA_WARRIORS_TITLE).toBeVisible();
    }

    async rewardsTitletIsVisible() {
        await expect(this.REWARDS_TITLE).toBeVisible();
    }

    // The warriors are visible.

    async firstWarriorIsVisible() {
        await expect(this.WARRIOR_1).toBeVisible();
    }

    async secondWarriorIsVisible() {
        await expect(this.WARRIOR_2).toBeVisible();
    }

    async thirdWarriorIsVisible() {
        await expect(this.WARRIOR_3).toBeVisible();
    }

    // The rewards pictures are visible.

    async goldCoinPicIsVisible() {
        await expect(this.GOLD_COINS).toBeVisible();
    }

    async artifactPicIsVisible() {
        await expect(this.ARTIFACTS).toBeVisible();
    }

    async dayOffPicIsVisible() {
        await expect(this.DAYS_OFF).toBeVisible();
    }

    // Progress tracking.

    async progressBarIsVisible() {
        await expect(this.PROGRESS_BAR).toBeVisible();

    }

    async progressBarVictiryAlertIsPopedUp(repeat: number) {
        for (let i = 0; i < repeat; i++) {
            await this.FIX_BUG_BUTTON.click();

        }
        await expect(this.FAILURE_ALERT).not.toBeVisible();
        await expect(this.VICTORY_ALERT).toBeVisible();
        await this.OK_ACTION_WARNING_BUTTON.click();
    }

    async progressBarFailureAlertIsPopedUp(repeat: number) {
        for (let i = 0; i < repeat; i++) {
            await this.FIND_BUG_BUTTON.click();

        }
        await expect(this.VICTORY_ALERT).not.toBeVisible();
        await expect(this.FAILURE_ALERT).toBeVisible();
        await this.OK_ACTION_WARNING_BUTTON.click();
    }

    // Action Buttons Functionality.

    async actionButtonsAreVisible() {
        await expect(this.FIX_BUG_BUTTON).toBeVisible();
        await expect(this.FIND_BUG_BUTTON).toBeVisible();
        await expect(this.CLAIM_BONUS_BUTTON).toBeVisible();
        await expect(this.OBTAIN_ARTIFACTS_BUTTON).toBeVisible();
        await expect(this.EARN_DAYS_OFF_BUTTON).toBeVisible();

    }

    async fixFindButtonProgress() {
        for (let i = 0; i < 5; i++) {
            await this.FIX_BUG_BUTTON.click();
        }
        for (let i = 0; i < 2; i++) {
            await this.FIND_BUG_BUTTON.click();
        }
        await expect(this.PROGRESS_BAR).toBeVisible();
    }

    async claimBonusButtonStep(repeat: number, result: string) {
        await expect(this.GOLD_COINS_COUNT).toBeVisible();
        for (let i = 0; i < repeat; i++) {
            await this.CLAIM_BONUS_BUTTON.click();
        }
        await expect(this.page.locator('#goldCount', { hasText: result })).toBeVisible();
    }

    async artifactButtonStep(repeat: number, result: string) {
        await expect(this.ARTIFACTS_COUNT).toBeVisible();
        for (let i = 0; i < repeat; i++) {
            await this.OBTAIN_ARTIFACTS_BUTTON.click();
        }
        await expect(this.page.locator('#artifactCount', { hasText: result })).toBeVisible();      
    }

    async daysOffButtonStep(repeat: number, result: string) {
        await expect(this.DAYS_OFF_COUNT).toBeVisible();
        for (let i = 0; i < repeat; i++) {
            await this.EARN_DAYS_OFF_BUTTON.click();
        }
        await expect(this.page.locator('#honorCount', { hasText: result })).toBeVisible();    
    }

    async customWrongActionAlertIsPopedUp() {
        await expect(this.CUSTOM_ACTION_BOX).toBeVisible();
        await expect(this.NOT_VALID_ACTION_WARNING).not.toBeVisible();
        await this.SUBMIT_BUTTON.click();
        await expect(this.NOT_VALID_ACTION_WARNING).toBeVisible();
        await this.OK_ACTION_WARNING_BUTTON.click();
    }

    async customValidgActionAlertIsPopedUp(action: string) {
        await expect(this.CUSTOM_ACTION_BOX).toBeVisible();
        await expect(this.NOT_VALID_ACTION_WARNING).not.toBeVisible();
        await expect(this.VALID_ACTION_WARNING).not.toBeVisible();
        await this.CUSTOM_ACTION_BOX.fill(action);
        await this.SUBMIT_BUTTON.click();
        await expect(this.VALID_ACTION_WARNING).toBeVisible();
        await this.OK_ACTION_WARNING_BUTTON.click();
        await expect(this.VALID_ACTION_WARNING).not.toBeVisible();
        await expect(this.NOT_VALID_ACTION_WARNING).not.toBeVisible();
    }

}