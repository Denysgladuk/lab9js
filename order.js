function validateForm(event) {
    event.preventDefault();

    const furniture = document.getElementById('furniture').value;
    const material = document.getElementById('material').value;
    const quantity = document.getElementById('quantity').value;

    if (!furniture || !material || !quantity) {
        alert('Будь ласка, заповніть всі поля');
        return;
    }

    alert(`Ваше замовлення прийнято:\nВиріб: ${furniture}\nМатеріал: ${material}\nКількість: ${quantity}`);
}