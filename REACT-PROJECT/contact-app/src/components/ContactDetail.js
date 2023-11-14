import React from "react";
import user from "../images/user.png";
import { Link, useParams  } from "react-router-dom";

const ContactDetail = (props) => {
  // Check if props.location and props.location.state exist
  //const contact = props.location?.state?.contact;
  const { id } = useParams();

  // Find the contact with the matching ID in the contacts array
  const contact = props.contacts.find((contact) => contact.id === id);

  // If contact is undefined, display an error message or redirect to another page
  if (!contact) {
    return (
      <div className="ui raised very padded text container segment">
        <p>Contact not found.</p>
        <div className="center-div">
          <Link to="/">
            <button className="ui button blue center">Back to Contact List</button>
          </Link>
        </div>
      </div>
    );
  }

  const { name, email } = contact;

  return (
    <div className="ui raised very padded text container segment">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
