// import storage from "local-storage-fallback";

// export const initialState = {
//     isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark")) : false
// }

// export const modeReducer = (state, action) => {
//     switch (action.type) {
//         case "TOGGLE_DARK_MODE":
//             return {
//                 ...state,
//                 isDark: !state.isDark,
//             };
//         default: {
//             throw new Error('Something with action went wrong.')
//         }
//     }
// };