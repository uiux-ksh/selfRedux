import '../scss/Subscribers.css';
import {connect,useDispatch,useSelector} from "react-redux";
import {addSubscriber, changeColor} from "../redux";

const  Subscribers = ({count,addSubscriber ,color,changeColor }) => {
    return(
           <div className='items' style={{color:color}}>
               
               <h2>구독지 수 : {count}</h2>
               <button onClick={() =>  addSubscriber()}>구독하기!</button>
               <button onClick={() => changeColor()}>색상변경</button>
           </div>
    )
}

const mapStateToProps = ({subscribers}) => {
    // console.log(subscribers);
    return {
        count:subscribers.count,
        color:subscribers.color
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         addSubscriber:() => dispatch(addSubscriber())
//     }
// }
const mapDispatchToProps = {
    addSubscriber,
    changeColor
    // addSubscriber:addSubscriber 키와 벨류가 같으면 생략가능한ES6
}

export  default connect(mapStateToProps,mapDispatchToProps)(Subscribers);