import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Rick from './components/rick';
import DB from './rickandmorty.json'; 




function App() {
  return (
    <React.Fragment>
      <div>
       <main className='Header'>
           <Header/>
        </main>
    </div>

    <div className='tarjetasFlex'>
       {DB.map(function(personaje, idx){
         return(
           <div key={idx}>
              < Rick datos= {personaje} />
           </div>
         )
       })}
           
      
    </div>







    <div className="apellidos">
       <h2>
           <Footer/>
        </h2>
    </div>


    </React.Fragment>
    
    
    

        
        
  );
}



export default App;
