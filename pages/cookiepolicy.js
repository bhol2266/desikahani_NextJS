import React from 'react';
import Link from 'next/link';

const CookiesPolicy = () => {
    return (
        <section className="py-8 px-4 max-w-3xl mx-auto">
            <div className="static-page__title text-3xl font-bold mb-6">Cookies Policy</div>
            <div className="static-page__content space-y-6">
                <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
                    Cookies are text files that are placed by the browser in the memory of a user’s device when our website is visited. Our website uses session cookies and persistent cookies:
                </p>
                <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
                    Session cookies expire at the end of a browser session. They only enable us to collect and connect the user’s actions during the particular browser session and are deleted when the browser is closed or the user logs off.
                </p>
                <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
                    Persistent cookies survive a browser session and are stored for a predefined period of time. We are using persistent cookies with the following information and for the following purposes:
                </p>
                <ul className="list-disc list-inside mb-4 ml-4 lg:ml-8 text-[15px] lg:text-lg text-gray-600">
                    <li>Identifying a registered user;</li>
                    <li>Keeping some search preferences;</li>
                    <li>Keeping the likes of the unregistered users;</li>
                    <li>Saving the video player’s preferences;</li>
                    <li>Displaying the advertisements;</li>
                    <li>Keeping statistics regarding the speed loading of the pages.</li>
                </ul>
                <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
                    The user can disable the cookie function in their browser options. If cookies are disabled, the user might not be able to use all the functions and services of the Website.
                </p>
                <p className="mb-4 text-[15px] lg:text-lg text-gray-600">
                    Some content or applications, including advertisements, on the Website are served by third parties, including analytics or advertising companies, ad network and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our{' '}
                    <Link href="/" legacyBehavior>
                        <a className="text-red-500 hover:underline">Website</a>
                    </Link>{' '}
                    over which we have no control.
                </p>
            </div>
        </section>
    );
};

export default CookiesPolicy;
