import NavBar from "../../Components/NavBar";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Meetups.css";
import { useTranslation } from "react-i18next";
// import MeetupRoom from '../9MeetupRoom/MeetupRoom';
const Meetups = () => {
  let [t, i18n] = useTranslation();
  const [roomcode, setRoomCode] = useState(Date.now());
  const navigate = useNavigate();

  //   setRoomCode(Math.floor(Math.random() * 500));
  const handleFormSubmit2 = () => {
    // alert("your Room id is  "+roomcode)



    navigate(`/meetup/${roomcode}`);
  };

  // const myalert=()=>{

  // }
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-3 topusersize mt-5">
            <div className="row mt-5">
              <h5>{t("Top Users")}</h5>
            </div>
          </div>
          <div className=" col-5">
            <div className="row ">
              <div className="parent_jRoom">
                <div className="jRoom">
                  <div className="mycenterdiv">
                    <form className="form">
                      {/* <div>Enter id or personal link name</div> */}
                      {/* <input type="text" class="my_form-control" value={roomcode} onChange={e=>setRoomCode(e.target.value)}  placeholder='Enter id or personal link name' required /> */}
                      <input
                        type="button"
                        className="joinbutton mb-2"
                        value={t("Create Meeting")}
                        onClick={() => {
                          handleFormSubmit2();
                        }}
                      />
                      <h3>{t("Or")}</h3>
                      <div>{t("Join Meeting")}</div>
                      <input
                        type="text"
                        className="my_form-control mt-2"
                        placeholder={t("Please Enter Meeting ID")}
                        onChange={(e) => setRoomCode(e.target.value)}
                      />
                      <br />
                      <input
                        type="submit"
                        className="joinbutton2 mt-2"
                        value={t("join")}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-4">
            <div className="row mt-4">
              <h3>{t("Events")}</h3>
              <div className="d-flex">
                <div className=" mybackground col-2 text-sm-center">
                  1 <br /> Dec
                </div>
                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">
                  {t("event starts")}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-flex">
                <div className=" mybackground col-2 text-sm-center">
                  2 <br /> Dec
                </div>
                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">
                  {t("event starts")}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="d-flex">
                <div className=" mybackground col-2 text-sm-center">
                  3 <br /> Dec
                </div>
                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">
                  {t("event starts")}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="d-flex">
                <div className=" mybackground col-2 text-sm-center">
                  4 <br /> Dec
                </div>
                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">
                  {t("event starts")}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="d-flex">
                <div className=" mybackground col-2 text-sm-center">
                  5 <br /> Dec
                </div>
                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">
                  {t("event starts")}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="d-flex">
                <div className=" mybackground col-2 text-sm-center">
                  6 <br /> Dec
                </div>
                <div className="myeventdiv col-10  border-bottom border-dark t-center text-sm-center mb-2">
                  {t("event starts")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MeetupRoom myRoom={roomcode}/> */}
    </>
  );
};

export default Meetups;
