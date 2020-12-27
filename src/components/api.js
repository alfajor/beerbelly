export const fechEndpoint = async (url) => {
    const result = await fetch(url)
    return result.json()
}