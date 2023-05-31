import cheerio from 'cheerio';
import extractUrls from "extract-urls";
import fetchdata from 'node-fetch';
import fs from 'fs'

// This code extracts hrefs from all json files for data scraping of story paragraph page
//Run this code after running homepageStories_scrap.js


var allHrefsArray = []


//Reading homepage stories json file that contains all the stories of entire freesexkahani website
for (let i = 1; i < 500; i++) {
  try {
    let rawdata = fs.readFileSync(`./JsonData/stories/homepage/${i}.json`);
    let parsedData = JSON.parse(rawdata)

    for (let xxxx = 0; xxxx < parsedData.finalDataArray.length; xxxx++) {
      allHrefsArray.push(parsedData.finalDataArray[xxxx].href)

    }
  } catch (error) {
    break
  }
}



let rawdata = fs.readFileSync(`./JsonData/stories/data.json`);
let parsedData = JSON.parse(rawdata)


let uniquearray = [...new Set([...allHrefsArray, ...parsedData])];
console.log(uniquearray.length);


fs.writeFileSync(`JsonData/stories/data.json`, JSON.stringify(uniquearray));






