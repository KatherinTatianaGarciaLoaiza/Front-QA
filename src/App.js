import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { PublicNavbar, PrivateNavbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import QuestionsPage from './pages/QuestionsPage'
import QuestionFormPage from './pages/QuestionFormPage'
import AnswerFormPage from './pages/AnswerFormPage'
import OwnerQuestionsPage from './pages/OwnerQuestionsPage'
import { useAuthState } from "react-firebase-hooks/auth";
import AvatarPage from './pages/AvatarPage';
import QuestionFormPageUpdate from './pages/QuestionFormPageUpdate';
import { Navbar, Nav } from 'reactstrap';

firebase.initializeApp({
  apiKey: "AIzaSyC09aJakDw2u96sXHP1c5lOHDIstF88MBo",
  authDomain: "despliegue-front.firebaseapp.com",
  projectId: "despliegue-front",
  storageBucket: "despliegue-front.appspot.com",
  messagingSenderId: "1061961427087",
  appId: "1:1061961427087:web:61be62761092b4b03ea8fa",
  measurementId: "G-FF5DYFRGF6"
});

const auth = firebase.auth();


const App = () => {
  const [user] = useAuthState(auth);
  if (user?.uid) {
    localStorage.setItem("uid", user?.uid);
  }
  return (
    <Router>
      {user ?
        <>
          <PrivateNavbar />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage/>}} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/list" component={OwnerQuestionsPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/new" component={QuestionFormPage} />
            <Route exact path="/info" component={AvatarPage} />
            <Route exact path="/questiones" component={QuestionFormPageUpdate} />
            <Redirect to="/" />
          </Switch>
        </> :
        <>
          <PublicNavbar />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage/>}} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/info" component={AvatarPage} />
            <Redirect to="/" />
          </Switch>
        </>
      }
    </Router>
  )
}


export function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button className="button right" onClick={signInWithGoogle}>Sign in with google</button>;
}

export function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="button right"
        onClick={() => {
          localStorage.removeItem("uid");
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}


export default App
