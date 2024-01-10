import React from 'react';
import User from './User';
import UserClass from './UserClass';

const ContactUs = () => {
  return (
    <div>
      <h1>This is contact us page</h1>
      <User name ={"Pankaj Kumar (function)"}/>
      <UserClass name = {"Pankaj Kumar (Class)"}/>
    </div>
  )
}

export default ContactUs
