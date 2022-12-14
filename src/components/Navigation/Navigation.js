export default function Navigation({setPage}){
    return(
        <div>
            <a href='#' onClick={()=>setPage('about')}>About Me</a>
            <a href='#portfolio' onClick={()=>setPage('portfolio')}>Portfolio</a>
            <a href='#contact' onClick={()=>setPage('contact')}>Contact</a>
        </div>

    )
}