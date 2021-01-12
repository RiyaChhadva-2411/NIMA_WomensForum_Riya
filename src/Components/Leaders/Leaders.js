import React from "react";
import "./Leaders.css";
import temp from "./temp.PNG";
function Leaders() {
  return (
    <div className="leaders-component" id="shift-left">
      
     
      {/*FIRST ROW*/}
      <div className="Leader__main">
        <div className="Leader__mainrow row">
          <div className="col-lg-7 col-sm-12 col-12">
            <img
              className="Leader__image1"
              src={temp}
              alt="Leader"
            />
            

            <div className="Leader__first">
              <div className="Leader__second">DR. MRS. SADHANA KULKARNI</div>
              <div className="Leader__details">
                President
                Women's Forum
                NIMA, Akola, India
                <div className="Leader__phone">+911234567890</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-m-12 col-12">
            <div className="Leader__subheading">Message from the leader</div>
            <br/>
            <p id="Leader__justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non prodient, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillim dolore
            </p>
            <a className="Leader__link" href="/">
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>

      
      {/*SECOND ROW*/}
      <div className="Leader__middlediv">
        <div className="Leader__mainrow row">
          <div className="col-lg-7 col-sm-12 col-12 order-lg-10 order-1">
            <div className="Leader__fourth">
              <div className="Leader__rightsecond">DR. MRS. SADHANA KULKARNI</div>
              <div className="Leader__rightdetails">
                President
                Women's Forum
                NIMA, Akola, India
                <div className="Leader__rightphone">+911234567890</div>
              </div>
            </div>
            <img
              className="Leader__image2"
              src={temp}
              alt="Leader"
            />
          </div>
          <div className="col-lg-5 col-sm-12 col-12 order-2">
            <div className="Leader__subheading">Message from the leader</div><br/>
            <p className="Leader__third" id="Leader__justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non prodient, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillim dolore
            </p>
            <a className="Leader__link" href="/">
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>

      {/*THIRD ROW*/}
      <div className="Leader__main">
        <div className="Leader__mainrow row">
          <div className="col-lg-7 col-sm-12 col-12">
            <img
              className="Leader__image1"
              src={temp}
              alt="Leader"
            />
            <div className="Leader__first">
              <div className="Leader__second">DR. MRS. SADHANA KULKARNI</div>
              <div className="Leader__details">
                President
                Women's Forum
                NIMA, Akola, India
                <div className="Leader__phone">+911234567890</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-m-12 col-12">
            <div className="Leader__subheading">Message from the leader</div><br/>
            <p id="Leader__justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non prodient, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillim dolore
            </p>
            <a className="Leader__link" href="/">
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Leaders;
