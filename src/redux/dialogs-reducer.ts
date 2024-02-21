const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}


let initialState = {
    dialogsData: [
        {id: 1, name: "Valera",},
        {id: 2, name: "Dimych"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Nik"},
    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: "hi"},
        {id: 2, message: "hello"},
        {id: 3, message: "yo"},
        {id: 4, message: "??"},
    ] as Array<MessageType>,
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {id: 6, message: body}
                ],
            }
        default:
            return state

    }
}
// const dialogsReducer = (state: any = initialState, action: any) => {
//     switch (action.type) {
//         case UPDATE_NEW_MESSAGE_BODY:
//             let newStateCopy = {...state}
//             newStateCopy.newMessageBody = action.body
//             return newStateCopy
//         case SEND_MESSAGE:
//             let stateCopy = {...state}
//             let body = stateCopy.newMessageBody
//             stateCopy.newMessageBody = ''
//             stateCopy.messagesData.push({id: 6, message: body})
//             return stateCopy
//         default:
//             return state
//     }
// }


type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({
    type: SEND_MESSAGE,
    newMessageBody
})


export default dialogsReducer;