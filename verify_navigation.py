import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        # Check Landing Page
        print("Checking Landing Page...")
        await page.goto("http://localhost:5173/")
        await page.wait_for_selector("h1:has-text('Empowering our community')")
        print("Landing page loaded")

        # Navigate to Login
        print("Navigating to Login...")
        await page.click("button:has-text('Sign In as Admin')")
        await page.wait_for_url("**/login")
        print("Login page loaded")

        # Perform Login
        print("Performing Login...")
        await page.fill("input[id='identity']", "admin.horizon")
        await page.fill("input[id='password']", "password")
        await page.click("button:has-text('Sign In to Dashboard')")
        await page.wait_for_url("**/dashboard")
        print("Dashboard loaded")

        # Navigate to Profiles
        print("Navigating to Profiles...")
        await page.click("a:has-text('OSY Profiles')")
        await page.wait_for_url("**/profiles")
        await page.wait_for_selector("h2:has-text('OSY Profile Management')")
        print("Profiles page loaded")

        # Navigate to Opportunities
        print("Navigating to Opportunities...")
        await page.click("a:has-text('Opportunities')")
        await page.wait_for_url("**/opportunities")
        await page.wait_for_selector("h1:has-text('Opportunity Management')")
        print("Opportunities page loaded")

        # Navigate to Reports
        print("Navigating to Reports...")
        await page.click("a:has-text('Reports')")
        await page.wait_for_url("**/reports")
        await page.wait_for_selector("h1:has-text('Reporting & Analytics')")
        print("Reports page loaded")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
