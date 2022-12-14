import About from "../../pages/AboutMe";
import Portfolio from "../../pages/Portfolio";
import Contact from "../../pages/Contact";


export default function Main({page}){
    function displayCurrentPage(){
        if(page ==='about'){
            return(
                <About />
            ) 
        }
        if(page ==='portfolio'){
            return(
                <Portfolio />
            ) 
        }
        if(page ==='contact'){
            return(
                <Contact />
            ) 
        }
    }
    return(
        <>
       {displayCurrentPage()}
       </>
    )
}