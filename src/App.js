import React, { Component, createContext } from 'react';
import './App.css';
import 'tachyons';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import Chatroom from './components/Chatroom/Chatroom';
import Donate from './components/Donate/Donate';
import OneBlogPost from './components/OneBlogPost/OneBlogPost'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import Navigation from './components/Navigation/Navigation';
import Newsletter from './components/Newsletter/newsletter';
import DownloadEmails from './components/DownloadEmails/DownloadEmails';
import AdminPanel from './components/AdminPanel/AdminPanel';
import UserManagement from './components/UserManagement/UserManagement';
import SupportLinkManagement from './components/SupportLinkManagement/SupportLinkManagement'
import CreateBlogPost from './components/CreateBlogPost/CreateBlogPost';
import Calendar from './components/Calendar/Calendar';
import CreateEvent from './components/CreateEvent/CreateEvent';
import "react-datepicker/dist/react-datepicker.css";
import NLForm from './components/NLForm/NLForm';
import AddPhoto from './components/Gallery/AddPhoto';
import CalEvent from './components/Calendar/CalEvent';
import NewsletterES from './components/Newsletter/NewsletterES';
import Espanol from './components/Espanol/Espanol.js';
import Resources from './components/Resources/Resources.js';
import Contact from './components/Contact/Contact.js';
import ContactForm from './components/Contact/ContactForm.js';
import SubNavBar from './components/Navigation/SubNavBar.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js'
import BackToTop from './components/BackToTop/BackToTop';
import NewsletterUpload from './components/Newsletter/NewsletterUpload';
class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {
        id: '',
        fName: '',
        lName: '',
        email: '',
        permission: '',
        joined: ''
      }
    }
  }
  
  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        fName: data.first_name,
        lName: data.last_name,
        email: data.email,
        permission: data.permission,
        joined: data.joined
    }})
  }

  getAppUser = () => {
    return this.state.user
  }

    render(){
      return(
        <div className="App">
          <div className="Container">
            <div className="Wrapper">
              <Header />
          <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="signin" element={<Signin loadUser={this.loadUser} getAppUser={this.getAppUser}/>}/>
            <Route path="register" element={<Register loadUser={this.loadUser} returnAppUser={this.getAppUser}/>}/>
            <Route path="about" element={<About getAppUser={this.getAppUser}/>}/>
            <Route path="gallery" element={<Gallery/>}/>           
            <Route path="blog" element={<Blog/>}/>
            <Route path="blog/:key" element={<OneBlogPost/>}/>         
            <Route path="chatroom" element={<Chatroom getAppUser={this.getAppUser}/>}/>
            <Route path="donate" element={<Donate/>}/>
            <Route path="newsletter" element={<Newsletter/>}/>
            <Route path="newsletterES" element={<NewsletterES/>}/>
            <Route path="download-emails" element={<DownloadEmails/>}/>
            <Route path="admin-panel" element={<AdminPanel/>}/>
            <Route path="user-management" element={<UserManagement/>}/>
            <Route path="support-link-management" element={<SupportLinkManagement/>}/>
            <Route path="create-new-post" element={<CreateBlogPost/>}/>
            <Route path="createEvent" element={<CreateEvent/>}/>
			      <Route path = "calendar/:key" element={<CalEvent/>}/>
            <Route path="calendar" element={<Calendar/>}/>
            <Route path="send-newsletter-post" element={<NLForm/>}/>
            <Route path="NewsletterUpload" element={<NewsletterUpload/>}/>
            <Route path="AddPhoto" element={<AddPhoto/>}/>
            <Route path="Espanol" element={<Espanol/>}/>
            <Route path="Resources" element={<Resources/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="ContactForm" element={<ContactForm/>}/>
            <Route path="SubNavBar" element={<SubNavBar/>}/>
            <Route path="Header" element={<Header/>}/>
            <Route path="Footer" element={<Footer/>}/>
          </Routes>
          <BackToTop/>
            </div>
            
              <Footer />
        </div>
        </div>
      );
    }
}

export default App;
