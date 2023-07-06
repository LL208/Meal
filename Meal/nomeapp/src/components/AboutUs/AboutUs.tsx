import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div className="container-fluid p-5" style={{backgroundColor:"grey"}}>
        <section
          id="hero"
          className="hero d-flex align-items-center section-bg"
        >
          <div className="container ">
            <div className="row justify-content-between gy-5">
              
              <div className="col-lg-5 text-center text-lg-start">
                <img
                  src="https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <h2 color="white">About us</h2>
                <p>Enjoy Your Healthy Delicious Food</p>
                <Link to="/">Home</Link>
                <Link to="/menu">Sfoglia il menu</Link>

                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
