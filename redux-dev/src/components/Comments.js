import {connect} from "react-redux";
import {fetchComments} from '../redux';
import {useEffect} from "react";
import '../scss/comments.scss';
const Comments = ({fetchComments,loading,comments}) => {
    useEffect(() => {
        fetchComments()
    },[])
    const commentsItems = loading ? (<div> is loading...</div>):(comments.map(comment => {
        return ( <div key ={comment.id}>
                   <h3>{comment.name}</h3>
                   <p>{comment.email}</p>
                   <p>{comment.body}</p>
                 </div>)
        }))
    return(
        <div className='comments'>
            {commentsItems}
        </div>
    )
}

const mapStateToProps = ({comments}) => {
    return{
      comments:comments.items
    }

}
const mapDispatchToProps = {
    fetchComments
}

export  default connect(mapStateToProps,mapDispatchToProps)(Comments)