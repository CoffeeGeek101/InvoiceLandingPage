import { Provider } from 'react-redux'
import HeroMain from './components/Hero/HeroMain'
import Navbar from './components/Navbar'
import './index.css'
import { store } from './redux/store'

function App() {

  return (
    <Provider store={store}>
    <div className='w-[100vw] h-[100vh] flex flex-col font-Ralway'>
      <Navbar/>
      <HeroMain/>
    </div>
    </Provider>
  )
}

export default App
