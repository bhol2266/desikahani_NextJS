import cheerio from 'cheerio';
import { promises as fs } from 'fs';
import fetchdata from 'node-fetch';

export default async function handler(req, res) {

    const { story, story_Category } = req.body.data
    var story_details = {}

    const scrape = async (url) => {

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


    try {
        let rawdata = fs.readFileSync(`./JsonData/stories/allStories_Paragrapg/${story}.json`);
        story_details = JSON.parse(rawdata)
    } catch (error) {
        await scrape(`https://www.freesexkahani.com/${story_Category}/${story}/`)
        fs.writeFileSync(`JsonData/stories/allStories_Paragrapg/${story}.json`, JSON.stringify(story_details));

        console.log("Story Added", story);

    }


    res.status(200).json(story_details)


}
