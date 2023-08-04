import {UserType} from '../HW8'

type ActionType =
    | {
    type: 'sort';
    payload: 'up' | 'down'
}
    | {
    type: 'check';
    payload: number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const compareSortFn = (a: UserType, b: UserType) => a.age < b.age ? 1 : -1
            return action.payload === 'down' ? [...state].sort((a: UserType, b: UserType) =>
                a.age < b.age ? -1 : 1) : action.payload === 'up' ?
                [...state].sort(compareSortFn) : state // need to fix
        }
        case 'check': {

            return state.filter(a=>a.age>=18) // need to fix
        }
        default:
            return state
    }
}
