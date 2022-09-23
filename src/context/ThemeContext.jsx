import { createContext, useReducer } from 'react';

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        case 'SHOW_MODAL':
            return {...state, modal: action.payload}
        default:
            return state
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: "#87A2FB",
        modal: {
            bool: false,
            src: ''
        }
    })

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }
    const showModal = (objct) => {
        dispatch({ type: 'SHOW_MODAL', payload: objct })
    }


    return (
        <ThemeContext.Provider value={{...state, changeColor, showModal }}>
            {children}
        </ThemeContext.Provider>
    )
}