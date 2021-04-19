import React from 'react';
export interface StateContextType {}

const AppContext = React.createContext<StateContextType>(null!);

export default AppContext;
