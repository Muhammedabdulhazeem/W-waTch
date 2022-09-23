import { useReducer, useState, useEffect } from 'react'
import {projectFirestore, timestamp} from '../firebase/config'

let initialState = {
    document: null,
    error: null,
    isPending: false,
    success: null,
}

const firestoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return {isPending: true, document: null, error: null, success: false}
        case 'ADD_DOCUMENT':
            return {isPending: false, document: action.payload, error: null, success: true}
        case 'DELETE_DOCUMENT':
            return {isPending: false, document: null, error: null, success: true}
        case 'ERROR':
            return {isPending: false, document: null, error: action.payload, success: false}
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    // collection ref
    const ref = projectFirestore.collection(collection)

    // dispatch if not cancelled
    const dispatchNotCancelled = (action) => {
        dispatch(action)
    }

    // add a document
    const addDocument = async (doc) => {
        dispatch({type: 'IS_PENDING'})

        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({ ...doc, createdAt})
            dispatchNotCancelled({type: 'ADD_DOCUMENT', payload: addedDocument})
        }
        catch (err) {
            dispatchNotCancelled({type: 'ERROR', payload: err.message})
        }

    }

    // delete document
    const deleteDocument = async (id) => {
        dispatch({type: 'IS_PENDING'})

        try {
            await ref.doc(id).delete()
            dispatchNotCancelled({type: 'DELETE_DOCUMENT'})
        }
        catch(err) {
            dispatchNotCancelled({type: 'ERROR', payload: err.message})
        }

    }

    useEffect(() => {
       return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response }
}