import os
import time
from playwright.sync_api import sync_playwright

os.makedirs('screenshots', exist_ok=True)

routes = [
    ('/', 'home'),
    ('/about', 'about'),
    ('/contact', 'contact'),
    ('/404', '404'),
    ('/projects', 'projects'),
    ('/projects/gb-coder', 'project-gb-coder'),
    ('/skills', 'skills'),
    ('/invalid-route-test', 'invalid-catchall'),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1024, 'height': 768})
    
    console_errors = []
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    
    for route, name in routes:
        url = f'http://localhost:4173{route}'
        print(f'Visiting {url}...')
        response = page.goto(url, wait_until='networkidle')
        time.sleep(0.6) # Wait for initial framer-motion animations
        
        # Save viewport screenshot
        page.screenshot(path=f'screenshots/{name}_desktop_1024.png', full_page=False)
        # Save full page screenshot
        page.screenshot(path=f'screenshots/{name}_desktop_full.png', full_page=True)
        status_code = response.status if response else 'Unknown'
        print(f'Captured {name} (status {status_code})')
    
    # Test mobile viewport 375x812
    page.set_viewport_size({'width': 375, 'height': 812})
    for route, name in [('/', 'home_mobile'), ('/about', 'about_mobile'), ('/contact', 'contact_mobile'), ('/404', '404_mobile')]:
        url = f'http://localhost:4173{route}'
        page.goto(url, wait_until='networkidle')
        time.sleep(0.5)
        page.screenshot(path=f'screenshots/{name}.png', full_page=False)
        print(f'Captured mobile {name}')

    browser.close()

print('Console errors encountered:', console_errors)
