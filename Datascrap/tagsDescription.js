import cheerio from 'cheerio';
import extractUrls from "extract-urls";
import fetchdata from 'node-fetch';
import fs from 'fs'



let finalArray = []


const freeSexkahani = async (url) => {

    var description = ''

    const response = await fetchdata(url)
    const body = await response.text();
    const $ = cheerio.load(body)


    $('.taxonomy-description p').each((i, el) => {
        description = $(el).text()
    })




    return {
        description: description,

    }

}




let rawdata = fs.readFileSync(`./JsonData/stories/Tags.json`);
let parsedData = JSON.parse(rawdata)


for (let index = 0; index < parsedData.length; index++) {
    const { description } = await freeSexkahani(`https://www.freesexkahani.com/tag/${parsedData[index].href}/`)

    finalArray.push({
        tag: parsedData[index].name,
        href: parsedData[index].href,
        description: description,
    })

    console.log(`Tag ${parsedData[index].href} :  COMPLETED!`);
    console.log(finalArray);
}



fs.writeFileSync(`JsonData/stories/TagsDetail.json`, JSON.stringify(finalArray));








