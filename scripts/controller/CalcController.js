class CalcController {
// executado automaticamente
    constructor(){
// atributos privados

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora"); 
        this._currentDate;
        this.initialize();

    }
// método que inicia a aplicação
    initialize(){
       
// inner.HTML método que insere dados no html 
        this._dateEl.innerHTML = "10/05/2021";
        this._timeEl.innerHTML = "10:07";

    }

// getters e setters
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;

    }

    get currentDate(){
        return this._currentDate;

    }

    set currentDate(valor){
        this._currentDate = valor; 
    }
};