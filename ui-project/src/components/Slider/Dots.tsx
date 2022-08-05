function Dots({activeIndex , onclick, imageSlider}:any){
    return(
        <div className="all-dots">
            {imageSlider.map((slide:any,idx:number) =>
             <span key ={idx} className={`${activeIndex === idx ? "dot active" : "dot"}`} onClick={() => onclick(idx)}>

             </span>
            )}
        </div>
    )
}

export default Dots;