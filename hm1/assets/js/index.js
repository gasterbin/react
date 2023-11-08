const root = ReactDOM.createRoot(document.getElementById("root"));

const user = {
  firstName: "Jane",
  lastName: "Doe",
  gender: "female",
  imgSrc: "assets/pic1.png",
  followers: 1200,
  likes: 3895,
  reposts: 365,
};

root.render(<UserCard user={user} />);

function UserCard({ user }) {
  const determineColor = () => {
    if (user.gender === "male") {
      return "#576B4C";
    } else if (user.gender === "female") {
      return "#66445B";
    } else {
      return "black";
    }
  };

  const userCardBeforeStyle = {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    height: "36%", 
    width: "100%", 
    borderRadius: "24px 24px 0 0",
    backgroundColor: determineColor(),
  };

  return (
    <>
      <div style={{ position: "relative" }} className="user-card">
        <div style={userCardBeforeStyle}></div>
        <div style={{ backgroundColor: determineColor() }} className="image">
          <img src={user.imgSrc} alt={user.firstName} className="user-img" />
        </div>
        <div className="text-data">
          <h2 className="name">
            {user.firstName} {user.lastName}
          </h2>
          <h2 className="job">Youtube & Blogger</h2>
        </div>
        <div className="media-buttons">
          <a
            style={{ backgroundColor: determineColor() }}
            href="#"
            className="link"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            style={{ backgroundColor: determineColor() }}
            href="#"
            className="link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            style={{ backgroundColor: determineColor() }}
            href="#"
            className="link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            style={{ backgroundColor: determineColor() }}
            href="#"
            className="link"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
        <div className="buttons">
          <button
            style={{ backgroundColor: determineColor() }}
            className="button"
          >
            Subscribe
          </button>
          <button
            style={{ backgroundColor: determineColor() }}
            className="button"
          >
            Message
          </button>
        </div>
        <div className="analitics">
          <div className="data">
            <i className="bx bx-user"></i>
            <span className="number">{user.followers}</span>
          </div>
          <div className="data">
            <i className="bx bx-heart"></i>
            <span className="number">{user.likes}</span>
          </div>
          <div className="data">
            <i className="bx bx-share"></i>
            <span className="number">{user.reposts}</span>
          </div>
        </div>
      </div>
    </>
  );
}
