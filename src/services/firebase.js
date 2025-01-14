import { initializeApp } from "firebase/app";
import isUndefined from "lodash/isUndefined"
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
  getDoc,
  getDocs,
  collection,
  where,
  doc,
  // addDoc,
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
  await signInWithEmailAndPassword(auth, email, password);
  return auth.currentUser
};

const registerWithEmailAndPassword = async ({ name, email, password }) => {
  const res = await createUserWithEmailAndPassword(auth, email, password)
  const user = res.user

  const qusers = query(collection(db, "users"), where("email", "==", email));
  const userSnapshot = await getDocs(qusers);

  // User document added with the reference (name) of the user without spaces
  if (isUndefined(userSnapshot.docs[0])) {
    await setDoc(doc(db, 'users', name.replace(/\s+/g, '')), { name: name, email: email, uid: user.uid }, { merge: true })
    // .catch((e) => {  console.log(e); })
  }
  // User document update with the name as entered by the user (based on email)
  else {
    userSnapshot.forEach((doc) => {
      setDoc(doc.ref, { name: name, email: email, uid: user.uid }, { merge: true })
    });
  }
};

const sendPasswordReset = async (email) => {
  // try {
    await sendPasswordResetEmail(auth,email);
    // alert("Password reset link sent!");
  //   return null
  // } catch (err) {
  //   console.error(err);
  //   alert(err.message);
  //   return err.message
  // }
};

const logout = () => {
  signOut(auth);
};


const checkEmailInUse = async (username, email) => {
  const allusers = query(collection(db, "users"), where("email", "==", email));
  const userDocs = await getDocs(allusers);

  let emailIsInUse = !isUndefined(userDocs.docs[0])
  // console.log('email is in use?', emailIsInUse)
  if (emailIsInUse === true){
    const foundDocumentID = userDocs.docs[0].ref.id
    // console.log('ID of found document',foundDocumentID)
    // console.log('Current user:',username.replace(/\s+/g, ''))
    if (foundDocumentID.includes(username.replace(/\s+/g, ''))){
      emailIsInUse = false
    }
  }

  return emailIsInUse
}

const fetchUserName = async (user) => {
  // let userData
  let name, email

  if (user) {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const userData = doc.docs[0].data();
      // setName(data.name);

      name = userData.name
      email = userData.email

    } catch (err) {
      console.error(err);
      alert(err.message)
      // alert("An error occured while fetching user data");
    }
  }

  return { name, email }
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

const fetchUserRSVPallowedPartyIdx = async (email) => {
  let allowed, partyIdx

  if (email) {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const doc = await getDocs(q);
      const rsvpData = doc.docs[0].data();

      allowed = rsvpData.weddingAllowed
      partyIdx = rsvpData.partyIdx
      // confirmed = rsvpData.Wedding.confirmed

    } catch (err) {
      console.error(err);
      alert(err.message)
      // alert("An error occured while fetching user data");
    }
  }

  return { allowed, partyIdx }
};

const fetchUserRSVPdata = async (email) => {
  let weddingData

  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const doc = await getDocs(q);
    const rsvpData = doc.docs[0].data();

    weddingData = rsvpData.Wedding

  } catch (err) {
    console.error(err);
    alert(err.message)
    // alert("An error occured while fetching user data");
  }

  return weddingData
};

const fetchUserbyName = async (queryName) => {
  let userData;

  // console.log(queryName)
  const names = queryName.split(' ');
  let nameLength = names.length;
  // console.log(names)
  // console.log(nameLength)
  try {
      const q = query(collection(db, "users") , where('nameLC', 'array-contains', names[nameLength-1].toLowerCase()));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        if (doc.data().nameLC[0].includes(names[0].toLowerCase())){
          // console.log(doc.id, " => ", doc.data());
          userData = doc.data();
        }
      });
  } catch (err) {
    console.error(err);
    alert(err.message)
  }

  return userData
};


const putRSVPDataToDB = async ({ UserName, UserEmail, Name, Email, Data, HasPlusOne, PlusOneAdded }) => {
  try {
    // For all guests, update the rsvp information
    if (Data.Wedding.IsAPlusOne === false) {
      // console.log('Updating RSVP information')
      const q = query(collection(db, "users"), where("email", "==", Email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setDoc(doc.ref, { email: Email, Wedding: Data.Wedding }, { merge: true })
      });
    }
    //PLUS ONE HANDLING
    if (Data.Wedding.IsAPlusOne === true) {
      // INITIAL CHECK
      //Don't let someone add a plus one that is already invited to the wedding
      const emailExists = await checkEmailInUse(UserName, Email)
      if (emailExists === true) {
        throw new Error('The email you entered is already in use by another guest!');
      }
      // PLUS ONE UPDATE
      // If the guest data is for a plus one, update the user and party information in case of name/email change
      if (PlusOneAdded === true) {
        // Continue with update
        const qparty = query(collection(db, "parties"), where("guests", "array-contains", UserEmail));
        const partySnapshot = await getDocs(qparty);
        const partyData = partySnapshot.docs[0].data();
        const guests = partyData.guests
        const lastEmail = guests.pop()
        guests.push(Email)
        partySnapshot.forEach((doc) => {
          setDoc(doc.ref, { guests: guests }, { merge: true })
        });
        const qusers = query(collection(db, "users"), where("email", "==", lastEmail));
        const userSnapshot = await getDocs(qusers);
        userSnapshot.forEach((doc) => {
          setDoc(doc.ref, { name: Name, email: Email }, { merge: true })
        });
        const qrsvp = query(collection(db, "users"), where("email", "==", lastEmail));
        const rsvpSnapshot = await getDocs(qrsvp);
        rsvpSnapshot.forEach((doc) => {
          setDoc(doc.ref, { email: Email, Wedding: Data.Wedding }, { merge: true })
        });
      }
      // NEW PLUS ONE
      // If a plus one that has not been added, create a user profile, rsvp info, and add to party list
      else if (PlusOneAdded === false & Email !== "") {
        //Otherwise, create user and rsvp documents, append guest array
        await setDoc(doc(db, 'users', UserName.replace(/\s+/g, '') + '-PlusOne'), {
          name: Name,
          email: Email,
        }, { merge: true })
        await setDoc(doc(db, 'users', UserName.replace(/\s+/g, '') + '-PlusOne'), {
          allowed: true,
          confirmed: "yes",
          email: Email,
          Wedding: Data.Wedding
        }, { merge: true })
        const q = query(collection(db, "parties"), where("guests", "array-contains", UserEmail));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const guests = doc.data().guests
          guests.push(Email)
          setDoc(doc.ref, { guests: guests, plusOneAdded: true, hasPlusOne: false }, { merge: true })
        });
      }
    }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
};

const fetchPartyUsers = async (partyIdx) => {
  let partyGuests, partyGuestEmails, partyPlusOne, partyPlusOneAdded
  const partyGuestNames = []
  try {
    const docRef = doc(db, "parties", "party"+partyIdx);
    const docSnap = await getDoc(docRef)
    const partyData = docSnap.data();

    partyGuestEmails = partyData.guests
    partyPlusOne = partyData.hasPlusOne
    partyPlusOneAdded = partyData.plusOneAdded

    for (let i = 0; i < partyGuestEmails.length; i++) {
      const q = query(collection(db, "users"), where("email", "==", partyGuestEmails[i]));
      const doc = await getDocs(q);
      const nameData = doc.docs[0].data();

      partyGuestNames[i] = nameData.name
    }

    partyGuests = { 
      names: partyGuestNames, 
      emails: partyGuestEmails, 
      hasPlusOne: partyPlusOne, 
      plusOneAdded: partyPlusOneAdded 
    }

  } catch (err) {
    console.error(err)
    alert(err.message)
  }
  return partyGuests
}

export {
  auth,
  db,
  fetchUserName,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  fetchUserRSVPallowedPartyIdx,
  fetchUserRSVPdata,
  putRSVPDataToDB,
  fetchPartyUsers,
  fetchUserbyName
  // currentAuthenticatedUser,
};