export default function Menu() {
  return (
    <>
      <h1 className="title menu-header">Our Menu</h1>
      <div className="menu">
        <div className="courses">
          <img src="../images/starters.jpg" className="menu-img" />
          <h3 className="subtitle menu-title">Starters</h3>
        </div>
        <div className="courses">
          <img src="../images/main-course.jpg" className="menu-img" />
          <h3 className="subtitle menu-title">Main Course</h3>
        </div>
        <div className="courses">
          <img src="../images/dessert.jpg" className="menu-img" />
          <h3 className="subtitle menu-title">Desserts</h3>
        </div>
        <div className="courses">
          <img src="../images/drinks.jpg" className="menu-img" />
          <h3 className="subtitle menu-title">Drinks</h3>
        </div>
      </div>
    </>
  );
}
