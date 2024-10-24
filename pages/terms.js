import React, { useContext } from 'react';
import Link from 'next/link';
import videosContext from '../context/videos/videosContext';

const TermsAndConditions = () => {

  const { showFeedBackFrom, setshowFeedBackFrom } = useContext(videosContext);

  return (

    <section className="py-8 px-4 max-w-3xl mx-auto">
      <div className="static-page__title text-3xl font-bold mb-6">Terms &amp; Conditions</div>
      <div className="static-page__content space-y-6">
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          These Terms and Conditions constitute a binding agreement between you and the operators of this{' '}
          <Link legacyBehavior href="/">
            <a className="text-red-500 hover:underline">Website</a>
          </Link> (hereinafter `&quot;`Website`&quot;`, “We” or “Us”)
          regarding your use of The Website and all other services provided by The Website.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Please read the Terms &amp; Conditions carefully. Prior to accessing or using the Website, you must agree to
          ALL of the conditions in these Terms &amp; Conditions and agree to be bound by the Terms &amp; Conditions. If
          you do not agree to any provision of the Terms &amp; Conditions, you should not use the Service.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Terms may be revised from time to time without notice to you other than appearing on the Service. It is
          your responsibility to regularly check the Service and to review the Terms. Your continued use of the Service
          constitutes your agreement to all revisions to the Terms.
        </p>
        <h2 className="text-2xl font-semibold mt-8">1. Age of Majority</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You represent and warrant you are at least 18 or 21 years of age, depending on the age of majority in your
          jurisdiction, and that you have the legal capacity to enter into this Agreement. If you are not at least 18 or
          21 years of age, depending on the age of majority in your jurisdiction, you must exit the Website immediately
          and may not use or access the Website or print or download any Materials from them. You agree not to bypass any
          security and/or access feature on this Website. Additionally, the Website does not assume any responsibility or
          liability for any misrepresentations regarding a user`&apos;`s age.
        </p>
        <h2 className="text-2xl font-semibold mt-8">2. Provision and Modification of the Service</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You may, in accordance with the Terms, view content provided through the Service and, to the extent permitted by
          the Website, download content or portions of content provided by the Service, to a single personal computer or
          other storage device. You may not otherwise copy, distribute, or perform the content of the Service, or create
          derivative works using that content.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You may, in accordance with the Terms &amp; Conditions, upload content, store uploaded content, and share
          uploaded content through the pertinent features of the Service.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You understand and agree that the Service is provided to you on an AS IS and AS AVAILABLE basis. The Website
          disclaims all responsibility and liability for the availability, timeliness, security or reliability of the
          Service or any feature or software included in the Service. The Website disclaims all responsibility or
          liability for the acts or commissions of third parties whose services, software, content, or advertising may be
          utilized in connection with or provided by the Service, and you agree that The Website will not be liable for
          any such services, software, content, or advertising.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Website reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or
          any part thereof) with or without notice. The Service may be subject to interruptions, caused by the Website or
          others. You agree that the Website will not be liable for any modification, suspension, interruption or
          discontinuance of the Service.
        </p>
        <h2 className="text-2xl font-semibold mt-8">3. Access to, Limited License, and Interference with Website</h2>
        <h3 className="text-xl font-semibold mt-6">A. Access</h3>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          To access the Website or some of the resources it has to offer, you may be asked to provide certain registration
          details or other information. It is a condition of your use of this Website that all information you provide will
          be correct, current, and complete. If the Website believes the information you provide is not correct, current,
          or complete, the Website has the right to refuse you access to the Website or any of its resources, and to
          terminate or suspend your access at any time.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Website provides the Service for the personal, non-commercial use of viewers, visitors, subscribers or
          potential subscribers of the Service. You are granted a personal, non-exclusive, nontransferable license to view,
          on a single computer only, the content of the Service. The Website reserves the right to limit the amount of
          materials viewed. Commercial use of any content of the Service, other than your own commercial use of User
          Content you have uploaded, is strictly prohibited. In addition, except with respect to User Content that you have
          uploaded, you may not:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4 lg:ml-8 text-[15px] lg:text-lg text-gray-600">
          <li>modify any of the materials provided by the Service</li>
          <li>
            copy, reproduce, publically display or perform, distribute, or prepare derivative works from any of the content
            of the Service
          </li>
          <li>
            remove, modify or alter any copyright, trademark, or other attribution or proprietary notice from any of the
            materials used in the Service
          </li>
          <li>
            otherwise transfer any material provided through the Service to any other person or entity. The Website reserves
            the right to terminate this license at any time if you breach or violate any provision of these Terms &amp;
            Conditions, in which case you will be obligated to immediately destroy any materials you have obtained from
            this Website
          </li>
        </ul>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          By submitting, posting, or communicating User Content using the Service, you grant to the Website an irrevocable,
          perpetual, non-exclusive, transferable, fully paid, royalty-free, worldwide license to:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4 lg:ml-8 text-[15px] lg:text-lg text-gray-600">
          <li>
            use, copy, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part) and distribute
            the User Content in or through any medium now known or hereafter invented, for any purpose
          </li>
          <li>to prepare derivative works using the User Content, or to incorporate it into other works, for any purpose</li>
          <li>to grant and authorize sublicenses of any or all of the foregoing rights</li>
        </ul>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Website does not assert any ownership over your User Content; rather, as between the Website and you, subject
          to the rights granted to us in these Terms &amp; Conditions, you retain full ownership of all of your User Content
          and any intellectual property rights or other proprietary rights associated with your User Content.
        </p>
        <h3 className="text-xl font-semibold mt-6">B. Limited License</h3>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Subject to these Terms and Conditions and in consideration of using the Website, the Website hereby grants you a
          limited, non-exclusive, non-transferable personal license to access and use the Website and the Materials
          contained therein. The Website provides the Materials on this Website for the personal, non-commercial use by
          viewers, fans, visitors, subscribers and/or potential subscribers of said Website. Users of this Website are
          granted a single copy license to view Materials (on a single computer only). All Materials on the Website shall be
          for private non-commercial use only, and all other uses are strictly prohibited. Website reserves the right to
          limit the amount of materials viewed. You agree to prevent any unauthorized copying of the Website, or any of the
          Materials contained therein. Any unauthorized use of the Website or any of the Materials contained therein
          terminates this limited license effective immediately. This is a license to use and access the Website for its
          intended purpose and is not a transfer of title. You represent and warrant that you will not allow any minor
          access to this Website and that you will not copy or redistribute any of the content appearing on this Website.
          Website reserves the right to terminate this license at any time if you breach or violate any provision of this
          Agreement, in which case you will be obligated to immediately destroy any information or materials you have
          downloaded, printed or otherwise copied from this Website. Violators of this limited license may be prosecuted to
          the fullest extent under the applicable law.
        </p>
        <h3 className="text-xl font-semibold mt-6">C. Interference</h3>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Except where expressly permitted by law, you may not translate, reverse-engineer, decompile, disassemble or make
          derivative works from our Website`&apos;`s Materials. User hereby agrees not to use any automatic device or manual
          process to monitor or reproduce the Website, and will not use any device, software, computer code, or virus to
          interfere or attempt to disrupt or damage the Website or any communications on it.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Website grants you permission to access and use the Service as set forth in these Terms &amp; Conditions, and
          in exchange you represent, warrant and agree as follows:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4 lg:ml-8 text-[15px] lg:text-lg text-gray-600">
          <li>You will access and use the Service solely for your own personal use;</li>
          <li>You will comply with all applicable laws and regulations in using the Service and any content of the Service;</li>
          <li>
            You will not use the Service in any illegal manner or for any illegal purpose, in any other manner that could
            damage, disable, overburden or impair the Service, or in any manner inconsistent with these Terms &amp;
            Conditions;
          </li>
          <li>You will not use any automated system, software, or device to use the Service or obtain content or information from the Service</li>
          <li>You will not use any automated system, software, or device to generate or send unsolicited communications to, from, or through the Service</li>
          <li>
            You will not collect personally identifiable information, including without limitation account names or e- mail
            addresses, from the Service or, nor use the communication systems provided by the Service for purposes of
            sending any commercial solicitation, except as expressly permitted by these Terms &amp; Conditions
          </li>
          <li>
            You will not upload, post, or otherwise transmit any material that contains software viruses or any other
            computer code designed to interfere with the functionality of the Service or any other computer software or
            hardware or telecommunications equipment
          </li>
          <li>You will not defeat or interfere with any security feature of the Service, or attempt to do so</li>
          <li>You will not alter or modify any content or component of the Service, other than content you have uploaded using the Service</li>
          <li>
            You will not reproduce, duplicate, copy, sell, trade, resell or exploit, for any commercial purpose, any content
            (other than content you have uploaded using the Service) or any component of the Service, or any use of or any
            access to the Service, without the prior written permission of the Website
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8">4. Your Conduct and Your Use of the Service</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Website Service and all of its components are intended only for adults who may legally access and use them.
          The Service provides access to sexually explicit material. In addition, the Service may provide you with the
          ability to communicate with other users of the Service, and to upload, store, and share content.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You are responsible for your own use of this Service. You acknowledge that you are solely responsible for any
          audio, video, music, text, links, or other content that you post, publish, upload, display or communication
          through the Service (collectively `&quot;`User Content`&quot;`), and for the consequences of posting, publishing, uploading or
          displaying any User Content.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You agree that you will not use the Service to post, transmit, or share User Content that you did not create or
          that you do not have permission to use and share through the Service. You affirm that you have all intellectual
          property rights (including without limitation copyright and trademark rights), licenses, and permissions that are
          needed to use and to authorize the Website to use User Content you provide in the manner described in these Terms
          &amp; Conditions. By submitting, uploading or posting User Content, you warrant that it does not infringe any
          intellectual property rights of another person.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You understand it is generally illegal to record or publish any sexually explicit video without the consent of
          all participants to the recording and publication of such material. You also understand that it may be illegal to
          publish any video or audio recording of another person for a commercial purpose without their consent. By
          submitting or posting User Content, you warrant that every person depicted in any sexually explicit material
          contained in the User Content has consented to the recording of that material and its publication in the manner
          contemplated by these Terms &amp; Conditions. Merely publishing or displaying User Content through the Service
          does not necessarily constitute using it for a commercial purpose. Nonetheless, by submitting or posting User
          Content you also warrant that you have obtained any and all permissions, releases, and consents necessary to
          record, publish and display the User Content for a commercial purpose.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You understand that it is illegal to possess or distribute any depiction of a minor engaged in any actual or
          simulated sexually explicit conduct. You agree that you will not use the Service to solicit, post, transmit, or
          share child pornography. The use of the Service to publish or transmit child pornography will not be tolerated.
          If identified, it will be reported to law enforcement authorities, and will result in termination of your
          account. By submitting or posting any User Content containing sexually explicit material, you warrant that you
          have determined, through personal knowledge or the use of appropriate legal forms of identification, that all
          persons depicted in any sexually explicit material are at least 18 or 21 years of age, and have reached the legal
          age determined by the governing law of your country to participate in the recording and publication of sexually
          explicit material.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You agree that you will not use the Service to post, transmit, or share User Content that is defamatory or
          invasive of the privacy of another person, graphically violent, physically threatening, intended for any illegal
          purpose, or otherwise illegal. By submitting or posting User Content, you warrant that it is not defamatory or
          invasive of the privacy of any other person, graphically violent, physically threatening, or otherwise illegal.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You acknowledge that the Website does not promise that any User Content you submit to it or that you communicate
          using the Service will be maintained by the Website. You are solely responsible for creating backup copies of and
          replacing any User Content you submit to the Website or post on the Service, at your own cost and expense. You
          agree that the Website has no responsibility or liability for the deletion of, or the failure to store or to
          transmit, any User Content. The Website retains the right to create limits on use and storage at its sole
          discretion, at any time, with or without notice.
        </p>
        <h2 className="text-2xl font-semibold mt-8">5. Copyright</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Website respects the intellectual property rights of others. We prohibit users from uploading, posting or
          otherwise transmitting materials that violate the intellectual property rights of others. When we receive
          notification of alleged copyright infringement that complies with the Digital Millenium Copyright Act (17 U.S.C.
          § 512, the `&quot;`DMCA`&quot;`), we promptly remove or disable access to the allegedly infringing material. We also terminate
          the accounts of repeat infringers.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          If you are a copyright owner or an agent thereof and you believe that any content of the Service infringes your
          copyrights, you may submit a notice by following the directions on our DMCA Page.
        </p>
        <h2 className="text-2xl font-semibold mt-8">6. Sponsors, Advertisers and Third Parties</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Service may provide links to sponsor, advertiser, or other third party websites that are not owned or
          controlled by the Website. Inclusion of, linking to, or permitting the use or installation of any third party
          Website, applications, software, content or advertising does not imply approval or endorsement thereof by the
          Website. The Website has no control over, and assumes no responsibility for, the content, privacy policies, or
          practices of any third parties. By accessing or using the Service, you agree to release the Website from any and
          all liability arising from your use of any third-party website, content, service, or software accessed through
          the Service.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Your communications or dealings with, or participation in promotions of, sponsors, advertisers, or other third
          parties found through the Service, are solely between you and such third parties. You agree that the Website
          shall not be responsible or liable for any loss or damage of any sort incurred as the result of any dealings with
          such sponsors, third parties or advertisers, or as the result of their presence in the Service.
        </p>
        <h2 className="text-2xl font-semibold mt-8">7. Privacy</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          As a condition of using the Service, you agree to the terms of the most recent version the Website’s Privacy
          Policy that exists at the time of your use. The Privacy Policy may be revised from time to time without notice to
          you other than appearing on the the Website. It is your responsibility to regularly check the Website and to
          review the Privacy Policy. Your continued use of the Service constitutes your agreement to all revisions to the
          Privacy Policy.
        </p>
        <h2 className="text-2xl font-semibold mt-8">8. Termination</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The Website may, in its sole discretion, terminate your access to the Service, delete any content or information
          that you have posted or communicated through the Service, and/or prohibit you from using the Service, at any
          time, with or without notice, and for any reason, including but not limited to violation of these Terms &amp;
          Conditions.
        </p>
        <h2 className="text-2xl font-semibold mt-8">9. Disclaimer of Warranties</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You expressly understand and agree that your use of the service is at your sole risk. the service is provided on
          an `&quot;`as is`&quot;` and `&quot;`as available`&quot;` basis. the Website expressly disclaims all warranties of any kind, whether express
          or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular
          purpose and non-infringement.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          In particular, and without limitation, the Website makes no warranty that:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4 lg:ml-8 text-[15px] lg:text-lg text-gray-600">
          <li>the service will meet your requirements</li>
          <li>the service will be uninterrupted, timely, secure, or error-free</li>
          <li>the results that may be obtained from the use of the service will be accurate or reliable</li>
          <li>the quality of any products, services, information, or other material purchased or obtained by you through the service will meet your expectations</li>
          <li>any errors in the components or contents of the service will be corrected</li>
          <li>or that the service is free of viruses or other harmful components</li>
        </ul>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          No advice or information, oral or written, obtained by you from the Website, shall create any warranty not
          expressly stated in the Terms and Conditions.
        </p>
        <h2 className="text-2xl font-semibold mt-8">10. Limitation of Liability</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You expressly understand and agree that the Website shall not be liable for any direct, indirect, incidental,
          special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill,
          use, data or other intangible losses (even if the Website has been advised of the possibility of such damages),
          resulting from the use of or the inability to use the service.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          In particular, and without limitation, the Website will have no liability for damages arising from:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4 lg:ml-8 text-[15px] lg:text-lg text-gray-600">
          <li>accessing, downloading, or otherwise obtaining any content or component of the service, even if it results in the inadvertent transfer of harmful computer code, such as viruses, malware, or spyware</li>
          <li>unauthorized access to or disclosure or alteration of your postings, transmissions or data</li>
          <li>content or conduct of any third party provided through the service</li>
          <li>or as otherwise provided in the terms and conditions</li>
        </ul>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Under no circumstances will the Website`&apos;`s total liability for any and all claims by you arising out of or related
          to this agreement or the use of the service exceed the greater of the amount paid by you to the Website or $100.
        </p>
        <h2 className="text-2xl font-semibold mt-8">11. Exclusions and Limitations</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability
          for incidental or consequential damages. accordingly, some of the above limitations on liability and damages may
          not apply to you.
        </p>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          The provisions of this agreement that provide for limitations of liability, disclaimers of warranties, or
          exclusion of damages allocate risks between you and the Website. That allocation is reflected in the delivery of
          free content to you by the Website, and is an essential element of the bargain between the parties. Each of these
          provisions is severable and independent of all other provisions of this agreement. The limitations in this
          section will apply notwithstanding the failure of essential purpose of any limited remedy under this agreement.
        </p>
        <h2 className="text-2xl font-semibold mt-8">12. Indemnification</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          You agree to hold harmless and indemnify the Website, and its subsidiaries, affiliates, officers, agents, and
          employees from and against any third-party claim arising from or in any way related to your use of the Service,
          including any liability or expense arising from all claims, losses, damages (actual and consequential), suits,
          judgments, litigation costs and attorneys`&apos;` fees, of every kind and nature. The Website will make reasonable
          efforts to provide you with written notice of any such claim, suit or action, but the failure of the Website to
          provide such notice will not relieve you of these obligations.
        </p>
        <h2 className="text-2xl font-semibold mt-8">13. Contacting the Website</h2>
        <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
          If you have any questions or concerns about the Terms &amp; Conditions or the{' '}
          <Link legacyBehavior href="/">
            <a className="text-red-500 hover:underline">Website</a>
          </Link>, please contact us using our{' '}
          <span onClick={() => { setshowFeedBackFrom(true) }} className="text-red-500 hover:underline text-semibold cursor-pointer">Contact Form</span>
          .
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
