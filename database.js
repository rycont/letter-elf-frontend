const firebaseConfig = {
    apiKey: "AIzaSyA0pUZ9SleOwf_UfZe9W-uRgWvdnVyfksc",
    authDomain: "letter-elf.firebaseapp.com",
    projectId: "letter-elf",
    storageBucket: "letter-elf.appspot.com",
    messagingSenderId: "517560864986",
    appId: "1:517560864986:web:32984427a0bce079d355e3",
    measurementId: "G-FYE4HLQ4VR"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.firestore().collection('letter')