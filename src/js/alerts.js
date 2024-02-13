export function alert(){
    fetch('/json/alerts.json')
    .then (response => response.json())
    .then(alerts => {
        if (alerts.length > 0) {
            const alertlist = document.createElement("section");
            alertlist.classList.add("alertlist");
            alerts.forEach(alert => {
                const alertItem = document.createElement("p");
                alertItem.textContent = alert.message;
                alertItem.style.setProperty('--background', alert.background);
                alertItem.style.setProperty('--color', alert.color);
                alertlist.appendChild(alertItem);
            });
            document.querySelector("header").insertAdjacentElement("afterend", alertlist);
        }
    })
    .catch(error => {
        console.error('Error fetching alerts:', error);
    })
}