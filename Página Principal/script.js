
const api = 'https://api.themoviedb.org/3/movie/top_rated?api_key=81ac62a4b4396887e5b37de336d62a90'

//Cria tela cheia que abre com o filme selecionado
const popUp_screenMovie = document.createElement('div')
popUp_screenMovie.classList.add('popup-screen-movie-hide')
document.body.appendChild(popUp_screenMovie)

//Capta o id do filme selecionado e envia para mostrar na tela cheia
var movie_id = 0
var all_imgs = ''

async function api_call(url) {
    const res = await fetch(url)
    const data = await res.json()
    const filmes = data.results
    //Percorre cada filme, cria div e adiciona elementos a esta div
    filmes.map(filme => {
        const api_id = filme.id
        const api_poster = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`
        //Para usar na tela cheia
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

        card.classList.add('card')

        card_img.setAttribute('id', api_id)
        card_img.src = api_poster
        card_img.classList.add('card-img')
        all_imgs = document.querySelectorAll('.card-img')
        //Para usar na tela cheia:
        // card_title.textContent=api_title
        //card_description.textContent=api_description
        //card_vote_average.textContent=api_vote_average
        // card_release.textContent=api_release

        card.appendChild(card_img)
        card.appendChild(card_title)
        card.appendChild(card_description)
        card.appendChild(card_release)
        card.appendChild(card_vote_average)

        popular_container.appendChild(card)
        document.body.appendChild(popular_container)

        /*Linha 61: Verifica o filme clicado, armazena o id deste filme
            na variável 'movie.id' e chama função que abre
            a tela cheia, passando o id do filme clicado como
            parâmetro e assim o filme selecionado é
            mostrado nessa tela cheia
        */

        for (let i = 0; i < all_imgs.length; i++) {
            all_imgs[i].addEventListener('click', () => {
                console.log(all_imgs.length);
                //popup(movie_id)
            })
        }

    })
}
api_call(api)

//Função que abre a tela cheia e mostra o filme selecionado
function popup(movie_id_id) {
    popUp_screenMovie.classList.remove('popup-screen-movie-hide')
    popUp_screenMovie.classList.add('popup-screen-movie')
    //Usar método de array para descobriro ID do filme selecionado...
    async function api_call_preview(url) {
        const res = await fetch(url)
        const data = await res.json()
        const filmes = data.results
        console.log(movie_id_id);
    }
    api_call_preview(api)
}
//Evento escutador que fecha a tela ao clicar nela
popUp_screenMovie.addEventListener('click', () => {
    popUp_screenMovie.classList.toggle('popup-screen-movie-hide')
})







//Slider Popular ( EM CONSTRUÇÃO )
const popular_container = document.querySelector('.popular-movies-container')
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




