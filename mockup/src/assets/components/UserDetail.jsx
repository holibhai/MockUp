import React, { useState } from "react";
import Header from "./Header";
import CardDetail from "./CardDetail";
import PersonalInfo from "./PersonalInfo";

const UserDetail = () => {
    const userData = {
    username: "Jeramay Rose",
    position: "Product Designer",
    location: "New York, NK",
    rating: 8.6,
    address: {
      primaryAddress: {
        main: "Spotify New York",
        street: "170 william Street",
        lane: "New York, NY 10038",
      },
      secondaryAddress: {
        main: "Metropolitan Museum ",
        street: "520 E 81st St",
        lane: "New York, NY 10038",
      },
    },
    skills: [
      "Branding",
      "UI/UX",
      "Web Design",
      "Packaging",
      "Print & Editorial",
    ],
    contactDetails: {
      phone: "+1 123 456 7890",
      address: "170 William Street, New York, NY 10038",
      email: "hello@jeri.com",
      site: "www.jeramayrose.com",
    },
    basicInfo: {
      BirthDay: "January 1, 1990",
      Gender: "Male",
    },
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  };

  return (
      <>

           <div className="mx-10 py-8">``
               <Header/>
               <CardDetail/>
               <PersonalInfo data={userData}/>
          </div>
      </>  
  );
};  

export default UserDetail;
