export default function getFromLocalStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch {
        console.log("Error");
    }
}