const uploadInput = document.getElementById('upload-photo');
    const profileImg = document.getElementById('profile-pict');

    uploadInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                profileImg.src = e.target.result;
            }

            reader.readAsDataURL(file);
        }
    });
    