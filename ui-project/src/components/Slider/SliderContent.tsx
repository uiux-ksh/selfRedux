function SliderContent({activeIndex, imageSlider}:any){
    return(
        <section>
            {imageSlider.map((slide:any,idx:number) => (
                <div key ={idx} className={idx === activeIndex ? "slides active" : 'inactive'}>
                    <img src={slide.urls} className='slide-image'/>
                    <h2 className='slide-title'>{slide.title}</h2>
                    <h2 className='slide-text'>{slide.text}</h2>
                </div>
            ))}
        </section>
    )
}
export  default  SliderContent;