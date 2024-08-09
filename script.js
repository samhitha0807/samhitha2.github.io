document.addEventListener('DOMContentLoaded', () => {
  
    document.getElementById('orderForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const item = document.getElementById('item').value;
        const quantity = document.getElementById('quantity').value;

       
        if (!name || !email || !item || !quantity || quantity <= 0) {
            showModal('Error', 'Please fill out all fields correctly.');
            return;
        }

       
        showModal('Order Confirmation', `Order placed!\nName: ${name}\nEmail: ${email}\nItem: ${item}\nQuantity: ${quantity}`);
    });

    function showModal(title, message) {
        const modal = document.createElement('div');
        const modalContent = document.createElement('div');
        const closeButton = document.createElement('span');
        const modalTitle = document.createElement('h2');
        const modalMessage = document.createElement('p');

        modal.className = 'modal';
        modalContent.className = 'modal-content';
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        modalTitle.textContent = title;
        modalMessage.textContent = message;

        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalMessage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        modal.style.display = 'flex';

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.removeChild(modal);
            }
        });
    }
});
