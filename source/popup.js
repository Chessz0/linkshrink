document.addEventListener('DOMContentLoaded', function () {
    var shortenBtn = document.getElementById('shortenBtn');
    var shortUrlDiv = document.getElementById('shortUrl');

    shortenBtn.addEventListener('click', function () {
        var longUrl = document.getElementById("longUrl").value;
        fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 509d243e8673abb3a2971b62aaab2595774bf81a',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "long_url": longUrl, "domain": "bit.ly" })
        })
        .then(response => response.json())
        .then(data => {
            if (data.link) {
                shortUrlDiv.innerHTML = "<a href='" + data.link + "' target='_blank'>" + data.link + "</a>";
                navigator.clipboard.writeText(data.link);
            } else {
                shortUrlDiv.innerHTML = "Error: Unable to shorten URL.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            shortUrlDiv.innerHTML = "Error: Unable to connect to the server.";
        });
    });
});
