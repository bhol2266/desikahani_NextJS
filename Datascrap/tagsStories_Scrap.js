import cheerio from 'cheerio';
import extractUrls from "extract-urls";
import fetchdata from 'node-fetch';
import fs from 'fs'


//First Update the homepagevideos json than read all the tag names and than sort the tag name to remove duplicacy than save the tags in json file

var tagsArray = []
var SortedtagsArray = []

for (let index = 1; index < 300; index++) {
    let rawdata = fs.readFileSync(`./JsonData/stories/homepage/${index}.json`);
    let parsedData = JSON.parse(rawdata)

    const { finalDataArray } = parsedData
    console.log(finalDataArray.length);
    finalDataArray.forEach(item => {

        try {
            item.tags.forEach(tag => {
                tagsArray.push({ name: tag.name, href: tag.href.substring(tag.href.indexOf('tag/') + 4, tag.href.length - 1) })

            })
        } catch (error) {

        }



    })
}




tagsArray.forEach((item, index) => {
    let itemPresent = false
    SortedtagsArray.forEach((item1, index) => {
        if (item.name === item1.name) {
            itemPresent = true
        }
    })
    if (!itemPresent) {
        SortedtagsArray.push(item)
    }

})

console.log(SortedtagsArray.length);
fs.writeFileSync(`./JsonData/stories/Tags.json`, JSON.stringify(SortedtagsArray));
















