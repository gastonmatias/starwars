import { AuthProvider } from "./auth"
import AppRouter from "./router/AppRouter"
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const StarWarsApp = () => {
  return (
    <>
    <AuthProvider>
      <ToastContainer/>
      <AppRouter/>
    </AuthProvider>
    </>
  )
}
export default StarWarsApp
