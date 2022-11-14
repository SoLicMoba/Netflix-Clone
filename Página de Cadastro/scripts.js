const options = document.querySelectorAll('.option')

const op_expand_1 = document.querySelector('.option-expand-1')
const op_expand_2 = document.querySelector('.option-expand-2')
const op_expand_3 = document.querySelector('.option-expand-3')
const op_expand_4 = document.querySelector('.option-expand-4')
const op_expand_5 = document.querySelector('.option-expand-5')
const op_expand_6 = document.querySelector('.option-expand-6')
const op_expand_7 = document.querySelector('.option-expand-7')


for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (e) => {

        if (i == 0) {

            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')

            op_expand_1.classList.toggle('option-expand-on')
        } else if (i == 1) {
            op_expand_1.classList.remove('option-expand-on')

            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')

            op_expand_2.classList.toggle('option-expand-on')
        } else if (i == 2) {
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')

            op_expand_3.classList.toggle('option-expand-on')
        } else if (i == 3) {
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')

            op_expand_4.classList.toggle('option-expand-on')
        } else if (i == 4) {
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')

            op_expand_5.classList.toggle('option-expand-on')
        } else if (i == 5) {
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')

            op_expand_6.classList.toggle('option-expand-on')
        } else if (i == 6) {
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')

            op_expand_7.classList.toggle('option-expand-on')
        }


    })
}

