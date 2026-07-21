async function uploadResume() {

    const file = document.getElementById("resumeFile").files[0];

    if (!file) {
        alert("Please select a file");
        return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {

        const response = await fetch(
            "http://localhost:5000/api/resume/upload",
            {
                method: "POST",
                body: formData
            }
        );

        console.log("Status:", response.status);

        const data = await response.json();

        console.log("Response:", data);

        alert(data.message);

    } catch (error) {

        console.error("FULL ERROR:", error);

        alert("Upload failed");

    }
} 