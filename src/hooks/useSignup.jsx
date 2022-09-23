import {useState, useEffect} from 'react'
import { projectAuth } from '../firebase/config'
import { useAuth } from './useAuth'

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuth()


    const signup = async(email, password, username) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if(!res) {
                throw new Error('Could not complete signup')
            }

            // add display name to user
            await res.user.updateProfile({ displayName: username })

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            // update state
            if (!isCancelled) {
                setError(null)
                setIsPending(false)
            }

        }
        catch(err) {
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

    return { error, isPending, signup }

}