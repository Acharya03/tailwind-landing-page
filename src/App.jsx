import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <div className="bg-red-700 min-h-screen px-6 py-3 flex flex-col">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
