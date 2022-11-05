
import { Navigate, useNavigate } from 'react-router-dom'
import './welcome.css'

export const Welcome = () => {
    
    const navigate = useNavigate()

    const onEnter = () => {
        return  navigate('/home')
    }
  
    return (
    <>
    <div className="starwars">
        <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star star-img"/>
        <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars wars-img"/>
        <h2 className="byline" id="byline">May the Force be with you</h2>
    
    </div>

    <div className="welcome">
        <button className="btn btn-outline-warning" onClick={onEnter}>
            <span className='display-6'>Enter</span>
        </button>
    </div>
    </>
  )
}