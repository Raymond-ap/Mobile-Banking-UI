export const SUBSCRIPTIONS = [
  {
    type: "subscription",
    list: [
      {
        title: "spotify",
        img: require("../assets/images/spotify.png"),
        amount: "$30",
        startDate: "Nov 1, 2019",
        endDate: "Nov 30, 2019",
      },
      {
        title: "netflix",
        img: require("../assets/images/netflix.jpg"),
        amount: "$400",
        startDate: "Jun 4, 2018",
        endDate: "Feb 30, 2019",
      },
      {
        title: "webflow",
        img: require("../assets/images/webflow.png"),
        amount: "$290",
        startDate: "Nov 1, 2019",
        endDate: "Nov 30, 2019",
      },
    ],
  },
  {
    type: "spendings",
    amount: "$100,000",
  },
];

export const INCOMING_TRANSACTIONS = [
  {
    type: "inc",
    label: "Ibrahim",
    date: "Nov 1, 2019",
    amount: "$30",
  },
  {
    type: "exp",
    label: "isaic",
    date: "oct 21st, 2022",
    amount: "$256",
  },
  {
    type: "exp",
    label: "spotify",
    date: "Nov 1, 2019",
    amount: "$50.78",
  },
  {
    type: "inc",
    label: "cairo bank",
    date: "jun 21st, 2022",
    amount: "$1000",
  },
  {
    type: "exp",
    label: "webflow",
    date: "oct 21st, 2022",
    amount: "$256",
  },
];

export const FRIENDS = [
  {
    name: "Ramy",
    handle: "@rammy201",
    img: require("../assets/images/img1.jpg"),
    email: "ramy@gmail.com",
  },
  {
    name: "Sara",
    handle: "@sarado",
    img: require("../assets/images/img2.jpg"),
    email: "sara@gmail.com",
  },
  {
    name: "Ibrahim",
    handle: "@ibrahima",
    img: require("../assets/images/img3.jpg"),
    email: "ibrahim@gmail.com",
  },
  {
    name: "Dr. Frank",
    handle: "@frankhere",
    img: require("../assets/images/img4.png"),
    email: "frank@gmail.com",
  },
];

export const TABS = ["Paycheck", "Bussiness", "Personal"];
