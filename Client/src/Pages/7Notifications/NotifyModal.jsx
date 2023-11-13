import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import moment from 'moment'
import axios from 'axios';
import { useParams } from "react-router-dom";




const NotifyModal = () => {
    let { id } = useParams();




    const [notify, setnotify] = useState([])
    //let { user } = useAuthContext()
    //NEEDED : take userID FORM AUTHENCICATION/TOKEN AUTOMATICALLY
    // let user={_id:"60261ccf416a1ed478d7357a"}
    let user = id;

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/notifications`, {
            params: { id: user }
        }).then(res => {
            setnotify(res.data.notifies)
           
        })

    },
        [])

    //need auth state
    var handleIsRead = (msg, index) => {

        let data = notify;
        var selectedNotfiy = notify[index];
        selectedNotfiy.isRead = 'true';
        data[index] = selectedNotfiy;
        setnotify(data);
       

        axios.patch(`${process.env.REACT_APP_API_URL}/isReadNotification/${msg._id}`).then(res => {
          
        })


    }
 
 

    return (
        <div style={{ minWidth: '300px' }}>
            {/* handle sound */}
            <div className="d-flex justify-content-between align-items-center px-3">
                <h3>Notification</h3>
                {
                    // notify.sound ? 
                    // <i className="fas fa-bell text-danger" 
                    // style={{fontSize: '1.2rem', cursor: 'pointer'}}
                    // onClick={handleSound} />

                    <i className="fas fa-bell-slash text-danger"
                        style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                    // onClick={handleSound} 
                    />
                }
            </div>
            <hr className="mt-0" />

            {
                notify.length === 0 &&
                <img src="/images/notice.png" alt="NoNotice" className="w-100" />}

            <div style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
                {
                    notify.map((msg, index) => (
                        // satart
                        <div key={index} className="px-2 mb-3" >
                            <Link className="d-flex text-dark align-items-center"
                                onClick={() => handleIsRead(msg, index)}>
                                {/* take this and access backend server and retrive an image */}
                                {/* <Avatar src={msg.user.profilePicture} size="big-avatar" /> */}

                                <div className="mx-1 flex-fill">
                                    <div>
                                        <strong className="mr-1">{msg.user.firstName} {msg.user.lastName}</strong>
                                        <span> {msg.text}</span>
                                    </div>
                                    {msg.content && <small>{msg.content.slice(0, 20)}...</small>}
                                </div>

                                {
                                    msg.image &&
                                    <div style={{ width: '30px' }}>
                                        {/* {
                                            msg.image.match(/video/i)
                                                ? <video src={msg.image} width="100%" />
                                                : <Avatar src={msg.image} size="medium-avatar" />
                                        } */}
                                    </div>
                                }

                            </Link>
                            <small className="text-muted d-flex justify-content-between px-2">
                                {moment(msg.createdAt).fromNow()}
                                {
                                    !msg.isRead && <i className="fas fa-circle text-primary" />
                                }
                            </small>
                            {/* end */}
                        </div>
                    ))
                }

            </div>

            <hr className="my-1" />
            <div className="text-right text-danger mr-2" style={{ cursor: 'pointer' }}
              >
                Delete All
            </div>

        </div>
    )
}

export default NotifyModal
