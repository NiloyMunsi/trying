import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data) )
    }, []);
    const { serviceId } = useParams();

    return (
        <div>
            <h1>Details of { serviceId}</h1>
        </div>
    );
};

export default Details;