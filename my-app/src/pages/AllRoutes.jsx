import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import RoomPage from './RoomPage'
import RoyalRoom from './RoyalRoom'
import BlogPost from './BlogPost'
import ListUser from './ListUser'
import HeritageRoom from './HeritageRoom'
import CreateBlog from './CreateBlog'
import ScrollToTop from '../componants/ScrollToTop'
import Gallery from '../componants/Gallery'

const AllRoutes = () => {
  return (
    <div>
      <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Admin />} />
            <Route path='/dashboard' element={<PrivateRoute><ListUser /></PrivateRoute>} />
            <Route path='/rooms/deluxe' element={<RoomPage />} />
            <Route path='/rooms/grand-royal' element={<RoyalRoom />} />
            <Route path='/rooms/grand-heritage' element={<HeritageRoom />} />
            <Route path='/blogs' element={<BlogPost />} />
            <Route path='/create-blog' element={<PrivateRoute> <CreateBlog /></PrivateRoute>} />
            <Route path='/gallery' element={<Gallery />} />
        </Routes>
    </div>
  )
}

export default AllRoutes