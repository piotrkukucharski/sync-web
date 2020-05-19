import React, {useEffect, useState} from 'react';

const ListUrl = (props) => {
    const [token,setToken]=useState(props.token);

    const [urls,setUrls]=useState([]);

    const listItem = (props) =>{
        return <li>{props.value}</li>;
    };

    const listUrls = urls.map((item)=>{
        return (<listItem value={item.url}/>);
    });

    return (
        <div>
            <button>Sync</button>
            <ul>
                {listUrls}
            </ul>
        </div>
    );
};
export default ListUrl;
