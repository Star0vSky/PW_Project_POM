import {test} from '@playwright/test';
import { MainPage } from '../pages/MainPage';


test.describe("Main page tests", ()=> {
let mainPage: MainPage;

test.beforeEach(async({page})=>{
mainPage = new MainPage(page);
await mainPage.open();

});

test('E2E Main Page Test', async ({ page }) => {

await mainPage.fillName('Dimitri');
await mainPage.fillEmail('starovsky@gmail.com');
await mainPage.selectQaTraits('Stealth Testing');
await mainPage.allegianceRadio('Trickster of Bugs');
await mainPage.skillCheckBox('Bug Fixing Touch');
await mainPage.uploadPortrait('../resources/Dwarf_04.jpg');
await mainPage.startDateCalendar('2023-03-01');
await mainPage.skillLevelSlider('ArrowRight', 12);
await mainPage.dragDropNewPortrait('#hero3');
await mainPage.clickJoin();
await mainPage.newMemberIsVisible();
await mainPage.alertNotVisible();
await mainPage.guildInfoClick();

const wizardsGym = await mainPage.improveSkill();
await wizardsGym.wizardsGymTitle();
await wizardsGym.backToMainClick();

const adventurePage = await mainPage.clickStartAdventure();
await adventurePage.alertVisibleAdventure();

console.log('E2E Main Page Test Passed!'); 

});

});



