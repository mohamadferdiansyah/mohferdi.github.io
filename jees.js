// document.addEventListener("scroll", function () {
//   var navbar = document.getElementById("navbar");
//   var scrolled = window.scrollY;

//   if (scrolled > 200) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typeabout");
    const text = "ABOUT ME.";
    let index = 0;

    function typeWriter() {
        textElement.textContent += text[index];
        index++;

        if (index < text.length) {
            setTimeout(typeWriter, 200); // Adjust the typing speed (milliseconds)
        }
    }

    function startTyping() {
        // Memeriksa jika scrollY mencapai atau melebihi 200
        if (window.scrollY >= 50) {
            // Hanya mulai mengetik jika belum mulai sebelumnya
            if (index === 0) {
                typeWriter();
            }
        } else {
            // Reset index ke nilai awal jika scrollY di bawah 200
            index = 0;
            textElement.textContent = ""; // Menghapus teks yang sudah ditampilkan
        }
    }

    // Menjalankan fungsi ketika halaman di-scroll
    window.addEventListener("scroll", startTyping);
});

document.getElementById("mobile-menu").addEventListener("click", function () {
    this.classList.toggle("active");
});
