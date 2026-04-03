import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        os.makedirs("verification", exist_ok=True)

        # 1. Landing Page
        print("Testing Landing Page...")
        await page.goto("http://localhost:5173/")
        await page.wait_for_selector("h1:has-text('Empowering our community')")
        await page.screenshot(path="verification/landing_screen.png")
        print("Captured Landing screen")

        # 2. Sign In Page
        print("Testing Sign In Page...")
        await page.goto("http://localhost:5173/login")
        await page.wait_for_selector("h2:has-text('Welcome Back')")
        await page.screenshot(path="verification/signin_screen.png")
        print("Captured SignIn screen")

        # 3. Perform Sign In
        print("Performing Sign In...")
        await page.fill("input[id='identity']", "admin.horizon")
        await page.fill("input[id='password']", "password")
        await page.click("button:has-text('Sign In to Dashboard')")
        await page.wait_for_selector("h2:has-text('Welcome back, Barangay Staff!')")
        print("Logged in to Dashboard")
        await page.screenshot(path="verification/dashboard_screen.png")

        # 4. OSY Profiles Page
        print("Testing OSY Profiles Page...")
        await page.click("a:has-text('OSY Profiles')")
        await page.wait_for_selector("h2:has-text('OSY Profile Management')")
        await page.screenshot(path="verification/profiles_screen.png")
        print("Captured Profiles screen")

        # 5. Opportunities Page
        print("Testing Opportunities Page...")
        await page.click("a:has-text('Opportunities')")
        await page.wait_for_selector("h1:has-text('Opportunity Management')")
        await page.screenshot(path="verification/opportunities_screen.png")
        print("Captured Opportunities screen")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
