import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        # 1. Sign In Page
        await page.goto("http://localhost:5173/login")
        await page.wait_for_selector("h1:has-text('Welcome Back')")
        await page.screenshot(path="/home/jules/verification/signin_screen.png")
        print("Captured SignIn screen")

        # 2. Perform Sign In
        await page.fill("input[type='email']", "admin@barangay.gov.ph")
        await page.fill("input[type='password']", "password")
        await page.click("button:has-text('Sign In')")
        await page.wait_for_selector("h1:has-text('Dashboard')")
        print("Logged in to Dashboard")

        # 3. OSY Profiles Page
        await page.click("a:has-text('OSY Profiles')")
        await page.wait_for_selector("h1:has-text('OSY Profiles')")
        await page.screenshot(path="/home/jules/verification/profiles_screen.png")
        print("Captured Profiles screen")

        # 4. OSY Registry (Step 1)
        await page.click("a:has-text('Add New Profile')")
        await page.wait_for_selector("h1:has-text('OSY Registry')")
        await page.screenshot(path="/home/jules/verification/registry_step1.png")
        print("Captured Registry Step 1 screen")

        # 5. OSY Registry (Step 2)
        await page.fill("input[name='firstName']", "Test")
        await page.fill("input[name='lastName']", "User")
        await page.fill("input[type='date']", "2000-01-01")
        await page.select_option("select[name='gender']", "Male")
        await page.click("button:has-text('Continue')")
        await page.wait_for_selector("h2:has-text('Contact & Residency')")
        await page.screenshot(path="/home/jules/verification/registry_step2.png")
        print("Captured Registry Step 2 screen")

        await browser.close()

asyncio.run(main())
