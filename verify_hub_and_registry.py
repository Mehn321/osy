import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        # Log in
        await page.goto("http://localhost:5173/login")
        await page.fill("input[id='identity']", "admin.horizon")
        await page.fill("input[id='password']", "password")
        await page.click("button:has-text('Sign In to Dashboard')")

        # 1. Opportunity Hub
        print("Checking Opportunity Management...")
        await page.click("a:has-text('Opportunities')")
        await page.wait_for_selector("h1:has-text('Opportunity Management')")
        await page.screenshot(path="/home/jules/verification/opportunity_management.png")
        print("Captured Opportunity Management")

        # 2. Education & Skills Form
        print("Checking OSY Registry...")
        await page.click("a:has-text('OSY Profiles')")
        await page.click("a:has-text('Add New OSY')")
        # The page has h1:has-text('OSY Education & Skills Form')
        await page.wait_for_selector("h1:has-text('OSY Education & Skills Form')")
        await page.screenshot(path="/home/jules/verification/registry_form.png")
        print("Captured Registry Form")

        # 3. Notification Templates
        print("Checking Notification Templates...")
        await page.click("a:has-text('Notifications')")
        await page.goto("http://localhost:5173/dashboard/notifications/templates")
        await page.wait_for_selector("h1:has-text('Notification Templates')")
        await page.screenshot(path="/home/jules/verification/templates_screen.png")
        print("Captured Templates screen")

        # 4. Standardized Profile
        print("Checking Standardized Profile...")
        await page.click("a:has-text('OSY Profiles')")
        # Click visibility button on the first row
        await page.click("table tbody tr:first-child button")
        await page.wait_for_url("**/profiles/*")
        # Profile detail has h1:has-text('Juan Dela Cruz') (Mock data)
        await page.wait_for_selector("h1:has-text('Santos, Ricardo M.')")
        await page.screenshot(path="/home/jules/verification/standardized_profile.png")
        print("Captured Standardized Profile")

        await browser.close()

asyncio.run(main())
