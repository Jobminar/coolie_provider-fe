// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyCnncBYPCa7T8pHnhXeAcI6-oMUR70Wzv8",
    authDomain: "coolie-9cc38.firebaseapp.com",
    projectId: "coolie-9cc38",
    storageBucket: "coolie-9cc38.appspot.com",
    messagingSenderId: "425618348845",
    appId: "1:425618348845:web:89d981a3f3e3f348f611a4",
    measurementId: "G-X6752VX6L5"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
