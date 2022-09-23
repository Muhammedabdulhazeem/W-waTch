import {useEffect, useState} from 'react'
import { projectAuth } from '../firebase/config'
import { useAuth } from './useAuth'

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuth()

    const logout = async() => {
        setError(null)
        setIsPending(true)

        // sign user out
        try {
            await projectAuth.signOut()

            // logout dispatch action
            dispatch({ type: 'LOGOUT' })

            // update state
            if (!isCancelled) {
                setError(null)
                setIsPending(false)
            }
        }
        catch (err) {
            if (!isCancelled) {
                setError(err.message)
                console.log(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { logout, error, isPending}
    
}