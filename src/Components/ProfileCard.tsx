// import './App.css';

const Profile = () => {
  const styles={
    backgroundColor: 'blue',
    borderRadius: '10px',
    padding: '6px',
    color:"white", 
    border:"2px solid blue",
    display: 'flex',
    fontSize:"1.2rem",
    fontWeight:"900",
    marginTop:"0.4rem",
    marginLeft:"8rem",
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }

  const text ={
    fontSize:"1.4rem",
    fontWeight:"400",
    marginLeft:"5rem",
    
  }
  return (
    <div className="Main-container">
      <ProfileCard
     
        Name="Ranjit K.C."
        Age={19}
        Gender="Male"
        Profession="Student"
        OtherInfo={
          <div>
            <h2>Address: Biruwa-8, Syangja, Nepal</h2>
            <h2>Email: ranjitKC292@gamil.com</h2>
          </div>
        }
      >
        <span>
          <h2 style={text}>"For Other Information"</h2>
          <button style={styles}>Click Here</button>
        </span>
      </ProfileCard>

      <ProfileCard
        Name="Sameer K.C."
        Age={15}
        Gender="Male"
        Profession="Student"
        OtherInfo={
          <div>
            <h2>Address: Biruwa-1, Syangja, Nepal</h2>
            <h2>Email: sameerKc12@gamil.com</h2>
          </div>
        }
      >
        <span>
          <h2 style={text}>"For Other Information"</h2>
          <button style={styles}>Click Here</button>
        </span>
      </ProfileCard>
      <ProfileCard
        Name="Mamata K.C."
        Age={40}
        Gender="Female"
        Profession="Housewife"
        OtherInfo={
          <div>
            <h2>Address: Biruwa-1, Syangja, Nepal</h2>
            <h2>Email: mamata233@gamil.com</h2>
          </div>
        }
      >
        <span>
          <h2 style={text}>"For Other Information"</h2>
          <button style={styles}>Click Here</button>
        </span>
      </ProfileCard>
    </div>
  );
};

export default Profile;

function ProfileCard(props: any) {
  const { Name, Age, Gender, Profession, OtherInfo, children } = props;
  return (
    <div
    className="main-content">
      <h2>Name: {Name}</h2>
      <h2>Age: {Age}</h2>
      <h2>Gender: {Gender}</h2>
      <h2>Profession: {Profession}</h2>
      {OtherInfo}
      <div
      >{children}</div>
    </div>
  );
}