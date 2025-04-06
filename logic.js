document.getElementById("button").addEventListener("click", function () {
    let inputText = document.getElementById("input").value;
    let qrImage = document.getElementById("img");

    if (inputText.trim() === "") {
        alert("Please enter text to generate a QR code.");
        return;
    }

    // Using a free QR code API
    let qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;

    qrImage.src = qrApiUrl;  // Update the image source to the QR code URL
    qrImage.alt = "Generated QR Code";
});
