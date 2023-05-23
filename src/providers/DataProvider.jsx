import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
    const [locations, setLocations] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const dataLoad = async () => {

            const res = await fetch(`https://travel-guru-server-lilac-chi.vercel.app/locations`)
            const locations = await res.json()
            // console.log(locations)
            setLocations(locations)
            setLoading(false)
        }

        dataLoad();
    }, [])

    const dataInfo = {
        locations,
        loading
    }
    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;