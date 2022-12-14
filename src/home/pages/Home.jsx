import { useNavigate } from 'react-router-dom'
import './home.css'

export const Home = () => {
  
  const navigate = useNavigate()

  const handleClickJedi = () => {
    navigate('/characters/jedi')
  }

  const handleClickSith = () => {
    navigate('/characters/sith')
  }
  
  return (
    <>
        
    <h1 className="display-4 text-white border-warning border-top border-bottom py-2 mb-4 text-center ">Which side fits to you? </h1>
      
    <div className="row justify-content-center mx-1">
      <div className="background-jedi text-white col-12 col-md-5 bg-light  border  border-3 border-primary mx-1 mb-2 mb-1 animate__animated  animate__fadeInLeft" >
            <div>
              <h1 className="display-5">Light Side</h1>
              <h3 className="display-7 fst-italic">Guardians of peace</h3>
              <p className="lead">For those who aspire to attain a state of inner tranquility through calmness and meditation while avoiding emotions affiliated with the dark side of the Force, such as anger and hatred</p>
            </div>
          
            <div className="container pt-4 pb-2">
              <h3 className="align-self-end text-center display-7 text-white">Want to see some references?</h3>
              <div className="btn btn-primary d-flex justify-content-center" onClick={handleClickJedi}>Jedis</div>
            </div>

      </div>
          {/*  background: #000 url('../../../assets/backgrounds/blackStars1.jpg'); */}
      <div className="background-sith col-12 col-md-5  text-white  border border-3 border-danger mx-1 mb-2 mb-1 animate__animated  animate__fadeInRight">
          <div className="container">
            <h1 className="display-5 fw-ligth">
              Dark Side
            </h1>
            <h3 className="display-7 fst-italic">Passional force users</h3>
            <p className="lead">For those who are empowered by their emotions, including hate, anger and greed. Obsessed with gaining power no matter the cost.</p>
          </div>

          <div className="container pt-4 pb-2">
            <h3 className="align-self-end display-7 text-white">Want to see some references?</h3>
            <div className="btn btn-danger d-flex justify-content-center" onClick={handleClickSith}>Siths</div>
          </div>
      </div>

    </div>
    </>
  )
}