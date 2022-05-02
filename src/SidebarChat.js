import React, {useEffect, useState} from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    const deleteRoom = () => {
        const passwordVerify = prompt("Enter Password to delete Room");
        if (passwordVerify == "password") {
          db.collection("rooms")
            .doc(id)
            .delete()
            .then(function () {
              window.location = `/`;
            })
            .catch(function (error) {
              console.error("Error removing document: ", error);
            });
        } else {
          alert("You are not authorised to delete rooms");
        }
      };
    


    useEffect(() => {
        if (id) {
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => 
                doc.data()))
            );
        }
    }, [id]);
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat= () => {
        const roomName = prompt("please enter name for chat");
        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChat_info'>
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
            <div className="sidebarChat__delete" onClick={deleteRoom}>
        <DeleteForeverIcon />
      </div>
        </div>
        </Link>
    ): (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat;