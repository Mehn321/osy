import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        # Log in
        await page.goto("http://localhost:5173/login")
        await page.fill("input[type='email']", "admin@barangay.gov.ph")
        await page.fill("input[type='password']", "password")
        await page.click("button:has-text('Sign In')")

        # 1. Opportunity Hub
        await page.click("a:has-text('Opportunity Hub')")
        await page.wait_for_selector("h1:has-text('Opportunity Hub: Jobs & Training')")
        await page.screenshot(path="/home/jules/verification/opportunity_hub.png")
        print("Captured Opportunity Hub")

        # 2. Education & Skills Form
        await page.click("a:has-text('OSY Profiles')")
        await page.click("a:has-text('Add New Profile')")
        await page.wait_for_selector("h1:has-text('OSY Education & Skills Form')")
        await page.screenshot(path="/home/jules/verification/registry_form.png")
        print("Captured Registry Form")

        # 3. Notification Templates
        await page.click("a:has-text('Notifications')")
        await page.click("a:has-text('Manage Templates')")
        await page.wait_for_selector("h1:has-text('Notification Templates')")
        await page.screenshot(path="/home/jules/verification/templates_screen.png")
        print("Captured Templates screen")

        # 4. Standardized Profile
        await page.click("a:has-text('OSY Profiles')")
        await page.click("a:has-text('View Profile')")
        await page.wait_for_selector("h1:has-text('Juan Dela Cruz')")
        await page.screenshot(path="/home/jules/verification/standardized_profile.png")
        print("Captured Standardized Profile")

        await browser.close()

asyncio.run(main())
