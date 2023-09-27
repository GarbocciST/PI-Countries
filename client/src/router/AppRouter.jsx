import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { DetailPage, FormPage, HomePage, LandingPage } from '../pages'
import { NavBar } from '../components'


export const AppRouter = () => {

  const {pathname} = useLocation();

  return (
    <>
      {
        (pathname !== '/') && <NavBar />
      }
      
      <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path='/home' element={<HomePage />} />
          
          <Route path='/detail/:id' element={<DetailPage />} />

          <Route path='/form' element={<FormPage />} />

          <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
