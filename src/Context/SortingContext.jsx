import { createContext, useState } from "react";

export const Sorting = createContext();

import React from 'react';

const SortingContext = ({children}) => {
    const [sortingType, setSortingType] = useState();
    
    return (
        <Sorting value={{sortingType, setSortingType}}>
            {children}
        </Sorting>
    );
};

export default SortingContext;


