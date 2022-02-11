import React, {useState} from 'react';

const Form = ({filter}) => {
    const [data, setData] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const findBtn = (e) => {
        e.preventDefault();
        filter(data);
    }

    return (
        <div>
            <form>
                <label> Name: <input type="text" name={'name'} value={data.name} onChange={formHandler}/></label>
                <label> Username: <input type="text" name={'username'} value={data.username} onChange={formHandler}/></label>
                <label> Email: <input type="text" name={'email'} value={data.email} onChange={formHandler}/></label>
                <button onClick={findBtn}>Find</button>
            </form>
        </div>
    );
};

export default Form;