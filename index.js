
const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        play()
    }
})

button.addEventListener('click', play);

function play() {
    const userNumber = document.querySelector('#guess').value;
    if(userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Write a number from 1 to 20",
        });
    }

    else if(isNaN(userNumber)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Write a number",
        });
    }

    else {
        if(userNumber < answer) {
                Swal.fire("Write the number higher");
        }
        
        else if(userNumber > answer) {
            Swal.fire("Write the number less");
        }

        else {
            Swal.fire({
                title: "Victory!",
                imageUrl: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageWidth: 600,
                imageHeight: 300,
                imageAlt: "Victory"
            });
        }
    }
}
