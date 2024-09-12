importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

// Replace these with your own Firebase config keys...
const firebaseConfig = {
    apiKey: "AIzaSyCqjCkKYZSOnpXpWxtgp1yxEIv8WxkaZTo",
    authDomain: "desikahaninextjs-ffab3.firebaseapp.com",
    projectId: "desikahaninextjs-ffab3",
    storageBucket: "desikahaninextjs-ffab3.appspot.com",
    messagingSenderId: "21881549608",
    appId: "1:21881549608:web:b0bfec2a195101cd2b161d",
    measurementId: "G-3YK1YFJBV1"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );

    console.log(payload);
    

    // payload.fcmOptions?.link comes from our backend API route handle
    // payload.data.link comes from the Firebase Console where link is the 'key'
    const link = payload.fcmOptions?.link || payload.data?.link;

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./apple-touch-icon.png",
        data: { link: link },
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});




self.addEventListener('notificationclick', (event) => {
    if (event?.notification?.data && event?.notification?.data?.link) {
        self.clients.openWindow(event.notification.data.link);
    }

    // close notification after click
    event.notification.close();
});








// self.addEventListener("notificationclick", function (event) {
//     console.log("[firebase-messaging-sw.js] Notification click received.");

//     event.notification.close();

//     // This checks if the client is already open and if it is, it focuses on the tab. If it is not open, it opens a new tab with the URL passed in the notification payload
//     event.waitUntil(
//         clients
//             // https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll
//             .matchAll({ type: "window", includeUncontrolled: true })
//             .then(function (clientList) {
//                 const url = event.notification.data.url;

//                 if (!url) return;

//                 // If relative URL is passed in firebase console or API route handler, it may open a new window as the client.url is the full URL i.e. https://example.com/ and the url is /about whereas if we passed in the full URL, it will focus on the existing tab i.e. https://example.com/about
//                 for (const client of clientList) {
//                     if (client.url === url && "focus" in client) {
//                         return client.focus();
//                     }
//                 }

//                 if (clients.openWindow) {
//                     console.log("OPENWINDOW ON CLIENT");
//                     return clients.openWindow(url);
//                 }
//             })
//     );
// });