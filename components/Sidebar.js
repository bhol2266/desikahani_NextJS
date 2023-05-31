import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import videosContext from '../context/videos/videosContext'
import axios from 'axios'


var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function Sidebar() {

  const [lateststories, setlateststories] = useState([]);
  const [storiesByDate, setstoriesByDate] = useState([]);
  const router = useRouter()


  async function latestStoriesFetch() {

    let localData = JSON.parse(localStorage.getItem("lateststories"));

    if (localData != null) {
      setlateststories(localData);
      return
    }
    axios
      .get(`${process.env.BACKEND_URL}latestStories`)
      .then(data => {
        setlateststories(data.data.data.finalDataArray);
        localStorage.setItem("lateststories", JSON.stringify(data.data.data.finalDataArray));
      })
      .catch(error => console.log("error is", error));



  }
  async function fetch() {

    var date = new Date();
    var currentMonth = date.getMonth() + 1
    var currentYear = date.getFullYear()
    var array = []
    var currentMonthString = ''

    for (let index = 1; index <= 15; index++) {
      if (currentMonth < 10) {
        currentMonthString = "0" + currentMonth.toString()
      } else {
        currentMonthString = currentMonth.toString()
      }

      if (index === 1) {
        array.push({ month: monthArray[currentMonth - 1], year: currentYear, href: currentYear.toString() + "-" + currentMonthString })
      } else {
        array.push({ month: monthArray[currentMonth - 1], year: currentYear, href: currentYear.toString() + "-" + currentMonthString })

      }

      if (currentMonth === 1) {
        currentMonth = 12
        currentYear = currentYear - 1
      } else {
        currentMonth = currentMonth - 1
      }
    }
    setstoriesByDate([...storiesByDate, ...array])
  }

  useEffect(() => {

    if (storiesByDate.length === 0) {
      fetch()
    }
    if (lateststories.length === 0) {
      latestStoriesFetch()
    }
  }, [])


  const categories = [

    {
      category_title: 'Aunty Sex Story',
      href: 'aunty-sex',
      description: `आंटी से सेक्स, चाची, मामी, बुआ मौसी की चुदाई कहानियाँ, पड़ोसन, मम्मी की सहेली, चाची की सहेली, दोस्त की मम्मी

        Aunty sex story Hindi me, apne se Badi umar ki aurat ka chodan, Chut Chudai ki Kahani
        
        Aunty sex stories about sex relation with neighbor aunties, elderly ladies`
    },


    {
      category_title: 'Bhabhi Sex',
      href: 'bhabhi-sex',
      description: `भाभी से सेक्स, चुदाई करने का अपना ही मजा है.

        Bhabhi chudai ki kahani, bhabi ki chut ki cudai ki kahani
        
        सारे लड़के  सगी भाभी, चचेरी ममेरी फुफेरी भाभी या पड़ोस की भाभी की चुत के सपने  देखते हैं. बहुत से मर्द खुशकिस्मत होते हैं जिन्हें भाभी की चुत की चुदाई करने का मौक़ा मिल जाता है.
        
        next door bhabhi ki chudai free Hindi sex story, Sex with Sis in law`
    },
    {
      category_title: 'Desi Kahani',
      href: 'desi-kahani',
      description: `हिंदी में देसी कहानी के मजे लें. ये सेक्सी कहानियाँ आप के लंड को खड़ा कर देंगी. लंड चूसने, चूत चोदने और गांड मारने के किस्से यहाँ विस्तार से लिखे गए हैं. खेतों में चूत चुदाई का मजा लें.

        Cock sucking, pussy fucking and anal sex action at its best in desi kahani with real Indian description and sex action described in a way that it will arouse you to fullest.
        
        Desi sex stories padhen jisme lund ko chusne ki, chut chudai ki aur gaand sex ki aisi baatein likhi he jis se aap ka lund khada ho jaye.`
    },

    {
      category_title: 'Family Sex Stories',
      href: 'family-sex-stories',
      description: `Hindi me Family Sex Stories ka maja len. Jija sali, devar bhabhi, bua, mausi, step bhai behan, step father daughter, step mother son sex kahaniya.
        यहाँ आपको रिश्तों में चुदाई की हिंदी कहानी बिल्कुल मुफ्त मिलेंगी.`
    },
    {
      category_title: 'First Time Sex',
      href: 'first-time-sex',
      description: `फर्स्ट टाइम सेक्स कुवारी लड़की या लड़के की पहली बार चुदाई की फ्री हिंदी कहानी
        first time sex story by virgin girl or boy.`
    },
    {
      category_title: 'Gay Sex Stories In Hindi',
      href: 'gay-sex-story-hindi',
      description: `गे सेक्स स्टोरीज हिंदी में, लड़कों, गांडू की गांड चुदाई की कहानी का मजा यहाँ लें.
        Homosexual Gay sex stories in Hindi, Gandu Chudai story.`
    },
    {
      category_title: 'Group Sex Stories',
      href: 'group-sex-stories',
      description: `ग्रुप सेक्स की हिंदी कहानियाँ जिनमें तीन चार या ज्यादा लड़के लड़कियाँ मिल कर चुदाई करते हैं.
        Group sex stories with threesome, foursome and orgies in Hindi for free.`
    },
    {
      category_title: 'Indian Sex Stories',
      href: 'indian-sex-stories',
      description: `sadfsadfsadf`
    },
    {
      category_title: 'Sali Sex',
      href: 'sali-sex',
      description: `जीजा साली सेक्स की छेड़छाड़ व चूत चुदाई की हिन्दी कहानियाँ
        Jija Sali ki chut Chudai Hindi Sex story, Sali Ki choot Chudai Ki kahani
        Incest Sex Stories sis in law and brother in law`
    },
    {
      category_title: 'Teacher Sex',
      href: 'teacher-sex',
      description: `टीचर के साथ सेक्स की कहानी, स्कूल कॉलेज या ट्यूशन टीचर के साथ चुदाई स्टोरी आप यहाँ पढ़ सकते हैं.
        school, college or tution teacher ki chudai ki kahani
        Sex With teacher`
    },
    {
      category_title: 'Teenage Girl',
      href: 'teenage-girl',
      description: `19 साल की टीनएज लड़की की चुदाई की कहानी हिंदी में पढ़ कर मजा लें. कमसिन जवान लड़की की चूत में लंड कैसे घुसा? आप पढ़ना चाहेंगे ना?
        Teenage girl free sex story in Hindi for you only.
        अगर आप टीनेज़ गर्ल की सेक्स क्लिप देखना चाहते हैं तो यहाँ क्लिक करें.`
    },
    {
      category_title: 'XXX Kahani',
      href: 'xxx-kahani',
      description: `XXX kahani Hindi mein, Desi Bhabhi, young Indian girl wild Sex story.
        क्सक्सक्स इन्डियन चुदाई कहानी, गर्म जवान लड़की, आंटी के साथ सेक्स स्टोरी हिंदी में पढ़ें और मजा लें.`
    },
    {
      category_title: 'अन्तर्वासना',
      href: 'antarvasna',
      description: `असली अन्तर्वासना कामुकता से भरी हिंदी सेक्स कहानियाँ,
        Original Antarvasna Hindi sex stories for free
        यह अन्तर्वासना सेक्स स्टोरीज की नयी साईट है. अन्तर्वासना के खुलने में परेशानी के कारण इस नयी साईट को शुरू किया गया है.`
    },
    {
      category_title: 'हिंदी सेक्स स्टोरीज',
      href: 'hindi-sex-stories',
      description: `Hindi Sex Stories of Desi Indian girl sex, bhabhi aunty Chut Chudai
        हिंदी सेक्स स्टोरी भाभी साली चाची की चूत चुदाई की, गांड चुदाई की कहानी
        इस साईट पर अन्तर्वासना की सभी हिंदी कहानियाँ एकदम मुफ्त में पढ़ें.`
    },

  ]


  const onClickHandler = (href, title) => {

    router.push({
      pathname: `/story/${title}`,
      query: { link: href }
    })
  }


  return (

    <div className='mx-6 pt-1 hidden md:flex md:flex-col'>

      <div   >
        <p className="w-56 text-[22px]  border-gray-400  rounded-md text-black font-bold  p-1 pl-4 pr-2 cursor-pointer bg-white opacity-75">श्रेणियां
        </p>

        {categories.map(category => {
          return (
            <Link key={category.category_title} href={`/category/${category.href}`}>
              <p className="w-56 font-inter shadow-lg my-2 py-2 font-semibold text-md hover:bg-orange-200 rounded-md text-orange-900  p-1 pl-4 pr-2 cursor-pointer bg-white ">{category.category_title}</p>
            </Link>
          )
        })}

        {categories.map(category => {
          return (
            <Link key={category.category_title} href={`/category/${category.href}`}>

            </Link>
          )
        })}



      </div>

      <div className=' pt-1 hidden md:flex md:flex-col my-5' >
        <p className="w-56 font-hindi  text-lg   text-[24px]  border-gray-400  rounded-md text-black font-bold  p-1 pl-4 pr-2 cursor-pointer bg-white opacity-75">हाल के पोस्ट
        </p>


        {lateststories.map(story => {

          const rough = story.href.substring(story.href.indexOf('.com/') + 5, story.href.length - 1)
          const category = rough.substring(0, rough.indexOf('/'))
          const title = rough.substring(rough.indexOf('/') + 1, rough.length)

          return (
            <Link key={story.href} href={`/${category}/${title}`}>
              <p className="font-hindi w-56 font-semibold shadow-lg my-2 py-2 text-md lg:text-lg hover:bg-orange-200 rounded-md text-orange-800 tracking-wider  p-1 pl-4 pr-2 cursor-pointer bg-white ">{story.Title}</p>
            </Link>
          )
        })}

      </div>

      <div   >
        <p className="w-56  text-lg  border-gray-400  rounded-md text-black font-bold  p-1 pl-4 pr-2 cursor-pointer  opacity-75">पुरालेख
        </p>



        {storiesByDate.map(story => {
          return (
            <Link key={story.href} href={`/date/${story.href}`}>
              <p className="w-56 font-semibold text-md shadow-lg my-1  hover:bg-orange-200 rounded-md text-orange-900  p-1 pl-4 pr-2 cursor-pointer  opacity-75">{story.month + " " + story.year}</p>
            </Link>
          )
        })}

      </div>
    </div>
  )
}

export default Sidebar