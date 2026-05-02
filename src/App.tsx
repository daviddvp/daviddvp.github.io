import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Models from './pages/Models/Models'
import Blog from './pages/Blog/Blog'
import ArticlePage from './pages/Article/ArticlePage'
import Contact from './pages/Contact/Contact'
import BuyingGuide from './pages/BuyingGuide/BuyingGuide'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/modelos"       element={<Models />} />
          <Route path="/blog"          element={<Blog />} />
          <Route path="/blog/:slug"    element={<ArticlePage />} />
          <Route path="/guia-de-compra" element={<BuyingGuide />} />
          <Route path="/contacto"      element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}
