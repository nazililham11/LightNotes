import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 			"AIzaSyDWlEE596zxonLO90YDl6Iij8JnBRFNErQ",
	authDomain: 		"lightnotes-e875d.firebaseapp.com",
	databaseURL: 		"https://lightnotes-e875d.firebaseio.com",
	projectId: 			"lightnotes-e875d",
	storageBucket: 		"lightnotes-e875d.appspot.com",
	messagingSenderId: 	"134287938390",
	appId: 				"1:134287938390:web:bd24bdf9214209b4e63cf7",
	measurementId: 		"G-NPXB9WPM9T",
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const notesCollection = db.collection('notes')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
	db,
	auth,
	usersCollection,
	postsCollection,
	notesCollection,
	commentsCollection,
	likesCollection
}
