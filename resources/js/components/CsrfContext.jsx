import React, { createContext, useContext } from 'react';

const CsrfContext = createContext();

export const CsrfProvider = ({ children }) => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return (
        <CsrfContext.Provider value={csrfToken}>
            {children}
        </CsrfContext.Provider>
    );
};

export const useCsrf = () => useContext(CsrfContext);
