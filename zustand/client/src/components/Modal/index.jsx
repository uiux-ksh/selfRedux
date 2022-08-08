
function Modal({children,isOpen,setIsOpen}) {
    return(
       <>
           {isOpen && (
               <div className="Modal">
                   <div className="con">
                       {children}
                       <span className="close" onClick={() => setIsOpen(false)}>X</span>
                   </div>
               </div>
           )}
       </>
    )
}
export default  Modal;