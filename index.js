

// o tempo q eu quero de rotacao
let time = 2000,

// qual q é a imagem q esta acontecendo no momento é a zero
 currentImageIndex =  0,

// chamar todas as imagens
 imagens=document.querySelectorAll('#slider img')

//  aq é o maximo de imagens q existe pra mim
max = imagens.length;


function nextImagem() {
    // aq tem uma colecao de imagens com posicoes de 0 a 4  
    // console.log(imagens[3])


    imagens[currentImageIndex].classList.remove('selectd')
    console.log(currentImageIndex)
    

    currentImageIndex++
    console.log(currentImageIndex)
    // aq vai dar erro porq ele chegou no limite das quatro imagens
    

     // aq eu vou faser uma verificaçao com o if
    // se o meu currentImageIndex for maior ou igual ao meu max.length
    // eu posso pegar meu currentImageIndex e resetar ele colocando ele pra zero
    if(currentImageIndex >= max)
        currentImageIndex= 0
   
    //   1 primeiro eu preciso adicionar uma classe para proxima imagem q é o selectd
    imagens[currentImageIndex].classList.add('selectd')
    // aq significa q ele vai adicionar toda hora a  mesma imagem numero 0
    // q q eu posso faser d estrateja q é indentar o currentImageIndex ++ 
    
}
// executar uma funcao a cada time

// minha  1primeira funcao vai dar inicio assim q o windows for load
function start() {
    setInterval(() => {
        //  aq vai vir a logica d trocar de imagem vou criar uma funcao 'nextImagem ' pra puxar a imagem

        // console.log('windows load')
        nextImagem()
    }, time);
}
window.addEventListener('load', start)
