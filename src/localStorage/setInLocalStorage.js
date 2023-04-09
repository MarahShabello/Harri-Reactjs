export default function setInLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        console.log("Error");
    }
}