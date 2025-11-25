README.md (Portfolio Demo Version)

# Playwright E2E Test Demo — QA Adventure

This is a **demo project** built to showcase **end-to-end (E2E) testing skills** using **Playwright** and **TypeScript**.  
The project simulates user interactions with a demo web application, demonstrating test automation, Page Object Model, and cross-browser testing.

> ⚠️ This is a demo project for **portfolio purposes only**. No commercial or proprietary product is involved.

---

## Installation

Clone the repository:

```bash
git clone <repository_URL>
cd <project_name>
```

## Install dependencies:

```bash
npm install
```

## Running Tests

**Run all tests**

```bash
npx playwright test
```

**Run tests in UI mode (visual inspection)**

```bash
npx playwright test --ui
```

**Open HTML report**

```bash
npx playwright show-report
```

## Project Structure

```text
/pages
    MainPage.ts         # Main page: simulate user registration, form filling, start adventure
    AdventurePage.ts    # Adventure page: configure demo quests
    QuestPage.ts        # Quest page: simulate completing quests and tracking progress
    WizardsGym.ts       # Wizards Gym: simulate training character skills
/tests
    mainpage.test.ts
    adventurepage.test.ts
    questpage.test.ts
    wizardsgym.test.ts
/resources
    Dwarf_04.jpg        # Demo avatar images for testing file uploads
playwright.config.ts    # Playwright configuration and Base URL for demo tests
config.ts               # URL for Quest Page
README.md               # This file
```

## What is Tested

The project demonstrates testing of:
- **MainPage:** form filling, user registration, navigation between pages
- **AdventurePage:** quest configuration, selection of complexity, type, rewards, team size
- **QuestPage:** performing quests, progress tracking, action buttons, alerts
- **WizardsGym:** character skill training, navigation back to main page
All tests use the Page Object Model (POM) for maintainability and clarity.

## Technologies Used

- Playwright Test Runner
- TypeScript
- HTML Report for test results
- Cross-browser testing: Chromium, Firefox, WebKit

## Configuration

Settings are in playwright.config.ts and config.ts. You can adjust:
- Base URL for demo tests
- Browser projects (add/remove browsers)
- Parallel execution and retries
- Resource paths (e.g., avatar images in /resources)

### Notes

- This project is fully safe for GitHub portfolio
- Demonstrates automated E2E testing skills without using any real commercial product
- Tests are designed for learning and showcasing Playwright best practices
- Supports parallel execution and HTML reporting



