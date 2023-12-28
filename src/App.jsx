import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Picture from './display/Picture';
import Galleryimage from './customhook/gallery';
import CustomRoutes from './CustomRoutes/Customroutes';

function App() {
 return(
  <>
  <CustomRoutes/>
  </>
 )
}

export default App
