const Profile = ({ fullName, bio, profession, imgSrc }) => {
    return (
      <div>
        <img src={imgSrc} alt={fullName} width={100}/>
        <h4>{fullName}</h4>
        <p>{bio}</p>
        <p>{profession}</p>
      </div>
    )
  }
  
  export default Profile