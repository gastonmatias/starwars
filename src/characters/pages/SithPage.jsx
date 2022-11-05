import { CharacterList } from "../components/CharacterList"

export const SithPage = () => {
  
  

  return (
    <>

      <h1 className="display-4 text-white border-danger border-top border-bottom py-2 mb-4 text-center ">
        Siths
      </h1>

      <CharacterList side='Dark'/>

      
    </>
  )
}