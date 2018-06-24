const puppeteer = require('puppeteer')

const download = async (link) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(link)
  console.log(link)
  setTimeout(async () => {
    page.screenshot({path: './screen.png', fullPage: true})
    const links = await page.evaluate(() => document.querySelector('#list_pages'))
    console.log(links)
    await browser.close()
  }, 5000)
}

download('https://www.mangadraft.com/reader/yellow-fox/69215')