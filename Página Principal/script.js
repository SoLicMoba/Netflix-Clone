

const api = 'https://api.themoviedb.org/3/movie/top_rated?api_key=81ac62a4b4396887e5b37de336d62a90'
const preview_container = document.querySelector('.preview-container')
const preview_cover = document.querySelector('.preview-cover')
const preview_leftInfo = document.querySelector('.preview-left-info-hide')
const preview_general_info_container = document.querySelector('.preview-general-info_container')
const preview_title = document.querySelector('.preview-title')
const movie_popularity = document.querySelector('.movie-popularity')
const movie_releaseDate = document.querySelector('.movie-release-date')
const movie_age = document.querySelector('.movie-age')
const movie_duration = document.querySelector('.movie-duration')
const movie_description = document.querySelector('.movie-description')
const btn_Container = document.querySelector('.btn-container')
const btn_assistir = document.querySelector('.btn-assistir')
const btn_minhaLista = document.querySelector('.btn-minha lista')
//Genres
const popular_container = document.querySelector('.popular-movies-container')
const btn_assistir_svg = document.querySelector('.btn-assistir-svg')
const my_list = document.querySelector('.my-list-movies-container')
var movie_id = 0
var all_imgs = ''
var random_movie_array = []
var random_movie_choosed


//================== FUNÇÕES =======================//


//Função que adiciona um filme aleatório ao preview 
function add_random_movie_preview() {
    async function cath_movies_id(url) {
        const res = await fetch(url)
        const data = await res.json()
        const filmes = data.results
        //Capta o id de cada filme e adiciona a um array
        filmes.map(filme => {
            random_movie_array.push(filme.id)
        })

        /* Cria um array e adiciona números de 0 até 20, que
        é o tamanho do array original de filmes (random_movie_array)*/
        const array_i = []
        var x = 0
        for (let i = 0; i < random_movie_array.length; i++) {
            array_i.push(x)
            x++
        }

        /*Constante que receberá um índice aleatório (0 à 20) do array criado acima,
            esta constante também será usada como índice, na linha 51, para que 
            a função 'findIndex' retorne um filme cujo id encontrado em
            'random_movie_array[random]', linha 53.
        */
        const random = array_i[Math.floor(Math.random() * random_movie_array.length)];
        const i = filmes.findIndex(movie_id => {
            return movie_id.id == random_movie_array[random]
        })
        random_movie_choosed = filmes[i]

        function addPreview(movie) {
            preview_leftInfo.classList.remove('preview-left-info-hide')
            preview_leftInfo.classList.add('preview-left-info-hide-show')
            preview_cover.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}) `
            preview_title.textContent = movie.original_title
            movie_popularity.textContent = `${movie.popularity}% Relevante`
            movie_releaseDate.textContent = movie.release_date
            movie_age.textContent = 14
            movie_duration.textContent = '1:47h'
            movie_description.textContent = movie.overview
        }
        addPreview(random_movie_choosed)
    }
    cath_movies_id(api)
}
add_random_movie_preview()


async function api_call(url) {
    const res = await fetch(url)
    const data = await res.json()
    const filmes = data.results
    //Percorre cada filme, cria div e adiciona elementos a esta div
    //Minha lista
    filmes.map(filme => {
        const api_id = filme.id
        const api_poster = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`

        const card = document.createElement('div')
        card.classList.add('card')

        const card_img = document.createElement('img')
        card_img.setAttribute('id', api_id)
        card_img.src = api_poster
        card_img.classList.add('card-img')
        all_imgs = document.querySelectorAll('.card-img')
        card.appendChild(card_img)

        my_list.appendChild(card)

    })
    //Popular na Netflix
    filmes.map(filme => {
        const api_id = filme.id
        const api_poster = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`

        const card = document.createElement('div')
        card.classList.add('card')

        const card_img = document.createElement('img')
        card_img.setAttribute('id', api_id)
        card_img.src = api_poster
        card_img.classList.add('card-img')

        all_imgs = document.querySelectorAll('.card-img')
        card.appendChild(card_img)
        popular_container.appendChild(card)


    })

    var all_cards = document.querySelectorAll('.card')
    const card_movie_info = document.createElement('div')

    const btn_container = document.createElement('div')
    btn_container.classList.toggle('btn-info-container')

    const btn_play = document.createElement('div')
    btn_play.classList.toggle('btn-play')

    const btn_plus = document.createElement('div')
    btn_plus.classList.toggle('btn-plus')

    const btn_like = document.createElement('div')
    btn_like.classList.toggle('btn-like')

    const btn_mais_info = document.createElement('div')
    btn_mais_info.classList.toggle('btn-mais-info')



    btn_container.appendChild(btn_play)
    btn_container.appendChild(btn_plus)
    btn_container.appendChild(btn_like)
    btn_container.appendChild(btn_mais_info)
    card_movie_info.appendChild(btn_container)

    const info_container = document.createElement('div')
    info_container.classList.add('info-container')

    const popularity = document.createElement('p')  
    popularity.classList.toggle('popularity')

    const age = document.createElement('div')
    age.textContent='16'
    age.classList.add('age')

    const duration = document.createElement('p')
    duration.classList.add('duration')

    const hd = document.createElement('div')
    hd.classList.add('hd')
    hd.textContent='HD'

    const features_container = document.createElement('ul')
    features_container.classList.add('features-container')

    const feature_1 = document.createElement('li')
    feature_1.textContent='Ação'
    feature_1.classList.add('feature')


    const feature_2 = document.createElement('li')
    feature_2.textContent='Drama'
    feature_2.classList.add('feature')

    const feature_3 = document.createElement('li')
    feature_3.textContent='Investigação'
    feature_3.classList.add('feature')

    card_movie_info.appendChild(btn_container)
    card_movie_info.appendChild(info_container)

    for (let i = 0; i < all_imgs.length; i++) {
        all_imgs[i].addEventListener('mouseover', (e) => {
            setTimeout(() => {
                movie_id = parseInt(e.target.id)
                movie_preview(movie_id)
                all_imgs[i].classList.toggle('card-img-hover')
                card_movie_info.classList.remove('card-movie-info-hide')
                card_movie_info.classList.add('card-movie-info')
                const movie_choose = all_cards[i]

                function add_ids() {
                    const tot = movie_id
                    async function api_call_preview(url) {
                        const res = await fetch(url)
                        const data = await res.json()
                        const filmes = data.results
                        const movie = filmes.find(m => m.id === movie_id)
                        console.log(movie);
                        popularity.textContent = `${movie.popularity}%`
                        duration.textContent='1:47h'
                        console.log(movie);
                        info_container.appendChild(popularity)
                        info_container.appendChild(age)
                        info_container.appendChild(duration)
                        info_container.appendChild(hd)
                        features_container.appendChild(feature_1)
                        features_container.appendChild(feature_2)
                        features_container.appendChild(feature_3)
                        card_movie_info.appendChild(features_container)
                
                        function addPreview() {

                        }
                        addPreview()
                    }
                    api_call_preview(api)
                    movie_choose.setAttribute('id', tot)
                    movie_choose.appendChild(card_movie_info)
                }
                add_ids()
            }, 500)

        })


        //Mouse out
        all_imgs[i].addEventListener('mouseout', (e) => {
            all_imgs[i].classList.toggle('card-img-hover')

             card_movie_info.classList.remove('card-movie-info')
            card_movie_info.classList.add('card-movie-info-hide')
 

        })
    }
}
api_call(api)
var movies = 0






//Função que abre a tela cheia e mostra o filme selecionado
function movie_preview(x) {
    async function api_call_preview(url) {
        const res = await fetch(url)
        const data = await res.json()
        const filmes = data.results
        const movie = filmes.find(m => m.id === movie_id)
        function addPreview() {
            //  preview_leftInfo.classList.remove('preview-left-info-hide')
            //preview_leftInfo.classList.add('preview-left-info-hide-show')
            //preview_cover.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500/${movie.poster_path}) `
            // preview_title.textContent = movie.original_title
            //movie_popularity.textContent = `${movie.popularity}% Relevante`
            //movie_releaseDate.textContent = movie.release_date
            //movie_age.textContent = 14
            //movie_duration.textContent = '1:47h'
            //movie_description.textContent = movie.overview
        }
        addPreview()
    }
    api_call_preview(api)
}






























//Slider 'minha Lista' ( EM CONSTRUÇÃO )

const popularightntainer = document.querySelector('.popular-movies-container')
const arrow_left = document.querySelector('.popular-movies-arrow-l')
const arrow_right = document.querySelector('.popular-movies-arrow-r')

var scrollAmount = 0

arrow_right.addEventListener('click', () => {
    scrollAmount--
    popular_container.scrollTo({
        top: 0,
        right: scrollAmount,
        behavior: 'smooth'
    })
    /*   if(scrollAmount <=0){
          scrollAmount=0
      } */
    console.log(scrollAmount);
})




