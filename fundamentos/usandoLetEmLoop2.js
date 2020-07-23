const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//efeito em ela lembra de onde ela andou
funcs[6]()
funcs[8]()