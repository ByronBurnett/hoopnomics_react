import { React } from "react";
import { useReducer, createContext, useEffect } from "react";




export const UserContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload}
        case 'LOGOUT':
        return {user: null}
        default:
            return state
    }
}

export function UserContextProvider({children}) {
    
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
  
    //check Initial Auth Status checks for Token
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
      
      if (user) {
        dispatch({type: 'LOGIN', payload: user})
      }

    }, [])

    console.log('UserContext state:', state)
    
    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}