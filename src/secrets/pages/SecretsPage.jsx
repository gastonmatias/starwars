import { CarouselSecrets } from "../components/Carousel"

export const SecretsPage = () => {
  return (
    <>
    <h1 className="display-4 text-white border-warning border-top border-bottom py-2 mb-4 text-center ">
      Ready to know the most powerful secrets? 
    </h1>

    {/* <div className="d-flex justify-content-center" style={{"max-width": "90vh"}}> */}
    {/* <div className="d-flex justify-content-center" > */}
    <div className="row" >
      <CarouselSecrets className='col-4'/>
    </div>

    </>
  )
}