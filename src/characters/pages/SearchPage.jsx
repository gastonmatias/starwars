import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { toast } from 'react-toastify';

import { useForm } from "../../hooks/useForm";
import { CharacterCard } from "../components"
import { getCharactersByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)
  const characters = getCharactersByName(q)

  const showSearch = (q==='')
  const showError = (q.length>1) && (characters.length===0)

  const {formState, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if(formState.searchText.trim().length <=1) return;
    if(formState.searchText.trim().length <=1) {
      toast.info('Please, type at least 2 chars', {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        return;
    };
  
    //* navega a la mismisima pagina actual, solo cambia el qery params 
    navigate(`?q=${formState.searchText}`)
  }

  return (
    <>
    
    <h1 className="display-4 text-white border-warning border-top border-bottom py-2 mb-4 text-center ">
      Search
    </h1>

    <div className="row">

      <div className="col-5">
        <h4 className="text-white">Searching</h4>
        <hr/>
        <form onSubmit={onSearchSubmit}>
          <input
            className="form-control" name="searchText" autoComplete="off"
            type="text" placeholder="Search a character" 
            value={formState.searchText} onChange={onInputChange}
          />

          <button className="btn btn-outline-primary mt-2">
            Search
          </button>

        </form>
      </div>

      <div className="col-7">
        <h4 className="text-white">Results</h4>
        <hr/>


        <div style={{display: showSearch ? '' : 'none'}}
             className="alert alert-primary animate__animated animate__fadeIn animate__fast">
          Search a character
        </div>
      
        <div style={{display: showError ? '' : 'none'}}
             className="alert alert-danger animate__animated animate__fadeIn animate__fast" >
          No character with <b>{q}</b>
        </div>

        {
          characters.map((e) =>  (
            <div className="mb-2" key={e.id}>
              <CharacterCard key={e.id}{...e} />
            </div>
          ))
        }
        
      </div>
    
    </div>{/* // FIN ROW */}
    </>
  )
}   














