importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

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



    // payload.data.link comes from the Firebase Console where link is the 'key'
    const link = payload.data?.link;

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




