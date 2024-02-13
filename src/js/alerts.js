document.addEventListener('DOMContentLoaded', function(){
    fetch('/alerts.json')
    .then (response => response.json())
    .then(alerts => {
        if (alerts.length > 0) {
            const alertlist = document.createElement("section");
            alertlist.classList.add("alertlist");
            alerts.forEach(alert => {
                const alertItem = document.createElement("p");
                alertItem.textcontent = alert.message;
                alertItem.style.backgroundColor = alert.background;
                alertItem.style.color = alert.color;
                alertlist.appendChild(alertItem);
            });
            document.getElementById("alertContainer").appendChild(alertList);
        }
    })
    .catch(error => {
        console.error('Error fetching alerts:', error);
    })
})