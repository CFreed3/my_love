document.addEventListener("DOMContentLoaded", function () {
    var data = "Selena";

    // Mostrar el nombre en mayúsculas
    document.getElementById("data").innerHTML = data.toUpperCase();

    const yesBtn = document.querySelector('#yesBtn');

    yesBtn.addEventListener('click', function () {
        const contenedor = document.getElementById("contenido");

        contenedor.innerHTML = `
            <div class="centrador">
                <p>
                    <br><br><br>
                    <span class="amarillo">S</span>
                    <span class="rosa">I</span>
                    <span class="naranja">E</span>
                    <span class="verde">M</span>
                    <span class="azul">P</span>
                    <span class="amarillo">R</span>
                    <span class="rosa">E</span>
                    <span>&nbsp;</span>
                    <br>
                    <span class="naranja">L</span>
                    <span class="verde">O</span>
                    <span>&nbsp;</span>
                    <br>
                    <span class="azul">S</span>
                    <span class="rosa">U</span>
                    <span class="amarillo">P</span>
                    <span class="verde">E</span>
                </p>
                <img 
                    src="cina_love.gif" 
                    alt="GIF de amor"
                    style="max-width: 300px; margin-top: 20px; border-radius: 20px;">
            </div>
        `;

        // Redirigir después de 4 segundos
        setTimeout(function () {
            window.location.href = 'https://www.youtube.com/watch?v=XoJNjj81eOM';
        }, 3000);
        });

    const noBtn = document.querySelector('#noBtn');

    function moverBotonNo() {
        const randomX = parseInt(Math.random() * 100);
        const randomY = parseInt(Math.random() * 100);
    
        noBtn.style.setProperty('top', randomY + '%');
        noBtn.style.setProperty('left', randomX + '%');
        noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
    }
    
    // PC: mouseover
    noBtn.addEventListener('mouseover', moverBotonNo);
    
    // Móvil: touchstart
    noBtn.addEventListener('touchstart', function (e) {
        e.preventDefault(); // evita el toque
        moverBotonNo();
    });

    /*noBtn.addEventListener('mouseover', function () {
        const randomX = parseInt(Math.random() * 100);
        const randomY = parseInt(Math.random() * 100);

        noBtn.style.setProperty('top', randomY + '%');
        noBtn.style.setProperty('left', randomX + '%');
        noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
    });*/
});



