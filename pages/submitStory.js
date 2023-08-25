import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

 
const categories = [
    {
        category_title: 'Desi Kahani',
        href: 'desi-kahani',
        description: `हिंदी में देसी कहानी के मजे लें. ये सेक्सी कहानियाँ आप के लंड को खड़ा कर देंगी. लंड चूसने, चूत चोदने और गांड मारने के किस्से यहाँ विस्तार से लिखे गए हैं. खेतों में चूत चुदाई का मजा लें.

        Cock sucking, pussy fucking and anal sex action at its best in desi kahani with real Indian description and sex action described in a way that it will arouse you to fullest.
        
        Desi sex stories padhen jisme lund ko chusne ki, chut chudai ki aur gaand sex ki aisi baatein likhi he jis se aap ka lund khada ho jaye.`
    },

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


const SubmitStory = () => {

    const [message, setmessage] = useState("");
    const [title, settitle] = useState("");
    const [shortDescription, setshortDescription] = useState("");
    const [suggestedCategory, setsuggestedCategory] = useState("");
    const [contentt, setcontent] = useState("");
    const [email, setemail] = useState("");
    const [writerName, setwriterName] = useState("");
    const [loading, setloading] = useState(false);



    const pulishStory = async (e) => {
        e.preventDefault()

        const data = {
            Title: title,
            shortDescription: shortDescription,
            suggestedCategory: suggestedCategory,
            content: contentt,
            author: writerName,
            email: email,
        }

        const rawResponse = await fetch(`${process.env.BACKEND_URL}publishStory`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const content = await rawResponse.json();

        if (content.success) {
            if (content.message === "Story with same title exists") {
                alert("इस शीर्षक वाली कहानी पहले से मौजूद है")
            } else {
                alert("आपकी कहानी प्राप्त हो चुकी है \n ये कहानी चेक होने के बाद प्रकाशित हो जाएगा  \nधन्यवाद!")
            }
        }


        console.log(content);


    }
    return (

        <div className="p-4 lg:w-3/5">

            <h1 className="font-hindi font-medium text-[25px] lg:text-[30px] my-4">आपकी कहानी भेजिए</h1>

            <h2 className="text-[15px] lg:text-[18px]">प्रिय लेखक</h2>
            <h3 className="text-[15px] lg:text-[18px]">आप अपनी कहानी लिखना शुरू करने से पहले कृपया इस लेख को पढ़ लें. इससे आपको अपनी कहानी अच्छे से लिखने में मदद मिलेगी।</h3>

            <h3 className="my-2 font-medium text-orange-900 text-[20px] lg:text-[22px]">कामुक कहानी लिखने की कला</h3>

            <h2 className="font-semibold text-[15px] lg:text-[18px]">अब आप इस पेज के नीचे दिए गए फॉर्म का उपयोग करके ही अपनी कहानी भेजें.
                मेल से कहानी मत भेजें.</h2>

            <h3 className="text-[15px] lg:text-[18px] my-3">अगर आप कहानी भेजना चाहते हैं तो निम्न नियमों को एक बार पढ़ लें और इनके अनुसार ही अपनी कहानी भेजें.</h3>


            {/* कहानी भेजने के नियम   */}


            <details>
                <summary className="font-hindi font-medium text-[25px] lg:text-[30px] my-4 underline decoration-[1px]">कहानी भेजने के नियम  </summary>
                <div>


                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">1.  लेखकों को कोई मेहनताना नहीं दिया जाता।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">2.  कहानी देवनागरी लिपि में खुद लिखी हुई (मौलिक) होनी चाहिए, किसी अन्य साईट से कॉपी की हुई कहानी या कहानी का कोई भाग अगर पाया गया तो कहानी रद्द कर दी जायेगी.</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">3. कम से कम 2000 शब्दों की होनी चाहिए। आप अधिकतम 10000 शब्द की कहानी ही भेजें जिसके चार या पाँच भाग बन जाएँ.
                        इससे अधिक बड़ी कहानी अस्वीकार कर दी जायेगी.</h3>
                    <h2 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7"> अगर आपको लगता है कि आपकी कहानी अधिक बड़ी हो जायेगी तो अपनी कहानी की घटनाओं को अलग शीर्षक से नयी कहानी के रूप में भेजें.</h2>
                    <a href='https://wordcounttools.com/' className="text-[15px] font-kalam lg:text-[18px] mt-6 lg:mt-7 text-blue-600 underline"> आपकी कहानी में कितने शब्द हैं, जानने के लिए यहाँ क्लिक करें!</a>


                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">4.  अगर आपकी कहानी अधिक लम्बी है और आप इसे दो या ज्यादा भागों में प्रकाशित करवाना चाहते हैं तो कहानी के सभी भाग इकट्ठे ही भेजें।

                        कहानी </h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">5.  कहानी 18 वर्ष से कम उम्र के पात्र ना हों, कहानी पशु और बल।त्कार पर आधारित ना हो।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">6. कहानी में कोई फोन नम्बर, घर, ऑफिस, बिजनेस, स्कूल, कॉलेज का पता ना हो। कहानी में आप अपना इमेल आईडी दे सकते हैं।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">7. कहानी में किसी भी धर्म के विरुद्ध कोई बात ना हो।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">8. कहानी में किसी प्रकार का यौन आमंत्रण ना हो।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">9. कहानी में सेक्स के बदले में धन के आदान प्रदान जैसी कोई बात ना हो।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">10.  अंग्रेजी शब्दों का प्रयोग कम से कम हो।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">11. पैराग्राफ का साइज़ छोटा हो।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">12. विराम चिह्नों का प्रयोग जरूरत के हिसाब से होना चाहिए।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">13. कहानी अपने आप में पूरी होनी चाहिए, अधूरी कहानी स्वीकार नहीं की जायेगी।</h3>
                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">14. कहानी का अच्छा सा शीर्षक लिखें। शीर्षक में ‘मेरी कहानी’ हिंदी चुदाई कहानी’ antarvasana story, my sex story, antervasna kahani आदि ना लिखें.</h3>


                    <h3 className="text-[15px] lg:text-[18px] mt-6 lg:mt-7">
                        <strong>  विशेष सूचना: </strong>   जब आप फ्री सेक्स कहानी पर अपनी कहानी भेजते हैं तो उस कहानी पर सभी अधिकार, कॉपीराइट सहित आप फ्री सेक्स कहानी को सौंप देते हैं। फ्री सेक्स कहानी को भेजी गयी, फ्री सेक्स कहानी पर प्रकाशित सभी रचनाओं का स्वामित्व फ्री सेक्स कहानी के स्वामी का है। ये कहानियाँ किसी भी रूप में, किसी फेर बदल के साथ, किसी भी प्रकार से जैसे, किसी अन्य साईट पर, किसी ऐप में, किसी ई-बुक में, या किसी छपी हुई पुस्तक, पन्ने के रूप में या किसी मूवी, फिल्म, विज्ञापन, डाक्यूमेंटरी में फ्री सेक्स कहानी के स्वामी की अनुमति के बिना पुनः प्रकाशित या प्रसारित नहीं की जा सकती। अनुमति के बिना प्रकाशित या किसी भी रूप में इस्तेमाल की गयी रचना पाए जाने पर समुचित कार्यवाही जैसे DMCA, वेब होस्ट, रजिस्ट्रार को रिपोर्ट की जायेगी।</h3>


                </div>
            </details>




            <form autoComplete="on" onSubmit={pulishStory}>
                <div className=" pt-4 font-inter ">

                    <label className=" text-[#323232] pb-[1px] block ml-1">Title:</label>
                    <input onChange={e => { settitle(e.target.value) }} required type="text" id='email' name='title' className=" rounded px-3 py-2  mb-3 text-sm w-full outline-none  text-[#323232] placeholder:text-gray-400   border-[1px] border-gray-400" placeholder='title' />

                    <label className=" text-[#323232] pb-[1px] block ml-1">Short Description:</label>
                    <textarea minLength={80} rows={4} onChange={e => { setshortDescription(e.target.value) }} required type="text" id='Description' name='Description' className=" rounded px-3 py-2  mb-3 text-sm w-full outline-none  text-[#323232] placeholder:text-gray-400   border-[1px] border-gray-400" placeholder='Enter title' />


                    <label className=" text-[#323232] pb-[1px] block ml-1 ">Suggested Category:</label>
                    <select onChange={e => { setsuggestedCategory(e.target.value) }} className="outline-none rounded px-3 py-2 mt-1 text-sm   text-[#323232] placeholder:text-gray-400   border-[1px] border-gray-400 w-full mb-3" id="Category">
                        {/* <option selected>Select Category</option> */}
                        {categories.map(item => {
                            return (
                                <option key={item.category_title} >{item.category_title}</option>

                            )
                        })}

                    </select>


                    <label className=" text-[#323232] pb-[1px] block ml-1">Content:</label>
                    <textarea minLength={2000} maxLength={10000} rows={12} onChange={e => { setcontent(e.target.value) }} required type="text" id='Content' name='text' className=" rounded px-3 py-2  mb-3 text-sm w-full outline-none  text-[#323232] placeholder:text-gray-400   border-[1px] border-gray-400" placeholder='Enter content' />

                    <label className=" text-[#323232] pb-[1px] block ml-1">Writer name:</label>
                    <input onChange={e => { setwriterName(e.target.value) }} required type="text" id='Writer' name='Writer' className=" rounded px-3 py-2  mb-3 text-sm w-full outline-none  text-[#323232] placeholder:text-gray-400   border-[1px] border-gray-400" placeholder='Enter Writer name' />

                    <label className=" text-[#323232] pb-[1px] block ml-1">Email:</label>
                    <input required onChange={e => { setemail(e.target.value) }} type="email" id='email' name='email' className=" rounded px-3 py-2  mb-3 text-sm w-full outline-none  text-[#323232] placeholder:text-gray-400   border-[1px] border-gray-400" placeholder='Enter Email' />

                    <div className='h-[40px] mt-6'>
                        {!loading &&
                            <button type="submit" className="transition duration-200 bg-orange-500 hover:bg-orange-700  text-white w-full py-2.5 rounded text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                {!loading && <span className="inline-block mr-2">Publish</span>}
                                {!loading && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>}


                            </button>
                        }

                        {loading &&
                            <div className='block mx-auto w-fit '>
                                <ClipLoader color={"#323232"} size={35} />

                            </div>

                        }
                    </div>

                    <div className='h-[50px]'>
                        <p className={` rounded text-center  text-md text-red-500 font-semobold mt-3 px-1 py-1 ${message.length > 0 ? "visible" : "invisible"}`}>{message}</p>
                    </div>


                </div>

            </form>



        </div>

    )
};
export default SubmitStory;
