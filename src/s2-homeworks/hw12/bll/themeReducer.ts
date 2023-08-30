
export type ThemeStateType = {themeId:number}
const initState:ThemeStateType = {
    themeId: 1,
}
export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeId>): {themeId:number} => {
   // fix any
    switch (action.type) {
        case "SET_THEME_ID":{
            return {
                ...state, themeId:+action.id
            }
        }
        // дописать
        default:
            return state
    }
}
export const changeThemeId = (id: number): {type:string, id: number} => ({ type: 'SET_THEME_ID', id }) as const // fix any
