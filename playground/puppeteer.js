const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://tripletex.no/execute/invoiceMenu?invoiceId=58509778&contextId=6921979#details');
    await page.screenshot({path: 'screenshop2.png'});

})()