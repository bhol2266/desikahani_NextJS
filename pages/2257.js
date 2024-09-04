import React, { useContext } from 'react';
import Link from 'next/link';
import videosContext from '../context/videos/videosContext';


const USC2257Statement = () => {
  const { showFeedBackFrom, setshowFeedBackFrom } = useContext(videosContext);

  return (
    <section>
      <div className="static-page__title text-3xl font-semibold mb-6">18 USC 2257 Statement</div>

      <div className="static-page__content">
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          All models, actors, actresses, and other persons that appear in any
          visual depiction of actual sexually explicit conduct appearing or
          otherwise contained in this{' '}
          <Link href="/" legacyBehavior>
            <a className="hover:underline text-red-500">Website</a>
          </Link>{' '}
          were over the age of eighteen years at the time of the creation of such depictions.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          All other visual depictions displayed on this Website are exempt from
          the provision of 18 USC 2257 Statement and 28 C.F.R. 75 because said
          visual depictions do not consist of depictions of conduct as
          specifically listed in 18 USC 2257 Statement (2)(A) through (D), but
          are merely depictions of non-sexually explicit nudity, or are
          depictions of simulated sexual conduct, or are otherwise exempt
          because the visual depictions were created prior to July 3, 1995.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          With respect to all visual depictions displayed on this website,
          whether of actual sexually explicit conduct, simulated sexual content
          or otherwise, all persons in said visual depictions were at least 18
          years of age when said visual depictions were created.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The owners and operators of this Website are not the primary producer
          (as that term is defined in 18 USC 2257 Statement) of any of the
          visual content contained in the Website.
        </p>
        <br />
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Please, use{' '}
          <span onClick={() => { setshowFeedBackFrom(true) }} className="text-red-500 hover:underline text-semibold cursor-pointer">Contact Form</span>
          {' '}
          to report abuse about inappropriate content.
        </p>
        <br />
        <br />
      </div>
    </section>
  );
};

export default USC2257Statement;
