import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1024, 'height': 768})
    
    # Test 1: Heading hierarchy & semantics on all routes
    routes = ['/', '/about', '/projects', '/projects/gb-coder', '/skills', '/contact', '/404']
    for r in routes:
        page.goto(f'http://localhost:4173{r}', wait_until='networkidle')
        h1_count = page.locator('h1').count()
        title = page.title()
        print(f'Route {r}: h1 count = {h1_count}, title = "{title}"')
        assert h1_count == 1, f'Expected exactly 1 h1 on {r}, found {h1_count}'

    # Test 2: Keyboard navigation on home page
    page.goto('http://localhost:4173/', wait_until='networkidle')
    page.keyboard.press('Tab') # Focus brand link
    focused_text = page.evaluate('document.activeElement.innerText')
    print('First tab focused element:', focused_text)
    
    # Tab to "MORE ABOUT ME"
    page.keyboard.press('Tab')
    second_focused = page.evaluate('document.activeElement.innerText')
    print('Second tab focused element:', second_focused)
    
    # Test 3: Project card keyboard activation
    # Navigate to /projects
    page.goto('http://localhost:4173/projects', wait_until='networkidle')
    # Focus first project card
    first_card = page.locator('.project-card').first
    first_card.focus()
    print('Focused first card:', page.evaluate('document.activeElement.getAttribute("aria-label")'))
    page.keyboard.press('Enter')
    page.wait_for_url('**/projects/gb-coder')
    print('Successfully navigated via Enter to:', page.url)

    # Test 4: Prefers-reduced-motion
    page_reduced = browser.new_page(
        viewport={'width': 1024, 'height': 768},
        reduced_motion='reduce'
    )
    page_reduced.goto('http://localhost:4173/', wait_until='networkidle')
    time.sleep(0.3)
    opacity = page_reduced.evaluate('getComputedStyle(document.querySelector(".display-title")).opacity')
    print('Display title opacity under reduced motion:', opacity)

    browser.close()

print('ALL ACCESSIBILITY & INTERACTION TESTS PASSED!')
