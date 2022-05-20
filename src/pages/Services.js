import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetcher.get('/service').then((res) => console.log(res));
    }, []);


    return (
        <div>
            <h1>This is Services page</h1>
            <h1>This is Services page</h1>
            <h1>This is Services page</h1>
            <h1>This is Services page</h1>
            <h1>This is Services page</h1>
            <h1>This is Services page</h1>
            <h1>This is Services page</h1>
            <h1>This is Services page</h1>
        </div>
    );
};

export default Services;