import React, {Component} from 'react';
import '../App.css';
import firebase from "../config/config";
import NavBarFeed from "./NavBarFeed";
import CreatePost from "./CreatePost";
import ShowPost from "./ShowPost";

export class Feed extends Component{

componentWillMount(){
    const userDB = this.props.user
    const userBD = { 
        uid: userDB.uid,
        name: userDB.displayName,
        email: userDB.email,
        photo: userDB.photoURL,
        
        }
         if(userBD.uid === undefined){
             
         }else{
            const userRef = firebase.database().ref("users/" + userDB.uid);
            userRef.set(userBD);
        }

}


render(){
  const infoUser = this.props.user
    return(
        <div>
            <NavBarFeed/>
            <br/>
            <CreatePost infoUser = {infoUser}/>
            <br/>
            
            <ShowPost infoUser = {infoUser}/>
            </div>
       

    )   
    }

}

export default Feed;