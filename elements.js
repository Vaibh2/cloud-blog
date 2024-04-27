function previewImage(fileInput) {
    const file = fileInput.files[0];
    if (!file) return; // No file selected
  
    // Check file size
    if (file.size > 1048576) {
      alert("Image must be less than 1 MB!");
      return;
    }
  
    // Read the file and display a preview
    const reader = new FileReader();
    reader.onload = function(e) {
      const previewImage = document.createElement("img");
      previewImage.src = e.target.result;
      previewImage.classList.add("profile-image");
      // Replace the existing image element or display it elsewhere
      // document.querySelector(".profile-image").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }