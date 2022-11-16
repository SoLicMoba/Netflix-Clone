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

//=======================  API   ================================
        //Top Rated movies
        const api ='https://api.themoviedb.org/3/movie/top_rated?api_key=81ac62a4b4396887e5b37de336d62a90'
         async function api_call (url) {
            const res = await fetch (url)
            const data = await res.json()
            const filmes = data.results
            //Percorre cada filme, cria div e adiciona elementos a esta div
            filmes.map(filme =>{
                const api_id = filme.id
                const api_poster =  `https://image.tmdb.org/t/p/w500/${filme.poster_path}`
                const api_title = filme.title
                const api_description = filme.overview
                const api_release = filme.release_date
                const api_vote_average = filme.vote_average

                const card = document.createElement('div')
                const card_img = document.createElement('img')
                const card_title = document.createElement('h1')
                const card_description = document.createElement('p')
                const card_release = document.createElement('p')
                const card_vote_average = document.createElement('p')

                card_img.setAttribute('id', api_id)
                card_img.src =api_poster

                card_title.textContent=api_title
                card_description.textContent=api_description
                card_vote_average.textContent=api_vote_average
                card_release.textContent=api_release

                card.appendChild(card_img)
                card.appendChild(card_title)
                card.appendChild(card_description)
                card.appendChild(card_release)
                card.appendChild(card_vote_average)
                
                document.body.appendChild(card)
                console.log(filme);
            })

        }
        api_call(api)