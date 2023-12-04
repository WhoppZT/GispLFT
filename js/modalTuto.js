

            // Función para abrir la modal de "Servicio de mapa"
            function openModal() {
                var modal = document.getElementById("myModal");
                modal.style.display = "block";
            }
        
            // Función para cerrar la modal de "Servicio de mapa"
            function closeModal() {
                var modal = document.getElementById("myModal");
                modal.style.display = "none";
            }
        
            // Función para abrir la modal de "Sistema de ruta"
            function openModals() {
                var modal1 = document.getElementById("myModal1");
                modal1.style.display = "block";
            }
        
            // Función para cerrar la modal de "Sistema de ruta"
            function closeModals() {
                var modal1 = document.getElementById("myModal1");
                modal1.style.display = "none";
            }
        
            // Cierra la modal si se hace clic fuera de ella
            window.onclick = function (event) {
                var modal = document.getElementById("myModal");
                var modal1 = document.getElementById("myModal1");
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                if (event.target == modal1) {
                    modal1.style.display = "none";
                }
            }

