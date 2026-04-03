from playwright.sync_api import sync_playwright

def verify_reports():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto('http://localhost:3000/reports')
            page.wait_for_load_state('networkidle')

            # Verify charts are present
            assert page.is_visible('h3:has-text("Profiling Status Distribution")')
            assert page.is_visible('h3:has-text("Top Missing Skills")')
            assert page.is_visible('svg')

            # Take screenshot
            page.screenshot(path='/home/jules/verification/reports_visual.png', full_page=True)
            print("Reports page verification successful. Screenshot saved.")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_reports()
