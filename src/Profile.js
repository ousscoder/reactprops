import React from 'react'
import "./Profile.css"

const Profile = ({Fullname,Bio,Profession,handleName}) => {
 
  return (
    
    <div className='Pro'>

<h1>{Fullname} </h1>
<img src= "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Image" />
<p> {Bio} </p>
<p> {Profession} </p>
<button onClick={()=> handleName(Fullname)}> Sign Up Now </button>

    </div>

  )
}

Profile.defaultProps  = {

  Fullname : " ANONYME ",
  Bio : " FullStack Engineer ",
  Profession :" Anonyme ",

}

export default Profile;