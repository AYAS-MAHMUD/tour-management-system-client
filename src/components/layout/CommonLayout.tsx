
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'




const CommonLayout = () => {
  return (
    <div>
        <Navbar/>
        <main className='min-h-screen'>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default CommonLayout