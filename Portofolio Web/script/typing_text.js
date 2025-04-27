const text = "I'm A Student At SMK Plus Pelita Nusantara";
       const typingText = document.getElementById("typing-text");
       let index = 0;
       let isDeleting = false;

       function type() {
           if (isDeleting) {
               typingText.textContent = text.substring(0, index--);
               if (index < 0) {
                   isDeleting = false; // Mulai mengetik lagi
                   index = 0; // Reset index untuk mengetik ulang
                   setTimeout(type, 1000); // Delay sebelum mulai mengetik lagi
               } else {
                   setTimeout(type, 100);
               }
           } else {
               typingText.textContent = text.substring(0, index++);
               if (index > text.length) {
                   isDeleting = true; // Mulai menghapus
                   setTimeout(type, 1000); // Delay sebelum mulai menghapus
               } else {
                   setTimeout(type, 100);
               }
           }
       }

       setTimeout(type, 3000); // Mulai mengetik setelah 3 detik