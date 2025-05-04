function coupleNoCouple(form) {
    const isChecked = form.check_c01_h.checked;
    const rightColumnInputs = form.querySelectorAll('input[name="text_c02_c"]');

    rightColumnInputs.forEach(input => {
        input.disabled = !isChecked;
        if (!isChecked) {
            input.value = ''; // Clear the value if unchecked
        }
    });
}

// Ensure the function is executed on page load to apply the correct state
document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['cadreform'];
    if (form) {
        coupleNoCouple(form);
    }
});
