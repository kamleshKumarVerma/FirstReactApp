export const addNumber = (number) => {
    return {
        type: "ADD",
        payload: number
    }
}

export const setName = (name) => {
    return {
        type: "SET_NAME",
        payload: name
    }
}