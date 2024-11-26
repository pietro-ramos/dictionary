const palavra = document.getElementById("palavra");
const imagem = document.getElementById("image")
const pronuncia= document.getElementById("pronuncia");
const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
document.getElementById('audioPronuncia').setAttribute('src','../voice/main.mp3')

// Função para quando a página principal é clicada
const clickMain = () => {
    palavra.innerHTML = "Bem vindo(a), selecione uma letra"
    imagem.setAttribute('src','../img/main.gif')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/main.mp3')
    texto1.innerHTML = ""
    texto2.innerHTML = ""
    traducao.innerHTML = ""
}

// Letra A
const clickA = () => {
    palavra.innerHTML = "Abstraction"
    imagem.setAttribute('src','../img/a.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/a.mp3')
    texto1.innerHTML = "<strong>Abstraction</strong> allows us to simplify complex systems by breaking them into smaller, manageable parts."
    texto2.innerHTML = "In programming, <strong>abstraction</strong> hides the complex reality while exposing only the necessary parts."
    traducao.innerHTML = "Tradução: Abstração"
}

// Letra B
const clickB = () => {
    palavra.innerHTML = "Backlog"
    imagem.setAttribute('src','../img/b.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/b.mp3')
    texto1.innerHTML = "A <strong>backlog</strong> is a list of tasks or items to be completed."
    texto2.innerHTML = "The project team reviews the <strong>backlog</strong> at the start of each sprint."
    traducao.innerHTML = "Tradução: Acúmulo"
}

// Letra C
const clickC = () => {
    palavra.innerHTML = "Concurrency"
    imagem.setAttribute('src','../img/c.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/c.mp3')
    texto1.innerHTML = "<strong>Concurrency</strong> refers to the ability of a system to execute multiple tasks simultaneously."
    texto2.innerHTML = "Handling <strong>concurrency</strong> properly can improve the performance of an application."
    traducao.innerHTML = "Tradução: Concorrência"
}

// Letra D
const clickD = () => {
    palavra.innerHTML = "Debugging"
    imagem.setAttribute('src','../img/d.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/d.mp3')
    texto1.innerHTML = "<strong>Debugging</strong> is the process of identifying and removing errors from computer hardware or software."
    texto2.innerHTML = "Effective <strong>debugging</strong> can save a lot of time in software development."
    traducao.innerHTML = "Tradução: Depuração"
}

// Letra E
const clickE = () => {
    palavra.innerHTML = "Encapsulation"
    imagem.setAttribute('src','../img/e.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/e.mp3')
    texto1.innerHTML = "<strong>Encapsulation</strong> is an OOP principle that bundles the data and methods that operate on the data within one unit."
    texto2.innerHTML = "Using <strong>encapsulation</strong>, the internal representation of an object is hidden from the outside."
    traducao.innerHTML = "Tradução: Encapsulamento"
}

// Letra F
const clickF = () => {
    palavra.innerHTML = "Framework"
    imagem.setAttribute('src','../img/f.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/f.mp3')
    texto1.innerHTML = "<strong>Framework</strong> is a structured environment for developing software applications."
    texto2.innerHTML = "Many developers use popular frameworks like React or Angular for web development."
    traducao.innerHTML = "Tradução: Caixa de ferramenta"
}


// Letra G
const clickG = () => {
    palavra.innerHTML = "Graphical User Interface (GUI)"
    imagem.setAttribute('src','../img/g.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/g.mp3')
    texto1.innerHTML = "<strong>Graphical User Interface (GUI)</strong> is a type of user interface that allows users to interact with electronic devices using graphical icons and visual indicators."
    texto2.innerHTML = "GUIs are common in modern operating systems and applications."
    traducao.innerHTML = "Tradução: Interface Gráfica do Usuário (IGU)"
}

// Letra H
const clickH = () => {
    palavra.innerHTML = "Heap"
    imagem.setAttribute('src','../img/h.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/h.mp3')
    texto1.innerHTML = "In computer science, a <strong>heap</strong> is a specialized tree-based data structure that satisfies the heap property."
    texto2.innerHTML = "Heaps are commonly used to implement priority queues and heapsort algorithms."
    traducao.innerHTML = "Tradução: Amontoado"
}


// Letra I
const clickI = () => {
    palavra.innerHTML = "Inheritance"
    imagem.setAttribute('src','../img/i.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/i.mp3')
    texto1.innerHTML = "<strong>Inheritance</strong> is a mechanism in object-oriented programming where a class inherits properties and behaviors from another class."
    texto2.innerHTML = "It promotes code reuse and is a fundamental concept in languages like Java and C++."
    traducao.innerHTML = "Tradução: Herança"
}

// Letra L
const clickL = () => {
    palavra.innerHTML = "Leverage"
    imagem.setAttribute('src','../img/l.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/l.mp3')
    texto1.innerHTML = "In finance, <strong>leverage</strong> refers to the use of borrowed funds to increase the potential return of an investment."
    texto2.innerHTML = "However, leverage also amplifies the potential losses."
    traducao.innerHTML = "Tradução: Alavancagem"
}



// Letra M
const clickM = () => {
    palavra.innerHTML = "Middleware"
    imagem.setAttribute('src','../img/m.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/m.mp3')
    texto1.innerHTML = "<strong>Middleware</strong> acts as a bridge between different software applications."
    texto2.innerHTML = "Using middleware simplifies the integration of legacy systems with new applications."
    traducao.innerHTML = "Tradução: Intermediário"
}

// Letra N
const clickN =() => {
    palavra.innerHTML = "Nonce"
    imagem.setAttribute('src','../img/n.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/n.mp3')
    texto1.innerHTML = "A <strong>nonce</strong> is an arbitrary number that can be used just once in a cryptographic communication."
    texto2.innerHTML = "Nonces are often used in security protocols to prevent replay attacks."
    traducao.innerHTML = "Tradução: Número de uso único"
}

// Letra P
const clickP = () => {
    palavra.innerHTML = "Prototyping"
    imagem.setAttribute('src','../img/p.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/p.mp3')
    texto1.innerHTML = "<strong>Prototyping</strong> is the process of creating preliminary versions of a product or system to test its feasibility."
    texto2.innerHTML = "Software <strong>prototyping</strong> allows for early feedback and validation of requirements."
    traducao.innerHTML = "Tradução: Prototipagem"
}

// Letra Q
const clickQ = () => {
    palavra.innerHTML = "Query"
    imagem.setAttribute('src','../img/q.jpg')
    document.getElementById('audioPronuncia').setAttribute('src','../voice/q.mp3')
    texto1.innerHTML = "<strong>Query</strong> is a request for data or information from a database, which is formulated in a specific syntax."
    texto2.innerHTML = "Writing efficient <strong>queries</strong> is essential for database performance."
    traducao.innerHTML = "Tradução: Consulta"
}