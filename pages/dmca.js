import React, { useContext } from 'react';
import Link from 'next/link';
import videosContext from '../context/videos/videosContext';

const DMCA = () => {

  const { showFeedBackFrom, setshowFeedBackFrom } = useContext(videosContext);


  return (
    <section>
      <div className="static-page__title text-3xl font-semibold mb-6">DMCA / Content Removal</div>
      <div className="static-page__content">
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Pursuant to Title 17, Section 512(c)(2) of the United States Code, if
          you believe that any of your copyrighted material is being infringed
          on the{' '}
          <Link href="/" legacyBehavior>
            <a className="text-red-500 hover:underline">Website</a>
          </Link>
          , we have designated an agent to receive notifications of claimed copyright infringement.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Notifications should be e-mailed to{' '}
          <a href="mailto:ukdevelopers007@gmail.com" className="text-red-500 hover:underline">ukdevelopers007@gmail.com</a> 
          with Subject ‘DMCA’ or use{' '}
          <p onClick={()=>{setshowFeedBackFrom(true)}} className="text-red-500 hover:underline text-semibold cursor-pointer">Contact Form</p>

          to notifications.
        </p>
        <div className="dasdew"></div>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          All notifications not relevant to us or ineffective under the law will
          receive no response or action thereupon. Pursuant to Title 17, Section
          512(c)(3) of the United States Code, an effective notification of
          claimed infringement must be a written communication to our agent that
          includes substantially the following:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4 lg:ml-8 text-[15px] lg:text-lg text-gray-600">
          <li>
            Identification of the copyrighted work that is believed to be
            infringed. Please describe the work and, where possible, include a
            copy or the location (e.g., a URL) of an authorized version of the
            work.
          </li>
          <li>
            Identification of the material that is believed to be infringing and
            its location. Please describe the material and provide a URL or any
            other pertinent information that will allow us to locate the
            material on the Website.
          </li>
          <li>
            Information that will allow us to contact you, including your
            address, telephone number and, if available, your e-mail address.
          </li>
          <li>
            A statement that you have a good faith belief that the use of the
            material complained of is not authorized by you, your agent, or the
            law.
          </li>
          <li>
            A statement that the information in the notification is accurate and
            that under penalty of perjury that you are the owner or are
            authorized to act on behalf of the owner of the work that is
            allegedly infringed.
          </li>
          <li>
            A physical or electronic signature from the copyright holder or an
            authorized representative.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DMCA;
