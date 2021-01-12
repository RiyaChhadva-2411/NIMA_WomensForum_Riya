// import React, { Component } from 'react'
// import { Form } from 'react-bootstrap'
// import "./Forum.modules.css";
// import Leaders from "./Leaders";
// import image from "./Images/img.jpeg";
// import formBg from "./Images/image.svg"

// class Forum extends Component {
//   constructor() {
//         super();
//         this.state = {
//           leaders: [
//             {
//               id: 1,
//               branch: "women's forum1",
//               place: "india",
//               img: image,
//               name: "Dr. Ms. Himani Mishra",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 2,
//               branch: "women's forum1",
//               place: "india",
//               img: image,
//               name: "Ms. riya",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 3,
//               branch: "women's forum1",
//               place: "india",
//               img: image,
//               name: "Ms. r",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 4,
//               branch: "women's forum2",
//               place: "india",
//               img: image,
//               name: "Ms. y",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 5,
//               branch: "women's forum2",
//               place: "india",
//               img: image,
//               name: "Ms. a",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 6,
//               branch: "women's forum2",
//               place: "india",
//               img: image,
//               name: "Ms. H",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 7,
//               branch: "women's forum3",
//               place: "usa",
//               img: image,
//               name: "Ms. u",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 8,
//               branch: "women's forum1",
//               place: "india",
//               img: image,
//               name: "Ms. Himani",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 9,
//               branch: "women's forum1",
//               place: "india",
//               img: image,
//               name: "Ms. Himani",
//               designation: "President",
//               phoneNumber: "978165230",
//             },
//             {
//               id: 10,
//               branch: "women's forum2",
//               place: "usa",
//               img: image,
//               name: "Ms. Himani",
//               designation: "President",
//               phoneNumber: "978165230",
//             }
//           ],
//           currentLeaders: [],
//           branch: "",
//           place: "",
//         };
//         // this.search = this.search.bind(this);
//       }
//   handleChangeBranch = (event) => {
//     console.log(event.target.value);
//     this.setState({ branch: event.target.value });
//   };

//   handleChangePlace = (event) => {
//     this.setState({ place: event.target.value });
//   };
//   search = (event) => {
//     event.preventDefault();
//     console.log(this.state.branch + " " + this.state.place);
//     let b = this.state.branch;
//     let p = this.state.place;
//     const temp = this.state.leaders.filter((o) => {
//       if (o.branch === b && o.place === p) {
//         return o;
//       }
//       return 0;
//     });
//     this.setState({
//       currentLeaders: temp,
//     });
//   };
//   filterBranch=()=>{
//     let distinctBranch=[];
//     this.state.leaders.map((obj)=>
//         distinctBranch.push(obj.branch)
//     )
//     distinctBranch=[...new Set(distinctBranch)];
//     console.log(distinctBranch);
//     return distinctBranch
//   }
//   filterPlace=()=>{
//     let distinctPlace=[];
//     this.state.leaders.map((obj)=>
//     distinctPlace.push(obj.place)
//     )
//     distinctPlace=[...new Set(distinctPlace)];
//     console.log(distinctPlace);
//     return distinctPlace;
//   }

//   render() {
//     return (
//       <div>
//         <div className="row row-form">
//           <div className="col-md-5 myform">
//             <h5 className="txt txthead">MEET OUR LEADERS</h5>
//             <p style={{marginLeft:'10px',textAlign:"justify",fontSize:"14px"}}>
//               Welcome to the official website of Indian Dental Association, the
//               premier organisation of dentist in India. IDA the dignity and honour of its members.
//             </p>
//             <p className="txt" style={{textAlign:"left",fontWeight:"500"}}>
//               Find President / Secretary / Treasurer of Women Forum Branch
//             </p>
//             <Form>
//             <select
//               className="form-control forumselect"
//               onChange={this.handleChangeBranch}
//               name="branch">
//               <option value="">Select Branch</option>
//                   {this.filterBranch().map(((option, index)=>
//                     <option value={option} key={index}>{option}</option>
//                     ))}
//               </select>
//               <select
//               className="form-control forumselect"
//               name="place"
//               onChange={this.handleChangePlace}
//               >
//               <option value="">Select Place</option>

//               {this.filterPlace().map(((option,index)=>
//                 <option value={option} key={index}>{option}</option>
//                 ))}
//             </select>
//               <button type="submit" className="btn btn-primary forumbutton">
//                 SEARCH
//               </button>
//             </Form>
//           </div>
//           <div className="col-md-7 lead">
//             <div className="desktop align-item-end">
//               <Leaders leaders={this.state.leaders}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Forum

// // import React from "react";
// // import "./Forum.modules.css";
// // import Leaders from "./Leaders";
// // import image from "./Images/img.jpeg";
// // import formBg from "./Images/image.svg";
// // class Forum extends React.Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       leaders: [
// //         {
// //           id: 1,
// //           branch: "women's forum1",
// //           place: "india",
// //           img: image,
// //           name: "Dr. Ms. Himani Mishra",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 2,
// //           branch: "women's forum1",
// //           place: "india",
// //           img: image,
// //           name: "Ms. riya",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 3,
// //           branch: "women's forum1",
// //           place: "india",
// //           img: image,
// //           name: "Ms. r",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 4,
// //           branch: "women's forum2",
// //           place: "india",
// //           img: image,
// //           name: "Ms. y",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 5,
// //           branch: "women's forum2",
// //           place: "india",
// //           img: image,
// //           name: "Ms. a",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 6,
// //           branch: "women's forum2",
// //           place: "india",
// //           img: image,
// //           name: "Ms. H",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 7,
// //           branch: "women's forum3",
// //           place: "usa",
// //           img: image,
// //           name: "Ms. u",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 8,
// //           branch: "women's forum1",
// //           place: "india",
// //           img: image,
// //           name: "Ms. Himani",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 9,
// //           branch: "women's forum1",
// //           place: "india",
// //           img: image,
// //           name: "Ms. Himani",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         },
// //         {
// //           id: 10,
// //           branch: "women's forum2",
// //           place: "usa",
// //           img: image,
// //           name: "Ms. Himani",
// //           designation: "President",
// //           phoneNumber: "978165230",
// //         }
// //       ],
// //       currentLeaders: [],
// //       branch: "",
// //       place: "",
// //     };
// //     // this.search = this.search.bind(this);
// //   }
// //   handleChangeBranch = (event) => {
// //     console.log(event.target.value);
// //     this.setState({ branch: event.target.value });
// //   };

// //   handleChangePlace = (event) => {
// //     this.setState({ place: event.target.value });
// //   };
// //   search = (event) => {
// //     event.preventDefault();
// //     console.log(this.state.branch + " " + this.state.place);
// //     let b = this.state.branch;
// //     let p = this.state.place;
// //     const temp = this.state.leaders.filter((o) => {
// //       if (o.branch === b && o.place === p) {
// //         return o;
// //       }
// //       return 0;
// //     });
// //     this.setState({
// //       currentLeaders: temp,
// //     });
// //   };
// //   filterBranch=()=>{
// //     let distinctBranch=[];
// //     this.state.leaders.map((obj)=>
// //         distinctBranch.push(obj.branch)
// //     )
// //     distinctBranch=[...new Set(distinctBranch)];
// //     console.log(distinctBranch);
// //     return distinctBranch
// //   }

// //   filterPlace=()=>{
// //     let distinctPlace=[];
// //     this.state.leaders.map((obj)=>
// //     distinctPlace.push(obj.place)
// //     )
// //     distinctPlace=[...new Set(distinctPlace)];
// //     console.log(distinctPlace);
// //     return distinctPlace;
// //   }
// //   render() {
// //     return (
// //       <div className="form-container">
// //         <div className="row m-md-0 align-items-md-end">
// //           <div className="col-md-5" id="form-card">
// //             <h5 className="txt txthead">MEET OUR LEADERS</h5>
// //             <p style={{textAlign:"left",fontSize:"14px"}}>
// //               Welcome to the official website of Indian Dental Association, the
// //               premier organisation of dentist in India. IDA the dignity and honour of its members.
// //             </p>
// //             <p className="txt" style={{textAlign:"left",fontWeight:"500"}}>
// //               Find President / Secretary / Treasurer of Women Forum Branch
// //             </p>
// //             <form id="form" onSubmit={this.search}>
// //               <select
// //               className="form-control"
// //               onChange={this.handleChangeBranch}
// //               name="branch">
// //               <option value="">Select Branch</option>
// //                   {this.filterBranch().map(((option, index)=>
// //                     <option value={option} key={index}>{option}</option>
// //                     ))}
// //               </select>
// //               <select
// //               className="form-control mt-2"
// //               name="place"
// //               onChange={this.handleChangePlace}
// //               >
// //               <option value="">Select Place</option>

// //               {this.filterPlace().map(((option,index)=>
// //                 <option value={option} key={index}>{option}</option>
// //                 ))}
// //             </select>
// //               <button type="submit" className="btn btn-primary mt-3 pr-2 pl-2">
// //                 SEARCH
// //               </button>
// //             </form>
// //           </div>
// //           <div className="col-md-7">
// //           <div className="desktop align-items-end">
// //           <Leaders leaders={this.state.currentLeaders} />
// //           </div>
// //           <div className="mobile">
// //           <div className="mobile">
// //           {this.state.currentLeaders.map((leader) => (
// //             <div key={leader.id} class="card">
// //               <img className="card-image" src={leader.img} alt="id" />
// //                 <div className="card-body text-center">
// //                   <p className="card-title text-uppercase">{leader.name}</p>
// //                   <p>{leader.branch}</p>
// //                   <p> {leader.place}</p>
// //                   <p>{leader.phoneNumber}</p>
// //                 </div>
// //             </div>
// //           ))}
// //           </div>

// //           </div>
// //           </div>
// //           </div>

// //         <img src={formBg} alt="formbackground" className="form-background"/>
// //       </div>
// //     );
// //   }
// // }

// // export default Forum;
import React, { Component } from "react";
import "./Forum.css";
import Leaders from "./Leaders";
import image from "./Images/img.jpeg";
import formBg from "./Images/image.svg";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: [
        {
          id: 1,
          branch: "women's forum1",
          place: "india",
          img: image,
          name: "Dr. Ms. Himani Mishra",
          designation: "President",
          phoneNumber: "978165230",
        },
        {
          id: 2,
          branch: "women's forum1",
          place: "india",
          img: image,
          name: "Ms. riya",
          designation: "President",
          phoneNumber: "978165230",
        },
        {
          id: 3,
          branch: "women's forum1",
          place: "india",
          img: image,
          name: "Ms. r",
          designation: "President",
          phoneNumber: "978165230",
        },
        {
          id: 4,
          branch: "women's forum2",
          place: "india",
          img: image,
          name: "Ms. y",
          designation: "President",
          phoneNumber: "978165230",
        },
        {
          id: 5,
          branch: "women's forum2",
          place: "india",
          img: image,
          name: "Ms. a",
          designation: "President",
          phoneNumber: "978165230",
        },
        {
          id: 6,
          branch: "women's forum2",
          place: "india",
          img: image,
          name: "Ms. H",
          designation: "President",
          phoneNumber: "978165230",
        },
        {
          id: 7,
          branch: "women's forum3",
          place: "usa",
          img: image,
          name: "Ms. u",
          designation: "President",
          phoneNumber: "978165230",
        },
        // {
        //   id: 8,
        //   branch: "women's forum1",
        //   place: "india",
        //   img: image,
        //   name: "Ms. Himani",
        //   designation: "President",
        //   phoneNumber: "978165230",
        // },
        // {
        //   id: 9,
        //   branch: "women's forum1",
        //   place: "india",
        //   img: image,
        //   name: "Ms. Himani",
        //   designation: "President",
        //   phoneNumber: "978165230",
        // },
        {
          id: 10,
          branch: "women's forum2",
          place: "usa",
          img: image,
          name: "Ms. Himani",
          designation: "President",
          phoneNumber: "978165230",
        },
      ],
      currentLeaders: [],
      branch: "",
      place: "",
    };
  }

  handleChangeBranch = (event) => {
    console.log(event.target.value);
    this.setState({ branch: event.target.value });
  };

  handleChangePlace = (event) => {
    this.setState({ place: event.target.value });
  };
  search = (event) => {
    event.preventDefault();
    console.log(this.state.branch + " " + this.state.place);
    let b = this.state.branch;
    let p = this.state.place;
    const temp = this.state.leaders.filter((o) => {
      if (o.branch === b && o.place === p) {
        return o;
      }
      return 0;
    });
    this.setState({
      currentLeaders: temp,
    });
  };
  filterBranch = () => {
    let distinctBranch = [];
    this.state.leaders.map((obj) => distinctBranch.push(obj.branch));
    distinctBranch = [...new Set(distinctBranch)];
    console.log(distinctBranch);
    return distinctBranch;
  };
  filterPlace = () => {
    let distinctPlace = [];
    this.state.leaders.map((obj) => distinctPlace.push(obj.place));
    distinctPlace = [...new Set(distinctPlace)];
    console.log(distinctPlace);
    return distinctPlace;
  };

  render() {
    return (
      <div className="orm-container Forum__MainDiv">
        <div className="row Forum__row  align-items-end">
          <div className="col-md-5" id="form-card">
            <h5 className="Forum__txthead">MEET OUR LEADERS</h5>
            <p className="Forum__para">
              Welcome to the official website of Indian Dental Association, the
              premier organisation of dentist in India. IDA the dignity and
              honour of its members.
            </p>
            <p className="Forum__txt">
              Find President / Secretary / Treasurer of Women Forum Branch{" "}
            </p>
            <form id="form" onSubmit={this.search}>
              <select
                className="form-control Forum__select"
                onChange={this.handleChangeBranch}
                name="branch"
              >
                <option value="">Select Branch</option>
                {this.filterBranch().map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                className="form-control mt-3 Forum__select mb-5"
                name="place"
                onChange={this.handleChangePlace}
              >
                <option value="">Select Place</option>
                {this.filterPlace().map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>

              <button type="submit" className="btn btn-primary Forum__btn">
                SEARCH
              </button>
            </form>
          </div>
          <div className="col-md-7  ml-0 pl-0">
            <div className="desktop align-items-end">
              <Leaders leaders={this.state.currentLeaders} />
            </div>
            <div className="mobile">
              {this.state.currentLeaders.map((leader) => (
                <div key={leader.id} class="card">
                  <img className="card-image" src={leader.img} alt="id" />
                  <div className="card-body text-center">
                    <p className="card-title text-uppercase">{leader.name}</p>
                    <p>{leader.branch}</p>
                    <p> {leader.place}</p>
                    <p>{leader.phoneNumber}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img className="bgImage" src={formBg} alt="background"/>
      </div>
    );
  }
}

export default Forum;
