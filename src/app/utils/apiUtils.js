export default async function sendContactForm (data) {
    fetch('/api/contact',{
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })
}
