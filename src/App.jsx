import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import 'App.css'
import AboutPage from './assets/pages/AboutPage'
import HomePage from './assets/pages/HomePage';
import ContactUsPage from './assets/pages/ContactUsPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />
  },
  {
    path:'/about',
    element: <AboutPage />
  },
  {
    path:'/contactus',
    element: <ContactUsPage />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
