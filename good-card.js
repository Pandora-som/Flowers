const counters = document.querySelectorAll('[data-quantity]');

if (counters) {
    counters.forEach(quantity => {
        quantity.addEventListener('click', e => {
            const target = e.target;

            if(target.closest('.counter__button')) {
                let value = parseInt(target.closest('.quantity').querySelector('input').value);

                if(target.classList.contains('plus-btn')) {
                    value++;
                } else {
                    --value;
                }
                if (value <= 0) {
                    value = 0;
                    
                }

                target.closest('.quantity').querySelector('input').value = value;
            }

        })
    })
}