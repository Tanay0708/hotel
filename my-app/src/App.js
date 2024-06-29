
import AllRoutes from './pages/AllRoutes';
import Home from './pages/Home';
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <div >
      <Analytics />
   <AllRoutes />
    </div>
  );
}

export default App;
