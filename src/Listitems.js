import React from 'react';
function Listitems(props){
    const items = props.items;
    const listitems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={
                    (e) =>{
                        props.setUpdate(e.target.value, item.key)
                    }
                }/>
           
            </p>
           
        </div>
    })
    return(
        <div>{listitems}</div>
    )
}
export default Listitems;