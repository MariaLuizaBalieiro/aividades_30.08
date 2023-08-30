'use strict' 

const Informacoes = [
    {
        nome: "Carlos",
        imagem: "cinamonroll.png",
        ultimaMensagem: "Posso avaliar vocês por...",
        contato: "Malu",
        tempo: "Há 30 minutos",
        lidas: "2"
    },
    {
        nome: "Ana",
        imagem: "hellokitty.png",
        ultimaMensagem: "Bom dia como quem eu poderia falar a respeito dos atendimentos?",
        contato: "Tamires",
        tempo: "Há 20 minutos",
        lidas: "2"
    },
    {
        nome: "Laís",
        imagem: "kuromi.png",
        ultimaMensagem: "Bom dia, gostaria de saber quat...",
        contato: "Luana",
        tempo: "Há 30 minutos",
        lidas: "2"
    }
]


const criarItem = (Informacoes) => {
    const item = document.createElement('div')
    item.classList.add('item')

    const imagem = document.createElement('img')
    imagem.src = `./img/${Informacoes.imagem}`
    imagem.alt = Informacoes.name

        //Part1
        const nome = document.createElement('h2')
        nome.textContent = Informacoes.nome

        const lidas = document.createElement('h2')
        lidas.textContent = Informacoes.lidas

        //Part2
        const ultimaMensagem = document.createElement('p')
        ultimaMensagem.textContent = Informacoes.ultimaMensagem

        //Destinatario
        const contato = document.createElement('div')
        contato.textContent = Informacoes.contato

        //Status
        const tempo = document.createElement('div')
        tempo.textContent = Informacoes.tempo

        const Part1 = document.ge

    item.replaceChildren(item, )

     
    return item
}

const mostrarItem = (Informacoes) => {
    const itemConteiner = document.getElementById('item-conteiner')
    const item = criarItem(Informacoes)
   
    itemConteiner.appendChild(item)
}
Informacoes.forEach(mostrarItem)