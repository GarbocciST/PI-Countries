import { Navigate, Route, Routes } from 'react-router-dom'
import { DetailPage, FormPage, HomePage, LandingPage } from '../pages'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path='/home' element={<HomePage />} />
        
        <Route path='/detail/:id' element={<DetailPage />} />

        <Route path='/form' element={<FormPage />} />

        <Route path='/*' element={<Navigate to='/' />} />
  </Routes>
  )
}
