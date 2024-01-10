import React from 'react';

class UserClass extends React.Component {
constructor(props){
    super(props)
}
  render() {
    const {name} = this.props;
    return (
      <div className="user_card">
        <h2>{name}</h2>
        <h3>Location:Firozabad</h3>
        <h4>Contact:@pankaj7</h4>
      </div>
    );
  }
}

export default UserClass;
