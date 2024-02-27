'use strict'

class PatternPlayground{
    constructor(){
        this.DOM = {};
        this.DOM.text = document.body.querySelector(".novel");
        this.DOM.wordCollection = this.DOM.text.innerHTML.split(" ");
        this.DOM.perfectBtn = document.body.querySelector("#perfect");
        this.DOM.largeBtn = document.body.querySelector("#large");
        this.DOM.smallBtn = document.body.querySelector("#small");
        this.DOM.numericBtn = document.body.querySelector("#numeric");
        this.DOM.input = document.body.querySelector(".input");
        this.DOM.output = document.body.querySelector("#output");
        this._addEvent();
    }
    _changeWordFn(item){
        this.dummyWord.splice(item.index,1,`<span class="red">${item[0]}</span>`);
    }
    _createEach(word){
        if(word.match(/<*>/g)){
            return word;
        }
        this.matches = [...word.matchAll(this.regexp)];
        this.word = word;
        switch(this.matches.length !== 0){
            case true:
                this.dummyWord = this.word.replaceAll(this.matches[0][0],"#").split("");
                this.matches.forEach(this._changeWordFn,this);
                return this.dummyWord.join("");
            default:
                return this.word;
        }
        }
    _test(){
        const changeWordCollection = this.DOM.wordCollection.map(this._createEach,this).join(" ");
        this.DOM.text.innerHTML = changeWordCollection;
        this.DOM.output.innerHTML = this.regexp;
    }
    _perfect(){
        const input = this.DOM.input.value;
        if(!input){
            alert("🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬\n\nエラー\n文字を入力しないとダメだよ🙅\n\n🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬");
            return;
        }
        this.regexp = new RegExp(input,"g");
        this._test();
    }
    _largeFn(){
        this.regexp = /[A-Z]\w*/g;
        this._test();
    }
    _smallFn(){
        this.regexp = /^[a-z][a-z’-]*/g;
        this._test();
    }
    _numericFn(){
        this.regexp = /[0-9]/g;
        this._test();
    }
    _addEvent(){
        this.DOM.perfectBtn.addEventListener("click",this._perfect.bind(this));
        this.DOM.largeBtn.addEventListener("click",this._largeFn.bind(this));
        this.DOM.smallBtn.addEventListener("click",this._smallFn.bind(this));
        this.DOM.numericBtn.addEventListener("click",this._numericFn.bind(this));
    }
}

document.addEventListener("DOMContentLoaded",function(){
    new PatternPlayground();
});

