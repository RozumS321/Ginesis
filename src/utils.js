export const sleep = (time) => {
    return new Promise(res => setTimeout(res, time))
}