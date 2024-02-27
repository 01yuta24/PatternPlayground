'use strict'

function start(){
    const input = document.body.querySelector(".input").value;
    const regexp = new RegExp(input,"g");

    function create(word){
        const matches = [...word.matchAll(regexp)];
        let dummyWord;
        
        function changeWordFn(){
            dummyWord = word.replaceAll(matches[0][0],"#").split("");
            return function(match){
                console.log(match);
                dummyWord.splice(match.index,1,`<span class = "red">${match}</span>`);
                console.log(dummyWord);
            }
        }
        switch(matches.length !== 0){
            case true:
                const chWord = changeWordFn();
                matches.forEach(chWord);
                return dummyWord.join("");
            default:
                return word;
        }
    }
    const changeWordCollection = this.wordCollection.map(create).join(" ");
    this.text.innerHTML = changeWordCollection;
}

function largeFn(){
    const input = /^[A-Z]\S*/;
    const regexp = new RegExp(input,"g");

    function red(word){
        const matches = word.match(regexp);
        return matches === null ? word : `<span class="red">${matches[0]}</span>`;
    }

    const changeWordCollection = this.wordCollection.map(red).join(" ");
    this.text.innerHTML = changeWordCollection;
}


function smallFn(){
    const input = /^[a-z]\S*/;
    const regexp = new RegExp(input,"g");

    function red(word){
        const matches = word.match(regexp);
        return matches === null ? word : `<span class="red">${matches[0]}</span>`;
    }

    const changeWordCollection = this.wordCollection.map(red).join(" ");
    this.text.innerHTML = changeWordCollection;
}

function numericFn(){
    const input = /[0-9]+/;
    const regexp = new RegExp(input,"g");

    function red(word){
        const matches = word.match(regexp);
        return matches === null ? word : `<span class="red">${matches[0]}</span>`;
    }

    const changeWordCollection = this.wordCollection.map(red).join(" ");
    this.text.innerHTML = changeWordCollection;
}


document.addEventListener("DOMContentLoaded",function(){
    
    const text = document.body.querySelector(".novel");
    const wordCollection  = text.innerHTML.split(" ");

    const obj = {
        text,
        wordCollection,
    }
    
    const perfectBtn = document.body.querySelector("#perfect");
    const largeBtn = document.body.querySelector("#large");
    const smallBtn = document.body.querySelector("#small");
    const numericBtn = document.body.querySelector("#numeric");


    perfectBtn.addEventListener("click",start.bind(obj));
    largeBtn.addEventListener("click",largeFn.bind(obj));
    smallBtn.addEventListener("click",smallFn.bind(obj));
    numericBtn.addEventListener("click",numericFn.bind(obj));

});