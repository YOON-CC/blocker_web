export function deleteCookie(name: string) {
    const expirationDate = new Date(0).toUTCString();
    document.cookie = `${name}=; expires=${expirationDate}; path=/;`
}