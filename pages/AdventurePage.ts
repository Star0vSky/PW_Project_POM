import { expect, Locator, Page } from "@playwright/test";
import { QuestPage } from "./QuestPage";



export class AdventurePage {
    private page: Page;
    readonly TITLE_ADVENTURE: Locator;
    readonly NAME_QUEST: Locator;
    readonly DESCRIPTION_QUEST: Locator;
    readonly COMPLEXITY_LEVEL: Locator;
    readonly EXECUTION_DURATION: Locator;
    readonly REWARD_TYPE: Locator;
    readonly TEAM_SIZE: Locator;
    readonly INITIATE_ADVENTURE: Locator;
    readonly EPIC_QA_ADVENTURE: Locator;
    readonly EMBARK_ON_TESTING_BUTTON: Locator;


    constructor(page: Page) {
        this.page = page;
        this.TITLE_ADVENTURE = this.page.getByRole('heading', { name: 'QA Adventure Configuration' });
        this.NAME_QUEST = this.page.locator('#questName');
        this.DESCRIPTION_QUEST = this.page.locator('#questDescription');
        this.COMPLEXITY_LEVEL = this.page.locator('#questLevel');
        this.EXECUTION_DURATION = this.page.locator('#questDuration');
        this.REWARD_TYPE = this.page.locator('#reward');
        this.TEAM_SIZE = this.page.locator('#teamSize');
        this.INITIATE_ADVENTURE = this.page.getByRole('button', { name: 'Initiate QA Adventure' });
        this.EPIC_QA_ADVENTURE = this.page.getByRole('heading', { name: 'Prepare thyself for an epic QA adventure!' });
        this.EMBARK_ON_TESTING_BUTTON = this.page.getByText('Embark on Testing!');


    }

    async alertVisibleAdventure() {
        await expect(this.TITLE_ADVENTURE).toBeVisible();
    }

    async fillQuestName(questName: string) {
        await this.NAME_QUEST.fill(questName);
    }

    async fillQuestDescription(questDescription: string) {
        await this.DESCRIPTION_QUEST.fill(questDescription);
    }

    async cmplexityLevelSelection(label: string) {
        await this.COMPLEXITY_LEVEL.selectOption({ label });
    }

    async questTypeRadio(optionText: string) {
        const radioType = this.page.locator(`label:has-text('${optionText}')`);
        // return this.page.locator(`label:has-text('${optionText}')`);
        await radioType.click();
    }

    async fillExecutionDuration(durationExecution: string, repeat: number) {
        await this.EXECUTION_DURATION.focus();
        for (let i = 0; i < repeat; i++) {
            await this.page.keyboard.press(durationExecution);
        }
    }

    async rewardTypeSelection(label: string) {
        await this.REWARD_TYPE.selectOption({ label });
    }

    //  async teamSizeSlider(slider: number) {
    //     const current = Number(await this.TEAM_SIZE.inputValue());
    //     const repeat = current < slider ? 1 : -1;
    //     const key = repeat > 0 ? 'ArrowRight' : 'ArrowLeft';
    //     await this.TEAM_SIZE.focus();
    //     for (let i = current; i !== slider; i+=repeat) {
    //         await this.page.keyboard.press(key);
    //          await this.page.waitForTimeout(100);

    //     }

    // }

    async teamSizeSlider(number: string) {
        await this.TEAM_SIZE.fill(number);
    }

    async alertVisibleInitiateQA() {
        await expect(this.INITIATE_ADVENTURE).toBeVisible();
        await expect(this.INITIATE_ADVENTURE).toHaveCSS('background-color', 'rgb(139, 26, 26)');
        await this.INITIATE_ADVENTURE.click();

    }

    async epicAdventureIsVisible() {
        await expect(this.EPIC_QA_ADVENTURE).toBeVisible();
    }


    async embarkOnTestingClick(): Promise<QuestPage> {
        await this.EMBARK_ON_TESTING_BUTTON.click();
        return new QuestPage(this.page);
    }

}

