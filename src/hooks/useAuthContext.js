import { UserContext } from "../Context/UserContext";
import { useContext } from 'react'

export const useAuthContext = () => {
const context = useContext(UserContext)

if (!context) {
    throw Error('useAuthContext must be used inside a UserContextProvider')
}


return context

}