import cheerio from 'cheerio';
import extractUrls from "extract-urls";
import fetchdata from 'node-fetch';
import fs from 'fs'


//First Update the homepagevideos json than read all the authur names and than sort the authur name to remove duplicacy than save the aurthurs in json file

var authurArray = []
var SortedauthurArray = []

for (let index = 1; index < 300; index++) {
    let rawdata = fs.readFileSync(`./JsonData/stories/homepage/${index}.json`);
    let parsedData = JSON.parse(rawdata)

    const { finalDataArray } = parsedData
    finalDataArray.forEach(item => {
        authurArray.push({ name: item.author.name, href: item.author.href.substring(item.author.href.indexOf('author/') + 7, item.author.href.length - 1) })
    })
}




authurArray.forEach((item, index) => {
    let itemPresent = false
    SortedauthurArray.forEach((item1, index) => {
        if (item.name === item1.name) {
            itemPresent = true
        }
    })
    if (!itemPresent) {
        SortedauthurArray.push(item)
    }

})

console.log(SortedauthurArray.length);
fs.writeFileSync(`./JsonData/stories/Arthurs.json`, JSON.stringify(SortedauthurArray));


//After the above process is than now its time to scrap the stories by authur names


// SortedauthurArray.forEach(item => {
//     var dir = `./JsonData/stories/aurthors/${item.href}`;

//     if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir);
//     }

// })




const freeSexkahani = async (url) => {


    var finalDataArray = []
    var categoryTitle = ''
    var categoryDescription = ''
    var pagination_nav_pages = []
  
  
    const response = await fetchdata(url)
    const body = await response.text();
    const $$ = cheerio.load(body)
  
  
  
    $$('article').each((i, el) => {
  
  
      var Title = ""
      var author = {}
      var date = ""
      var views = ""
      var description = ""
      var href = ""
      var tags = []
      var authorName = ""
      var authorHref = ""
  
      const $ = cheerio.load(el)
  
      $('.entry-title a').each((i, el) => {
  
        Title = $(el).text()
        href = $(el).attr("href")
  
      })
  
      //Author name and link
  
      $('.author-name').each((i, el) => {
        const data = $(el).text()
        authorName = data
  
      })
  
      $('.url.fn.n').each((i, el) => {
        const data = $(el).attr('href')
        authorHref = data
      })
  
      author = { name: authorName, href: authorHref }
  
  
  
      $('.posted-on time').each((i, el) => {
  
        const data = $(el).text()
        date = data
  
      })
  
  
      $('.post-views-eye').each((i, el) => {
  
        const data = $(el).text()
        views = data
  
      })
      $('.entry-content p:nth-child(1)').each((i, el) => {
  
        const data = $(el).text()
        description = data
  
      })
      $('.tags-links').each((i, el) => {
  
        var array = []
  
        const select = cheerio.load(el)
        select('a').each((i, el) => {
          const data = $(el).text()
          const href = $(el).attr('href')
          array.push({ name: data, href: href })
  
        })
        tags = array
  
      })
  
  
  
  
      finalDataArray.push({
        Title: Title,
        author: author,
        date: date,
        views: views,
        description: description ? description : "",
        href: href,
        tags: tags,
  
      })
  
  
  
  
  
    })
  
  
    $$('.page-title').each((i, el) => {
  
      const data = $$(el).text()
      categoryTitle = data
  
    })
  
    $$('.taxonomy-description  p').each((i, el) => {
      const data = $$(el).text()
      if (categoryDescription.length === 0) {
        categoryDescription = data
      } else {
        categoryDescription = categoryDescription + "\n" + "\n" + "\n" + data
      }
    })
  
  
    $$('.nav-links').children().each((i, el) => {
  
      const data = $$(el).text()
      pagination_nav_pages.push(data)
    })
  
  
  
  
  
    return {
      finalDataArray: finalDataArray,
      categoryTitle: categoryTitle,
      categoryDescription: categoryDescription,
      pagination_nav_pages: pagination_nav_pages
    }
  
  }
  


for (let index = 0; index < SortedauthurArray.length; index++) {


    var finalDataArray1 = []
    var categoryTitle1 = ''
    var categoryDescription1 = ''
    var pagination_nav_pages1 = []

    for (let page = 1; page < 50; page++) {
        const data = await freeSexkahani(`https://www.freesexkahani.com/author/${SortedauthurArray[index].href}/page/${page}`)

        if (data.finalDataArray.length === 0) {
            break
        }

        data.finalDataArray.forEach(item => {
            finalDataArray1.push(item)
        })
        if (categoryTitle1.length == 0) {
            categoryTitle1 = data.categoryTitle.trim()
        }
        if (categoryDescription1.length == 0) {
            categoryDescription1 = data.categoryDescription.trim()
        }
        pagination_nav_pages1 = data.pagination_nav_pages


    }

    const data = {
        finalDataArray: finalDataArray1,
        categoryTitle: categoryTitle1,
        categoryDescription: categoryDescription1,
        pagination_nav_pages: pagination_nav_pages1
    }

    console.log(`${SortedauthurArray[index].name} : COMPLETED!`);
    fs.writeFileSync(`JsonData/stories/aurthors/${SortedauthurArray[index].href}.json`, JSON.stringify(data));


}
















