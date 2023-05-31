import cheerio from 'cheerio';
import fetchdata from 'node-fetch';
import fs from 'fs'





var story_details = {}

export const storyPage_Scrap = async (url) => {



    var Title = ''
    var author = {}
    var date = ''
    var views = ''
    var description = []
    var audiolink = ''
    var storiesLink_insideParagrapgh = []
    var relatedStoriesLinks = []
    var category = {}
    var tagsArray = []


    const response = await fetchdata(url)
    const body = await response.text();
    const $ = cheerio.load(body)





    $('.entry-title').each((i, el) => {

        const data = $(el).text()
        Title = data

    })
    //Author name and link

    $('.author-name').each((i, el) => {
        const authorName = $(el).text()

        $('.url.fn.n').each((i, el) => {
            const authorHref = $(el).attr('href')
            author = { name: authorName, href: authorHref }
        })

    })






    $('.posted-on time').each((i, el) => {

        const data = $(el).text()
        date = data

    })


    $('.post-views-eye').each((i, el) => {

        const data = $(el).text()
        views = data
    })

    $('.entry-content p').each((i, el) => {
        const data = $(el).text()
        description.push(data)

    })

    $('.entry-content p a').each((i, el) => {
        const href = $(el).attr('href')
        const data = $(el).text()
        if (!data.includes('protected'))
            storiesLink_insideParagrapgh.push({
                title: data,
                href: href
            })
    })

    $('.prev a').each((i, el) => {
        const href = $(el).attr('href')
        const data = $(el).text()
        if (!data.includes('protected'))
            storiesLink_insideParagrapgh.push({
                title: data,
                href: href
            })
    })
    $('.next a').each((i, el) => {
        const href = $(el).attr('href')
        const data = $(el).text()
        if (!data.includes('protected'))
            storiesLink_insideParagrapgh.push({
                title: data,
                href: href
            })
    })
    $('.cat-links a').each((i, el) => {
        const href = $(el).attr('href')
        const data = $(el).text()
        if (!data.includes('protected'))
            category = {
                title: data,
                href: href
            }
    })
    $('ol li a').each((i, el) => {
        const href = $(el).attr('href')
        const data = $(el).text()
        relatedStoriesLinks.push({
            title: data,
            href: href
        })
    })

    $('.tags-links').each((i, el) => {

        const select = cheerio.load(el)
        select('a').each((i, el) => {
            const data = $(el).text()
            tagsArray.push(data)
        })

    })

    $('.wp-audio-shortcode source').each((i, el) => {
        const data = $(el).attr('src')
        audiolink = data

    })


    return story_details = {
        Title: Title,
        author: author,
        date: date,
        views: views,
        description: description,
        audiolink: audiolink != null ? audiolink : '',
        storiesLink_insideParagrapgh: storiesLink_insideParagrapgh,
        category: category,
        tagsArray: tagsArray,
        relatedStoriesLinks: relatedStoriesLinks
    }

}


let rawdata = fs.readFileSync(`./JsonData/stories/data.json`);
let parsedData = JSON.parse(rawdata)

for (let index = 0; index < parsedData.length; index++) {

    const rough = parsedData[index].substring(parsedData[index].indexOf('.com/') + 5, parsedData[index].length - 1)
    const story_Category = rough.substring(0, rough.indexOf('/'))
    const story = rough.substring(rough.indexOf('/') + 1, rough.length)

    var dir = `./JsonData/stories/allStories_Paragrapg/${story}.json`;

    if (!fs.existsSync(dir)) {
        console.log(story,index);
        await scrape(`https://www.freesexkahani.com/${story_Category}/${story}/`)
        console.log(`${story} COMPLETED!   Category:   ${story_Category}`);
        fs.writeFileSync(`JsonData/stories/allStories_Paragrapg/${story}.json`, JSON.stringify(story_details));
        story_details = {}
    }


}





