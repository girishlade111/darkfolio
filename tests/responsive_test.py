from playwright.sync_api import sync_playwright

viewports = [320, 360, 375, 390, 412, 430, 480, 540, 640, 768, 820, 912, 1024, 1280, 1440, 1600, 1920]
routes = ['/', '/about', '/projects', '/projects/gb-coder', '/skills', '/contact', '/404']

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    
    failures = []
    total_tests = 0
    for w in viewports:
        page.set_viewport_size({'width': w, 'height': 800})
        for r in routes:
            page.goto(f'http://localhost:4173{r}', wait_until='networkidle')
            total_tests += 1
            has_overflow = page.evaluate('document.documentElement.scrollWidth > window.innerWidth')
            if has_overflow:
                scroll_w = page.evaluate('document.documentElement.scrollWidth')
                failures.append(f'Width {w} on route {r} has overflow (scrollWidth={scroll_w} > windowWidth={w})')

    browser.close()

if failures:
    print('OVERFLOW FAILURES:')
    for f in failures:
        print(f)
    exit(1)
else:
    print(f'PASSED: Tested {len(viewports)} viewports across {len(routes)} routes ({total_tests} tests). ZERO horizontal overflow!')
