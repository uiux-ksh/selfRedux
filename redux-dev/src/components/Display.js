import {connect} from "react-redux";

const Display = ({count,color}) => {
    return(
        <div>{count},{color}</div>

    )
}

const mapStateToProps = ({subscribers}) => {
    return{
        count:subscribers.count,
        color:subscribers.color
    }
}
export  default connect(mapStateToProps)(Display)