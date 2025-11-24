import { expect, Locator, Page } from "@playwright/test";
import path from "path";
import { WizardsGym } from "./WizardsGym";
import { AdventurePage } from "./AdventurePage";

export class MainPage {
    private page: Page;
    readonly NAME_INPUT_BOX: Locator;
    private enteredName: string | null = null;
    readonly EMAIL_INPUT_BOX: Locator;
    readonly QA_TRAIT_LIST: Locator;
    readonly UPLOAD_PORTRAIT: Locator;
    readonly MEMBERSHIP_CALENDAR: Locator;
    readonly SKILL_SLIDER: Locator;
    readonly DRAG_DROP_BOX: Locator;
    readonly NEW_PORTRAIT: Locator;
    readonly JOIN_GUILD_BUTTON: Locator;
    readonly GUILD_INFO_BUTTON: Locator;
    readonly POPUP_GUILD_MESSAGE: Locator;
    readonly GUILD_OK_BUTTON: Locator;
    readonly IMPROVE_SKILLS: Locator;
    readonly WARNING_MISSING_FIELD: Locator;
    readonly OK_BUTTON: Locator;
    readonly START_ADVENTURE: Locator;



    constructor(page: Page) {
        this.page = page;
        this.NAME_INPUT_BOX = this.page.getByTestId('name-input');
        this.EMAIL_INPUT_BOX = this.page.getByTestId('email-input');
        this.QA_TRAIT_LIST = this.page.getByTestId('superpower-select');
        this.UPLOAD_PORTRAIT = this.page.getByTestId('photo-upload');
        this.MEMBERSHIP_CALENDAR = this.page.getByTestId('date-input');
        this.SKILL_SLIDER = this.page.getByTestId('level-range');
        this.DRAG_DROP_BOX = this.page.getByTestId('team-area');
        this.JOIN_GUILD_BUTTON = this.page.getByTestId('join-guild-button');
        this.GUILD_INFO_BUTTON = this.page.getByTestId('guild-info-button');
        this.POPUP_GUILD_MESSAGE = this.page.getByTestId('info-dialog');
        this.GUILD_OK_BUTTON = this.page.getByTestId('close-info-button');
        this.IMPROVE_SKILLS = this.page.getByTestId('improve-skills-button');
        this.WARNING_MISSING_FIELD = this.page.getByText('By the decree of the Guildmaster');
        this.START_ADVENTURE = this.page.getByTestId('start-quest-button');


    }

    async open() {
        await this.page.goto('/');
    }

    async fillName(name: string) {
        await this.NAME_INPUT_BOX.fill(name);
        this.enteredName = name;
    }

    async fillEmail(email: string) {
        await this.EMAIL_INPUT_BOX.fill(email);
    }

    async selectQaTraits(label: string) {
        await this.QA_TRAIT_LIST.selectOption({ label });
    }

    async allegianceRadio(optionText: string) {
        const radioAlleg = this.page.locator(`label:has-text('${optionText}')`);
        await radioAlleg.click();
    }

    async skillCheckBox(optionText: string) {
        const checkBoxSkill = this.page.locator(`label:has-text('${optionText}')`);
        await checkBoxSkill.click();
    }

    async uploadPortrait(filePath: string) {
        const portraitPath = path.resolve(__dirname, filePath);
        await this.UPLOAD_PORTRAIT.setInputFiles(portraitPath);
    }

    async startDateCalendar(date: string) {
        await this.MEMBERSHIP_CALENDAR.fill(date);
    }

    async skillLevelSlider(text: string, repeat: number) {
        await this.SKILL_SLIDER.focus();
        for (let i = 0; i < repeat; i++) {
            await this.page.keyboard.press(text);
        }
    }

    async dragDropNewPortrait(text: string) {
        const newPortrait = this.page.locator(text);
        await newPortrait.dragTo(this.DRAG_DROP_BOX);
    }

    async clickJoin() {
        await this.JOIN_GUILD_BUTTON.click();
    }

    async newMemberIsVisible() {
        if (!this.enteredName) throw new Error('Name was not entered!');
        const newRow = await this.page.getByRole('row', { name: this.enteredName });
        await expect(newRow).toBeVisible();
    }

    async alertNotVisible() {
        await expect(this.WARNING_MISSING_FIELD).not.toBeVisible();
    }

    async guildInfoClick() {
        await this.GUILD_INFO_BUTTON.click();
        await expect(this.POPUP_GUILD_MESSAGE).toBeVisible();
        await this.GUILD_OK_BUTTON.click();
    }

    async improveSkill() {
        await this.IMPROVE_SKILLS.click();
        await this.page.waitForSelector('text=Legion QA Wizards Gym', { timeout: 5000 });
        return new WizardsGym(this.page);
    }

    async clickStartAdventure(): Promise<AdventurePage> {
        await this.START_ADVENTURE.click();
        return new AdventurePage(this.page);
    }

}

