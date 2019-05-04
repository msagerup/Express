const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.finn.no');
    await page.screenshot({path: 'finn.png'});

})()