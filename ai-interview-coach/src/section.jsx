 function Section({isOpen ,onshow,onhide,title}){
    return (

        <>
        <h1>{title}</h1>
        {isopen ?(
            <>

<button onclick={onhide}>open</button>
<p>hhhh</p>
</>
        ) :(
           <button onclick={onshow}>ope</button> 
        )}
        </>    
        )}
        export default Section;
 
       