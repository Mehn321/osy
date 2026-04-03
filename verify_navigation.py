import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Check Dashboard
        await page.goto("http://localhost:5173/")
        await page.wait_for_selector("h1:has-text('Dashboard')")
        print("Dashboard loaded")

        # Navigate to Profiles
        await page.click("a:has-text('OSY Profiles')")
        await page.wait_for_selector("h1:has-text('OSY Profiles')")
        print("Profiles page loaded")

        # Click Add New Profile
        await page.click("a:has-text('Add New Profile')")
        await page.wait_for_selector("h1:has-text('OSY Registry')")
        print("Registry page loaded")

        # Check Sidebar Highlight (Registry should probably highlight Profiles or nothing)
        # But let's check Reports
        await page.click("a:has-text('Reports')")
        await page.wait_for_selector("h1:has-text('Reports & Analytics')")
        print("Reports page loaded")

        # Check Breadcrumb on Reports
        breadcrumb = await page.inner_text("nav:has-text('Barangay OSY')")
        print(f"Breadcrumb: {breadcrumb}")

        await browser.close()

asyncio.run(main())
