import Topbar from "./components/Topbar"
import Home from "./pages/Home"
import Access from "./components/Access"
import HowItWorks from "./components/HowItWorks"
import Concepts from "./components/Concepts"
import Subscription from "./components/Subscription"
import Premium from "./components/Premium"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Home/>
      <Access/>
      <HowItWorks/>
      <Concepts/>
      <Subscription/>
      <Premium/>
      <Footer/>
    </div>
  );
}

export default App;
