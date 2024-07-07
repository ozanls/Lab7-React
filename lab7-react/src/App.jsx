import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import ServiceList from './components/servicelist'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <ServiceList />
      </main>
      <Footer />
    </>
  )
}

export default App
