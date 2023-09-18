import { Navigate, Route, Routes } from 'react-router-dom'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path='/home' element={<HomePage />} />
        
        <Route path='/detail' element={<DetailPage />} />

        <Route path='/form' element={<FormPage />} />

        <Route path='/*' element={<Navigate to='/' />} />
  </Routes>
  )
}
