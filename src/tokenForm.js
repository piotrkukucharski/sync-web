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

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Token:
                <input type="text" value={token} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
};
export default TokenForm;
