import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        os.makedirs("verification", exist_ok=True)

        # Log in
        await page.goto("http://localhost:5173/login")
        await page.fill("input[id='identity']", "admin.horizon")
        await page.fill("input[id='password']", "password")
        await page.click("button:has-text('Sign In to Dashboard')")

        # Navigate to Opportunities
        await page.click("a:has-text('Opportunities')")
        await page.wait_for_selector("h1:has-text('Opportunity Management')")

        # 1. Count initial opportunities
        initial_cards = await page.locator(".group.bg-surface-container-lowest").count()
        print(f"Initial opportunity cards: {initial_cards}")

        # 2. Add New Job
        print("Adding a new job...")
        await page.click("button:has-text('Encode New Job')")
        await page.wait_for_selector("h2:has-text('Encode New Job')")
        await page.fill("input[placeholder='e.g. Graphic Designer']", "Test Job Title")
        await page.fill("input[placeholder='e.g. Tech Solutions Inc.']", "Test Company")
        await page.fill("input[placeholder='₱15k - 20k']", "₱20,000")
        await page.fill("input[placeholder='IT, Programming, English']", "Test, Playwright")
        await page.click("button:has-text('Save Opportunity')")

        # Wait for modal to close
        await page.wait_for_selector("h2:has-text('Encode New Job')", state="hidden")

        new_cards_count = await page.locator(".group.bg-surface-container-lowest").count()
        print(f"Opportunity cards after adding: {new_cards_count}")
        if new_cards_count != initial_cards + 1:
            print("FAILED: New job card not added.")
        else:
            print("SUCCESS: New job card added.")

        # 3. Delete an opportunity
        print("Deleting an opportunity...")
        # Hover over the first card to reveal delete button
        first_card = page.locator(".group.bg-surface-container-lowest").first
        await first_card.hover()

        # Setup dialog handler to accept the confirm()
        page.on("dialog", lambda dialog: dialog.accept())

        delete_button = first_card.locator("button:has-text('delete')")
        await delete_button.click()

        # Wait for card to be removed (briefly wait or check count)
        await asyncio.sleep(1)
        final_cards_count = await page.locator(".group.bg-surface-container-lowest").count()
        print(f"Opportunity cards after deleting: {final_cards_count}")

        if final_cards_count != new_cards_count - 1:
            print("FAILED: Card not removed.")
        else:
            print("SUCCESS: Card removed.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
