import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY } from './_calendar'

export function submitEntry({ Key, entry }) {
    return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
        [Key]: entry
    }))
}

export function removeEntry( key ) {
    AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    })
}