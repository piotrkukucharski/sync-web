import React, {useState} from 'react';

const TokenForm = (props) => {
    const [token,setToken]=useState(props.token);

    const handleChange=(event)=>{
        setToken(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.changeTokenHandler(token);
    };

    const generateToken = () => {
        return fetch('https://sync-url.ey.r.appspot.com/token')
            .then(res => res.json())
            .then(data => {
                setToken(data.token);
            })
        ;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Token:
                    <input type="text" value={token} onChange={handleChange}/>
                </label>
                <button type="submit">Save</button>
            </form>
            <button onClick={generateToken}>Get Token</button>
        </div>
    );
};
export default TokenForm;
