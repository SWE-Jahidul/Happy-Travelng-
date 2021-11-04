import React, { useState } from 'react';
import { useEffect } from 'react';

const usePopularDestination = () => {
const [ populardestinations , setPopulardestination] = useState([]);

    useEffect(() => {
       fetch("./populardes.json")
       .then(res => res.json())
       .then(data => 
        {
            console.log(data);
            setPopulardestination(data)
     }) },[])


    return (
        [populardestinations ]
    );
};

export default usePopularDestination;