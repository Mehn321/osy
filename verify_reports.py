from playwright.sync_api import sync_playwright
import os

def verify_reports():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        os.makedirs("verification", exist_ok=True)
        try:
            # Login first
            page.goto('http://localhost:5173/login')
            page.fill("input[id='identity']", "admin.horizon")
            page.fill("input[id='password']", "password")
            page.click("button:has-text('Sign In to Dashboard')")
            page.wait_for_url("**/dashboard")

            # Go to reports
            page.goto('http://localhost:5173/dashboard/reports')
            page.wait_for_load_state('networkidle')

            # Verify charts are present (using text from previous reports page knowledge if not changed)
            assert page.is_visible('h1:has-text("Reporting & Analytics")')
            assert page.is_visible('svg')

            # Take screenshot
            page.screenshot(path='verification/reports_visual.png', full_page=True)
            print("Reports page verification successful. Screenshot saved.")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_reports()
