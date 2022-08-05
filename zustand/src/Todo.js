import useStore from "./store";

const Todo = ({text,id}) => {

    let {removeTodo} =useStore(state => state);
    return(
        <div className="App"  style={{
            display:"flex",
            justifyContent:'space-between',
            padding:'10px',
            boxShadow:"1px 1px 15px #ddd",
            margin:"30px",
        }}>
            <div>
                {text}
                <button onClick={() => removeTodo(id)}>
                    remove
                </button>
            </div>

        </div>
    )
}

export default  Todo;