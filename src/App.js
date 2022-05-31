
import './App.css';
import Navbar from './componentes/Navbar';
import Products from "./componentes/Products";
import imagen from './assets/imagen';
import Banner from "./componentes/Banner";
import Explanation from './componentes/Explanation';
import Imagenes from './assets/Imagenes';
import Instagram from './componentes/Instagram';
import Facebook from './componentes/Facebook';
import Whatsapp from './componentes/Whatsapp';
function App () {
  return (
    <div className="App">
      
      <h1>
      <Navbar/>
                   
        MÜNCHEN CASA DE CERVEZAS
        
      <h3>  </h3>
        <style>{"body { background-color: grey; }"}</style>
        
        <Products/>  
        
      </h1>
      <h3>
      <a
          className="App-link"
          href="https://www.instagram.com/munchencba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram/>
        </a>
        <a
          className="App-link"
          href="https://www.facebook.com/MunchenCBA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook/>
        </a>
        <a
          className="App-link"
          href="https://wa.me/543513023454"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp/>
        </a>
        
      </h3>
      <h2> By Serrano Matias
        <img src = {imagen.img1}/>
      </h2>
    </div>
  );
  
}

export default App;
