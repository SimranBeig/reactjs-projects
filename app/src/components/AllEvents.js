import axios from "axios";
import React, { Component } from "react";
import EventDetails from "./EventDetails";
import { useHistory } from "react-router-dom";

// export class AllEvents extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//   Details: [
// {
//     "PublishedEventRef": "9632df8a-b403-11ec-aa2b-dada996654c3",
//     "EventName": "COYOTE NIGHT AT CLUB TITO'S",
//     "EventReference": "eae00ef0-3c58-11eb-9234-010812182330",
//     "VoucherReference": "ed4b04f0-4f40-11eb-9234-010812182330",
//     "ClubID": 1,
//     "ClubName": "Tito's Club",
//     "Date": "06-04-2022",
//     "Thumbnail": "https://www.coppercodes.com/clients/Titos/event4.png",
//     "Timings": "6:00 PM to 3:00 AM",
//     "VouchersID": 7,
//     "VoucherName": "Flash Pricing ",
//     "VoucherDetails": [
//         {
//             "Type": "Couple",
//             "Amount": 2000
//         },
//         {
//             "Type": "Stag",
//             "Amount": 2000
//         },
//         {
//             "Type": "Table(for 6 pax)",
//             "Amount": 6000
//         }
//     ]
// },
// {
//     "PublishedEventRef": "dd4ff525-b403-11ec-aa2b-dada996654c3",
//     "EventName": "BOLLYTRONIC SATURDAY NIGHT AT BOLLYWOOD DISCOTHEQUE",
//     "EventReference": "eae09ef0-3c58-11eb-9234-010812182330",
//     "VoucherReference": "ed4b04f0-4f40-11eb-9234-010812182330",
//     "ClubID": 1,
//     "ClubName": "Tito's Club",
//     "Date": "06-04-2022",
//     "Thumbnail": "https://www.coppercodes.com/clients/Titos/event4.png",
//     "Timings": "9:00pm- 6:00am",
//     "VouchersID": 7,
//     "VoucherName": "Flash Pricing ",
//     "VoucherDetails": [
//         {
//             "Type": "Couple",
//             "Amount": 2000
//         },
//         {
//             "Type": "Stag",
//             "Amount": 2000
//         },
//         {
//             "Type": "Table(for 6 pax)",
//             "Amount": 6000
//         }
//     ]
// }
// ]
//     };
//   }

//   async componentDidMount() {
//     let data = JSON.parse(localStorage.getItem("data"));
//     axios({
//       method: "GET",
//       url: `http://139.59.63.178:5454/api/customer/getallpublishedevents?Date=06-04-2022`,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "SEdRYnN6ZFFFRjpuc0oySXQ0NWt5",
//         AppVersion: "1.0.0",
//         AuthToken: "b8dbaf29-bc11-11ec-aa2b-dada996654c3",
//       },
//     }).then((res) => {
//       this.setState({ Details: this.state.Details });
//       console.log(res.data.Details)
//     });
//   }
//   render() {
//     return (
//       <>
//         <div className="container my-3">
//           <h1>----Events----</h1>
//         </div>
//         <div className="container">
//           {this.state.Details.map((element) => {
//             <div className="my-3" key={element.PublishedEventRef}>
//               <EventDetails
//                 cn={element.ClubName}
//                 en={element.EventName}
//                 d={element.Date}
//               />
//             </div>;
//           })}
//         </div>
//       </>
//     );
//   }
// }

export default function AllEvents() {
  const Details = [
    {
      PublishedEventRef: "9632df8a-b403-11ec-aa2b-dada996654c3",
      EventName: "COYOTE NIGHT AT CLUB TITO'S",
      EventReference: "eae00ef0-3c58-11eb-9234-010812182330",
      VoucherReference: "ed4b04f0-4f40-11eb-9234-010812182330",
      ClubID: 1,
      ClubName: "Tito's Club",
      Date: "06-04-2022",
      Thumbnail: "https://www.coppercodes.com/clients/Titos/event4.png",
      Timings: "6:00 PM to 3:00 AM",
      VouchersID: 7,
      VoucherName: "Flash Pricing ",
      VoucherDetails: [
        {
          Type: "Couple",
          Amount: 2000,
        },
        {
          Type: "Stag",
          Amount: 2000,
        },
        {
          Type: "Table(for 6 pax)",
          Amount: 6000,
        },
      ],
    },
    {
      PublishedEventRef: "dd4ff525-b403-11ec-aa2b-dada996654c3",
      EventName: "BOLLYTRONIC SATURDAY NIGHT AT BOLLYWOOD DISCOTHEQUE",
      EventReference: "eae09ef0-3c58-11eb-9234-010812182330",
      VoucherReference: "ed4b04f0-4f40-11eb-9234-010812182330",
      ClubID: 1,
      ClubName: "Tito's Club",
      Date: "06-04-2022",
      Thumbnail: "https://www.coppercodes.com/clients/Titos/event4.png",
      Timings: "9:00pm- 6:00am",
      VouchersID: 7,
      VoucherName: "Flash Pricing ",
      VoucherDetails: [
        {
          Type: "Couple",
          Amount: 2000,
        },
        {
          Type: "Stag",
          Amount: 2000,
        },
        {
          Type: "Table(for 6 pax)",
          Amount: 6000,
        },
      ],
    },
  ];
  let history = useHistory()
  return (
    <div className="container my-3">
      <div className="container my-3">
        {
          <ul className="list-group">
            <h3 style={{ "text-align": "center" }}> EVENT - LIST </h3>
            {Details.map((data) => (
              <li className="list-group-item" key={data.PublishedEventRef} >
                <div className="container my-3">
                  <strong>Event Name: </strong>
                  {data.EventName}
                </div>
                <div className="container my-3">
                  <strong>Club Name: </strong>
                  {data.ClubName}
                </div>
                <div className="container my-3">
                  <strong>Timings: </strong>
                  {data.Timings}
                </div>
                <div className="container my-3">
                  <strong>Voucher Name: </strong>
                  {data.VoucherName}
                </div>
                <button className="btn btn-dark" onClick={()=> {history.push('/logout')}}>Okay</button>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
