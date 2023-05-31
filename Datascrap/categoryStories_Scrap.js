import cheerio from 'cheerio';
import extractUrls from "extract-urls";
import fetchdata from 'node-fetch';
import fs from 'fs'





const categories = [

  {
    category_title: 'Aunty Sex Story',
    href: 'aunty-sex'
  },

  {
    category_title: 'Bhabhi Sex',
    href: 'bhabhi-sex'
  },
  {
    category_title: 'Desi Kahani',
    href: 'desi-kahani'
  },

  {
    category_title: 'Family Sex Stories',
    href: 'family-sex-stories'
  },
  {
    category_title: 'First Time Sex',
    href: 'first-time-sex'
  },
  {
    category_title: 'Gay Sex Stories In Hindi',
    href: 'gay-sex-story-hindi'
  },
  {
    category_title: 'Group Sex Stories',
    href: 'group-sex-stories'
  },
  {
    category_title: 'Indian Sex Stories',
    href: 'indian-sex-stories'
  },
  {
    category_title: 'Sali Sex',
    href: 'sali-sex'
  },
  {
    category_title: 'Teacher Sex',
    href: 'teacher-sex'
  },
  {
    category_title: 'Teenage Girl',
    href: 'teenage-girl'
  },
  {
    category_title: 'XXX Kahani',
    href: 'xxx-kahani'
  },
  {
    category_title: 'अन्तर्वासना',
    href: 'antarvasna'
  },
  {
    category_title: 'हिंदी सेक्स स्टोरीज',
    href: 'hindi-sex-stories'
  },

]





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



for (let index = 0; index < categories.length; index++) {

  // var dir = `./JsonData/stories/category/${categories[index].href}`;

  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  // }

  var finalDataArray1 = []
  var categoryTitle1 = ''
  var categoryDescription1 = ''
  var pagination_nav_pages1 = ["1"]
  var lastPage = ''



  for (let page = 1; page < 200; page++) {
    const data = await freeSexkahani(`https://www.freesexkahani.com/category/${categories[index].href}/page/${page}`)

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
    lastPage = page.toString()
    console.log(`Page ${page} :  COMPLETED!`);
  }
  pagination_nav_pages1.push(lastPage)

  const data = {
    finalDataArray: finalDataArray1,
    categoryTitle: categoryTitle1,
    categoryDescription: categoryDescription1,
    pagination_nav_pages: pagination_nav_pages1
  }
  console.log(`${categories[index].category_title} :  COMPLETED!`);
  fs.writeFileSync(`JsonData/stories/category/${categories[index].href}.json`, JSON.stringify(data));


}



