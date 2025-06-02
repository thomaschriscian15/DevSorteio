function generateNumber(){
    
    const one = Math.ceil (document.querySelector(".input-one").value)
    const two = Math.floor (document.querySelector(".input-two").value)

    if(one  >= two){
        alert("O valor minimo tem que ser MENOR que o valor máximo")
    } else {
        const result =  Math.floor(Math.random() * (two - one + 1)) + one;

        alert(result)
    }

    
    
}