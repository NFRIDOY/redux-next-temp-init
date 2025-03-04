"use client";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";

interface StoreProviderProps {
    children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
