import React, { createContext, useState } from "react";

export const Sorting = createContext();

const SortingContext = ({children}) => {
    const [sortingType, setSortingType] = useState("");
    
    return (
        <Sorting value={{sortingType, setSortingType}}>
            {children}
        </Sorting>
    );
};

export default SortingContext;


