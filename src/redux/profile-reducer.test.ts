import profileReducer, {addPostActionCreator, deletePostAC} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: "..Hi", like: 5},
        {id: 2, message: "..Hello", like: 15}
    ],
}


it ('new post should be added', () => {
    // test data
    let action = addPostActionCreator('it')

    //action
    let newState = profileReducer(state, action)

    //expectation
   expect(newState.postsData.length).toBe(2)
})

it ('new message of post should be added', () => {
    // test data
    let action = addPostActionCreator('it')

    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.postsData[2].message).toBe('it')
})

it ('delete post', () => {
    // test data
    let action = deletePostAC(1)

    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.postsData.length).toBe(1)
})




