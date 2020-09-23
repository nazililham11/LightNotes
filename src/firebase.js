import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 			process.env.VUE_APP_API_KEY + "",
	authDomain: 		process.env.VUE_APP_AUTH_DOMAIN + "",
	databaseURL: 		process.env.VUE_APP_DATABASE_URL + "",
	projectId: 			process.env.VUE_APP_PROJECT_ID + "",
	storageBucket: 		process.env.VUE_APP_STORAGE_BUCKET + "",
	messagingSenderId: 	process.env.VUE_APP_MESSAGING_SENDER_ID + "",
	appId: 				process.env.VUE_APP_APP_ID + "",
	measurementId: 		process.env.VUE_APP_MEASUREMENT_ID + ""
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
