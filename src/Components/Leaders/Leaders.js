import React from "react";
import "./Leaders.css";
import temp from "./temp.PNG";
function Leaders() {
  return (
    <div className="leaders-component" id="shift-left">
      {/* The First Row */}
     
      {/* The second row  */}
      <div className="main">
        <div className="mainrow row">
          <div className="col-lg-7 col-sm-12 col-12">
            <img
              className="image1"
              src={temp}
              alt="Leader"
            />
            <div className="first">
              <p className="second">DR. MRS. SADHANA KULKARNI</p>
              <p className="details">
                President
                <br />
                Women's Forum
                <br />
                NIMA, Akola, India
                <br />
                +911234567890
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-m-12 col-12">
            <div className="subheading">Message from the leader</div>
            <br/>
            <p id="justify">
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
            <a className="link" href="/" style={{color:"#2145b7"}}>
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>

      {/* The third row */}
      <div className="middlediv">
        <div className="mainrow row">
          <div className="col-lg-7 col-sm-12 col-12 order-lg-10 order-1">
            <div className="fourth">
              <p className="second">DR. MRS. SADHANA KULKARNI</p>
              <p className="details">
                President
                <br />
                Women's Forum
                <br />
                NIMA, Akola, India
                <br />
                +911234567890
              </p>
            </div>
            <img
              className="image2"
              src={temp}
              alt="Leader"
            />
          </div>
          <div className="col-lg-5 col-sm-12 col-12 order-2">
            <div className="subheading">Message from the leader</div><br/>
            <p className="third" id="justify">
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
            <a className="link" href="/" style={{color:"#2145b7"}}>
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>

      {/* The Fourth Row */}
      <div className="main">
        <div className="mainrow row">
          <div className="col-lg-7 col-sm-12 col-12">
            <img
              className="image1"
              src={temp}
              alt="Leader"
            />
            <div className="first">
              <p className="second">DR. MRS. SADHANA KULKARNI</p>
              <p className="details">
                President
                <br />
                Women's Forum
                <br />
                NIMA, Akola, India
                <br />
                +911234567890
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-m-12 col-12">
            <div className="subheading">Message from the leader</div><br/>
            <p id="justify">
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
            <a className="link" href="/" style={{color:"#2145b7"}}>
              <u>COME JOIN US AND BECOME A MEMBER OF NIMA</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Leaders;
