import { useEffect } from "react";
import { useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://chilling-vault-19684.herokuapp.com/addServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices];
}

export default useServices;