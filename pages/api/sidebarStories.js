// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cheerio from 'cheerio';
import fetchdata from 'node-fetch';


export default async function handler(req, res) {



    const url = 'https://www.freesexkahani.com/page/1/'



    var finalDataArray = []
    var finalDataArray2 = []



    //This is for recent stories
    var TitleArray = []
    var hrefArray = []

    //This is for stories by date
    var TitleArray2 = []
    var hrefArray2 = []


    const response = await fetchdata(url)
    const body = await response.text();
    const $ = cheerio.load(body)





    $('#recent-posts-2 ul li a').each((i, el) => {

        const title = $(el).text()
        const href = $(el).attr("href")
        TitleArray.push(title)
        hrefArray.push(href)

    })

    $('#archives-3 ul li a').each((i, el) => {

        const title = $(el).text()
        const href = $(el).attr("href")
        TitleArray2.push(title)
        hrefArray2.push(href)

    })



    for (let index = 0; index < TitleArray.length; index++) {
        finalDataArray.push({
            name: TitleArray[index],
            href: hrefArray[index],

        })
    }

    for (let index = 0; index < TitleArray2.length; index++) {
        finalDataArray2.push({
            name: TitleArray2[index],
            href: hrefArray2[index],

        })
    }








    res.status(200).json({
        sidebarStoriesData:finalDataArray,
        sidebarStoriesBydate:finalDataArray2,
    })

}
