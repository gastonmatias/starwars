import { Col , Row  } from "react-bootstrap"


export const Home = () => {
  return (
    <>
        
      <h1 className="display-4 text-white border-warning border-top border-bottom py-2 mb-4 text-center ">Which side fits to you? </h1>
      
    {/* <div className="row justify-content-center"> */}
    <div className="row justify-content-center mx-1">
      <div className="col-12 col-md-5 bg-light  border  border-3 border-primary mx-1 mb-2 mb-1 animate__animated  animate__fadeInLeft" >
          {/* <div className=""> */}
            <div>
              <h1 className="display-5">Light Side</h1>
              <h3 className="display-7 fst-italic">Guardians of peace</h3>
              <p className="lead">For those who aspire to attain a state of inner tranquility through calmness and meditation while avoiding emotions affiliated with the dark side of the Force, such as anger and hatred</p>
            </div>
          
            <div className="align-self-end container bg-primary mb-3">
              <h3 className="align-self-end display-7 text-white">Want too see some references?</h3>
              <a className="navlink text-white ">Jedis</a>
              {/* <button className="btn btn-warning"> Jedis</button> */}
            </div>
          {/* </div> */}

      </div>
          
      <div className="col-12 col-md-5 bg-light  border border-3 border-danger mx-1 mb-2 mb-1 animate__animated  animate__fadeInRight">
          <div className="container">
            <h1 className="display-5 fw-ligth">Dark Side</h1>
            <h3 className="display-7 fst-italic">Passional force users</h3>
            <p className="lead">For those who are empowered by their emotions, including hate, anger and greed. Obsessed with gaining power no matter the cost.</p>
          </div>

          <div className="container d-flex align-self-end bg-danger">
            <h3 className="display-7 text-white align-self-end">Want too see some references?</h3>
            <button className="btn btn-">Siths</button>
          </div>
      </div>

    {/* </div> */}
    </div>
    </>
  )
}