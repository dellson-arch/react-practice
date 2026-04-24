import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './app/router/Approutes.jsx'
import { store } from './app/store/store.jsx'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
    
<Provider store={store}>
     <Approutes/>
</Provider>
)
