import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    return auth.currentUser
};

const registerWithEmailAndPassword = async ({ name, email, password }) => {
  try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user
      console.log('Registering with name:',name)
      console.log('For the email:', email)
      await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
      })
  } catch (err) {
      console.error(err)
      alert(err.message)
  }
};

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};


const fetchUserName = async (user) => {
  // let userData
  let name, email

  if (user){
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const userData = doc.docs[0].data();
      // setName(data.name);

      name = userData.name
      email = userData.email

    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    } 
  }

  return {name,email}
  // return userData
};

// const currentAuthenticatedUser = async () => {
//   let myUser

//   try {
//     myUser = await auth.currentUser()
//   } catch (e) {
//       // sign out will clear all existing cognito keys from localStorage
//       await logout()
//       myUser = null
//   }

//   return myUser
// }

const fetchUserRSVPallowed = async (email) => {
  let allowed, confirmed

  if (email){
    try {
      const q = query(collection(db, "rsvp"), where("email", "==", email));
      const doc = await getDocs(q);
      const rsvpData = doc.docs[0].data();

      allowed = rsvpData.allowed
      confirmed = rsvpData.confirmed

    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    } 
  }

  return {allowed,confirmed}
};

const fetchUserRSVPdata = async (email) => {
  let weddingData

    try {
      const q = query(collection(db, "rsvp"), where("email", "==", email));
      const doc = await getDocs(q);
      const rsvpData = doc.docs[0].data();

      weddingData = rsvpData.Wedding

    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    } 
  
  return weddingData
};


const putRSVPDataToDB = async ({UserEmail,Name,Email,Data,HasPlusOne,PlusOneAdded}) => {
  try {
    console.log('Data', Data.Wedding)
    console.log('Plus one already added', PlusOneAdded)
    // For all guests, update the rsvp information
    if (Data.Wedding.IsAPlusOne === false){
      // console.log('Updating RSVP information')
      const q = query(collection(db, "rsvp"), where("email", "==", Email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setDoc(doc.ref, {email: Email, Wedding: Data.Wedding}, { merge: true })
      });
    }
    // If the guest data is for a plus one, update the user and party information in case of name/email change
    if(Data.Wedding.IsAPlusOne === true & PlusOneAdded === true){
      // console.log('Updating Plus One information')
      const qparty = query(collection(db, "parties"), where("guests", "array-contains", UserEmail));
      const partySnapshot = await getDocs(qparty);
      const partyData = partySnapshot.docs[0].data();
      const guests = partyData.guests
      const lastEmail = guests.pop()
      guests.push(Email)
      partySnapshot.forEach((doc) => {
        setDoc(doc.ref, {guests: guests, plusOneAdded: true, hasPlusOne: false}, { merge: true })
      });
      const qusers = query(collection(db, "users"), where("email", "==", lastEmail));
      const userSnapshot = await getDocs(qusers);
      userSnapshot.forEach((doc) => {
        setDoc(doc.ref, {name: Name, email: Email}, { merge: true })
      });
      const qrsvp = query(collection(db, "rsvp"), where("email", "==", lastEmail));
      const rsvpSnapshot = await getDocs(qrsvp);
      rsvpSnapshot.forEach((doc) => {
        setDoc(doc.ref, {email: Email, Wedding: Data.Wedding}, { merge: true })
      });
    }
    // If a plus one that has not been added, create a user profile, rsvp info, and add to party list
    else if(Data.Wedding.IsAPlusOne === true & PlusOneAdded === false & Email !== ""){
      // FIX: Need to run a check to make sure the plus one's email is not already in the user list
      // console.log('Adding a new Plus One')
      await addDoc(collection(db, "users"), {
          authProvider: "local",
          name: Name,
          email: Email,
      })
      await addDoc(collection(db, "rsvp"), {
          allowed: true,
          confirmed: "yes",
          email: Email,
          Wedding: Data.Wedding
      })
      const q = query(collection(db, "parties"), where("guests", "array-contains", UserEmail));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const guests = doc.data().guests
        guests.push(Email)
        setDoc(doc.ref, {guests: guests, plusOneAdded: true, hasPlusOne: false}, { merge: true })
      });
    }
  } catch (err) {
      console.error(err)
      alert(err.message)
  }
};

const fetchPartyUsers = async(email) => {
  let partyGuests, partyGuestEmails, partyPlusOne, partyPlusOneAdded
  const partyGuestNames = []
  try{
    const q = query(collection(db, "parties"), where("guests", "array-contains", email));
    const doc = await getDocs(q);
    const partyData = doc.docs[0].data();

    partyGuestEmails = partyData.guests
    partyPlusOne = partyData.hasPlusOne
    partyPlusOneAdded = partyData.plusOneAdded
    
    for (let i = 0; i < partyGuestEmails.length; i++) {
      // if (partyGuestEmails[i] == "plus_one"){
      //   partyGuestNames[i] = "Plus One"
      // }
      // else{
        const q = query(collection(db, "users"), where("email", "==", partyGuestEmails[i]));
        const doc = await getDocs(q);
        const nameData = doc.docs[0].data();

        partyGuestNames[i] = nameData.name
      }
    // }

  } catch (err){
    console.error(err)
    alert(err.message)
  }
  return partyGuests = {names: partyGuestNames, emails: partyGuestEmails, hasPlusOne: partyPlusOne, plusOneAdded: partyPlusOneAdded}
}

export {
    auth,
    db,
    fetchUserName,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    fetchUserRSVPallowed,
    fetchUserRSVPdata,
    putRSVPDataToDB,
    fetchPartyUsers,
    // currentAuthenticatedUser,
};