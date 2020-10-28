import { useReducer } from "react";
import storage from "local-storage-fallback";

const darkModeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            storage.setItem("isDark", !state.isDark);
            return {
                isDark: !state.isDark,
            };
        default: {
            return state;
        }
    }
};

const useGlobalState = () => {
    const [state, dispatch] = useReducer(darkModeReducer, {
        isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark")) : false
    });

    return { state, dispatch };
};

export default useGlobalState;