import {useEffect, useState} from 'react'
import { projectAuth } from '../firebase/config'
import { useAuth } from './useAuth'

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuth()

    const login = async(email, password) => {
        setError(null)
        setIsPending(true)

        // sign user in
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            // logout dispatch action
            dispatch({ type: 'LOGIN', payload: res.user })

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

    return { login, error, isPending}
    
}