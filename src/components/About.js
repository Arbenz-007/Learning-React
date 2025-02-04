import UserContext from "../utils/UserContext";
import User from "./User.js";
import UserClass from "./UserClass.js";
import {Component} from "react";

// const About = () => {
//   return (
// <div className="about-page">
//   <div className="about-header">
//     <h1>About Us</h1>
//     <h2>
//       Welcome to Foodie Buddy - Your Ultimate Food Ordering Destination!
//     </h2>
//   </div>

//   <div className="about-content">
//     <p>
//       At Foodie Buddy, we believe that good food is the key to a happy life.
//       Our mission is to bring you the best culinary experiences right to
//       your doorstep. Whether you're craving a gourmet meal, a quick snack,
//       or something sweet to satisfy your dessert cravings, we've got you
//       covered.
//     </p>

//     <h3>Our Story</h3>
//     <p>
//       Foodie Buddy was born out of a passion for food and a desire to make
//       dining convenient and enjoyable for everyone. Founded in 2023 by a
//       group of food enthusiasts, we've grown from a small local service to a
//       trusted name in the food delivery industry. Our journey has been
//       fueled by our commitment to quality, customer satisfaction, and a love
//       for all things delicious.
//     </p>

//     <h3>What We Offer</h3>
//     <ul>
//       <li>
//         <strong>Wide Variety:</strong> Explore a diverse menu featuring
//         cuisines from around the world.
//       </li>
//       <li>
//         <strong>Fresh Ingredients:</strong> We partner with the best local
//         restaurants and chefs to ensure every dish is made with fresh,
//         high-quality ingredients.
//       </li>
//       <li>
//         <strong>Easy Ordering:</strong> Our user-friendly platform makes it
//         simple to browse, order, and track your food in real-time.
//       </li>
//       <li>
//         <strong>Fast Delivery:</strong> Enjoy quick and reliable delivery
//         services, so your food arrives hot and fresh.
//       </li>
//       <li>
//         <strong>Customization:</strong> Customize your meals to suit your
//         taste and dietary preferences.
//       </li>
//     </ul>

//     <h3>Our Commitment</h3>
//     <p>
//       At Foodie Buddy, we are committed to providing an exceptional dining
//       experience. We continuously strive to improve our services, expand our
//       menu options, and support our local communities. Your satisfaction is
//       our top priority, and we are always here to listen to your feedback
//       and make your experience even better.
//     </p>

//     <h3>Join the Foodie Buddy Family</h3>
//     <p>
//       We invite you to join the Foodie Buddy family and discover a world of
//       flavors at your fingertips. Whether you're ordering for yourself, your
//       family, or a group of friends, we promise to deliver a memorable
//       dining experience every time.
//     </p>

//     <p className="closing-message">
//       Thank you for choosing Foodie Buddy. We look forward to serving you!
//     </p>
//   </div>
// </div>
//     // <div>
//     //   <h1>About</h1>
//     //   <h2>THis is food ordering website</h2>
//     //   {/* <User name={"Rayan (function)"}/> */}
//     //   <UserClass name={"Rayan (class )"} location={"dehradun(class)"}/>
//     // </div>
//   );
// };

class About extends Component {
  constructor(props){
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");

   //Api call  is made here  after componenet is rendered and then it is re-rendered
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
          </UserContext.Consumer>

        </div>
        <h2>THis is food ordering website</h2>
        <UserClass name={"Rayan (class )"} location={"Dhanbad(class)"} />      </div>
    );
  }
}

 /* 
 -Parent constructor
 -parent render

   -Rayan Constructor
   -Rayan render

   -Elon contructor
   -Elon render

   <DOM UPDATED - IN SINGLE BATCH>

   -Rayan componentDidMount
   -Elon componentDidMount

-Parend componentDidMount

*/
export default About;
