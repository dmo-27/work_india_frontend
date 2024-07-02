import React from 'react'

import { Route, Router, Routes } from 'react-router-dom'

import ExploreOne from '../components/Explore/ExploreOne'
import AddItem from '../components/Explore/AddItem'

const CustRoute = () => {
  return (
  <>
 <Routes>
  <Route path="/" element={<ExploreOne/>}></Route>
  <Route path="/add" element={<AddItem/>}></Route>
 </Routes>
  </>
  )
}

export default CustRoute;