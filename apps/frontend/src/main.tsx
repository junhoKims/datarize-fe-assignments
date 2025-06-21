import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import { Home } from './pages/home'
import { Customer } from './pages/customer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
