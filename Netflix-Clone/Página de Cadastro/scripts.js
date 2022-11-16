const options = document.querySelectorAll('.option')
const op_expand_1 = document.querySelector('.option-expand-1')
const op_expand_2 = document.querySelector('.option-expand-2')
const op_expand_3 = document.querySelector('.option-expand-3')
const op_expand_4 = document.querySelector('.option-expand-4')
const op_expand_5 = document.querySelector('.option-expand-5')
const op_expand_6 = document.querySelector('.option-expand-6')
const op_expand_7 = document.querySelector('.option-expand-7')
const option_img = document.querySelectorAll('.option-img')

var arrayImg=[]
var test = false
var src = ''

//Função que troca o SRC das imagens de + e x
function toggleImg(){
    if(test == false){
        src='./img/x.png'
        test =true
    }else{
        src='./img/+.png'
        test =false
    }
}

//Percorre todas imagens de 'mais' e insere num array
for (var image = 0; image < option_img.length; image++){
    arrayImg.push(option_img[image])
}

//Função principal que abre e fecha as informações de cada 'pergunta frequente' 
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', () => {
        if (i == 0) {
            toggleImg()
            arrayImg[0].src=src
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')
            op_expand_1.classList.toggle('option-expand-on')
        } else if (i == 1) {
            toggleImg()
            arrayImg[1].src=src
            op_expand_1.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')
            op_expand_2.classList.toggle('option-expand-on')
        } else if (i == 2) {
            toggleImg()
            arrayImg[2].src=src
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')
            op_expand_3.classList.toggle('option-expand-on')
        } else if (i == 3) {
            toggleImg()
            arrayImg[3].src=src
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')
            op_expand_4.classList.toggle('option-expand-on')
        } else if (i == 4) {
            toggleImg()
            arrayImg[4].src=src
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')
            op_expand_5.classList.toggle('option-expand-on')
        } else if (i == 5) {
            toggleImg()
            arrayImg[5].src=src
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_7.classList.remove('option-expand-on')
            op_expand_6.classList.toggle('option-expand-on')
        } else if (i == 6) {
            toggleImg()
            arrayImg[6].src=src
            op_expand_1.classList.remove('option-expand-on')
            op_expand_2.classList.remove('option-expand-on')
            op_expand_3.classList.remove('option-expand-on')
            op_expand_4.classList.remove('option-expand-on')
            op_expand_5.classList.remove('option-expand-on')
            op_expand_6.classList.remove('option-expand-on')
            op_expand_7.classList.toggle('option-expand-on')
        }
    })
}

//========================================================