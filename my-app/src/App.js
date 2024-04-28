import './App.css';
import Amenities from './componants/Amenities';
import Blogs from './componants/Blogs';
import Footer from './componants/Footer';
import Hero from './componants/Hero';
import Hotels from './componants/Hotels';
import Navbar from './componants/Navbar';
import Testimonies from './componants/Testimonies';




function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Hotels />
    <Amenities />
    <Testimonies />
    <Blogs />
    <Footer />
    </div>
  );
}

export default App;
