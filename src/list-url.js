import React, {useEffect, useState} from 'react';

const ListUrl = (props) => {

    const [urls, setUrls] = useState([]);
    const [listUrls, setListUrls] = useState('');


    useEffect(() => {
        setListUrls(urls.map((item, i) => {
            return (<li key={i}><a href="{item.url}">{item.url}</a></li>);
        }));
    }, [urls]);

    const sync = () => {
        return fetch(`https://sync-url.ey.r.appspot.com/url?token=${props.token}&offset=0&limit=100`)
            .then(res => res.json())
            .then(data => {
                setUrls(data);
            })
        ;
    };

    return (
        <div>
            <button onClick={sync}>Sync</button>
            <ul>
                {listUrls}
            </ul>
        </div>
    );
};
export default ListUrl;
