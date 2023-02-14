const image = document.getElementById("image")
const title = document.getElementById("title")
const text = document.getElementById("text")
const next = document.getElementById("next")

const data = [
    {
        image: "images/js-logo.png",
        title: "JavaScript",
        text: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices."
    },
    {
        image: "images/python.png",
        title: "Python",
        text: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a 'batteries included' language due to its comprehensive standard library."
    },
    {
        image: "images/c++.png",
        title: "C++",
        text: "C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup and first released in 1985 as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation."
    },
    {
        image: "images/php.png",
        title: "PHP",
        text: "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by The PHP Group. PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor"
    },
    {
        image: "images/CSharp.png",
        title: "C Sharp",
        text: "C# (pronounced C sharp) is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines."
    }
]

function changeLanguage(number) {
    image.src = data[number].image
    text.innerHTML = data[number].text
    title.innerHTML = data[number].title
}

let random = 0
let currentSlide = 0

next.addEventListener("click", () => {
    random = Math.round(Math.random() * 4)
    while (random === currentSlide) {
        random = Math.round(Math.random() * 4)
    }
    currentSlide = random

    changeLanguage(random)
})

changeLanguage(0)