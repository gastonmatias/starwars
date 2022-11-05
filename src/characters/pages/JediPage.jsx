import { CharacterList } from "../components/CharacterList"

export const JediPage = () => {
  
  

  return (
    <>
      

      <h1 className="display-4 text-white border-primary border-top border-bottom py-2 mb-4 text-center ">
        Jedis
      </h1>

      <CharacterList side='Light'/>

      
    </>
  )
}