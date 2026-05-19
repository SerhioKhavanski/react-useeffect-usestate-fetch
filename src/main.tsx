
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import { SidebarMenu } from './components/SidebarMenu.tsx'
import { TracksList } from './components/TracksList.tsx'
import { TrackDetail } from './components/TrackDetail.tsx'
import { Footer } from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(<MainPage />)

function MainPage(){
    return <div>
            <Header />
            <SidebarMenu />
            <div className='player'>
                <TracksList />
                <TrackDetail />
            </div>
            <Footer />
        </div>
}

