import {useState} from 'react'
import Main from "./components/Main";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer"
function App() {
  const [page, setPage]= useState('about')

  return (
   <>
   <Navigation setPage={setPage} />
   <Main page={page}/>
   <Footer />
   </>
  );
}

export default App;
