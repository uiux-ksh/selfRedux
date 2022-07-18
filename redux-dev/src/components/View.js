import '../scss/Subscribers.css';
import {connect,useDispatch,useSelector} from "react-redux";
import {addView} from "../redux";
import {useState} from "react";

const  View = ({count,addView}) => {

    const [number ,setNumber]= useState(1);

    return(
        <div className='items'>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <h2>조회 수 : {count}</h2>
            <button onClick={() =>  addView(number)}>조회하기!</button>

        </div>
    )
}

const mapStateToProps = ({views}) => {
    // console.log(views);
    return {
        count:views.count

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         addSubscriber:() => dispatch(addSubscriber())
//     }
// }
const mapDispatchToProps = {
    addView:(number) => addView(number)

    // addSubscriber:addSubscriber 키와 벨류가 같으면 생략가능한ES6
}

export  default connect(mapStateToProps,mapDispatchToProps)(View);