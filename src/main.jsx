import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SongList from './songList.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <SongList/>
  </StrictMode>,
)
