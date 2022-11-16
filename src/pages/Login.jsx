import React from 'react';
import { Divider, Radio } from 'antd';
import { useState } from 'react';

const Login = () => {
    const [ram, setRam] = useState('');
    const rams = ['8gb', '32gb', '128gb']
    const onChange4 = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setRam(value);
    };
    return (
        <div>
            <Divider />
            <Radio.Group
                options={rams}
                onChange={onChange4}
                value={ram}
                optionType="button"
                buttonStyle="solid"
            />
            <Divider />
        </div>

    );
};

export default Login;