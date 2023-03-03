import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Bank from "./components/Bank";
import Billing from "./components/Billing";
import Activities from "./components/Activities";
import Family from "./components/Family";
import Invitation from "./components/Invitation";

function App() {

  const headerClick = (className) => {
    let items = document.getElementsByClassName("headings");
    for (var element of items) {
      element.classList.remove("active");
    }
    switch (className) {
      case "profile-action":
        document.querySelector(".Profile").classList.add("active");
        break;
      case "wallet-action":
        document.querySelector(".Wallet").classList.add("active");
        break;
      case "activities-action":
        document.querySelector(".Activities").classList.add("active");
        break;
      case "invitation-action":
        document.querySelector(".Invitation").classList.add("active");
        break;
    }
    items = document.getElementsByClassName("common");
    for (var element of items) {
      if (!element.classList.contains(className)) {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    }
  };
  window.onresize = () => {
    const items = document.getElementsByClassName("common");
    for (var element of items) {
      element.style.display = "block";
    }
  };

  
  return (
    <div>
      {/* <Navbar />
      <Header />
      <Profile/>
      <Bank />
      <Billing />
      <Family/>
      <Invitation/>
      <Activities/> */}

      {/* navigation */}
      <Navbar/>
      <Header />
      <div class="navigation">
        <ul>
          <li
            class="headings Profile active"
            onclick="headerClick('profile-action')"
          >
            Profile
          </li>
          <li class="headings Wallet" onclick="headerClick('wallet-action')">
            Wallet
          </li>
          <li
            class="headings Activities"
            onclick="headerClick('activities-action')"
          >
            Activities
          </li>
          <li
            class="headings Invitation"
            onclick="headerClick('invitation-action')"
          >
            Invitation
          </li>
        </ul>
      </div>
      {/* content */}
      <div class="container">
       
        {/* <div class="common profile profile-action">profile</div>
      <div class="common bank-account wallet-action">bank-account</div>
      <div class="common billing-address">billing-address</div>
      <div class="common activities activities-action">activities</div>
      <div class="common family profile-action">family</div>
      <div class="common invitation invitation-action">invitation</div> */}

        <div class="common profile profile-action">
          <Profile />
        </div>
        <div class="common bank-account wallet-action">
          <Bank />
        </div>
        <div class="common billing-address">
          <Billing />
        </div>
        <div class="common activities activities-action">
          <Activities />
        </div>
        <div class="common family profile-action">
          <Family />
        </div>
        <div class="common invitation invitation-action">
          <Invitation />
        </div>
      </div>
    </div>
  );
}

export default App;
