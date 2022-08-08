import obj1 from "../../image/obj1.png"
import obj2 from "../../image/obj2.png"





function Banner() {


    return(
        <div className="Banner">
            <p>
                <span>
                    <img src={obj2} alt=""/>
                </span>
            </p>

                <div className="bb">
                    <img src={obj1} alt=""/>
                </div>

        </div>

    )
}
export default  Banner;