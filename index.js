const Sum = ({a,b}, maybefunction) => { 
    
    const sum = a+b

    if (typeof maybefunction == "function") 
        maybefunction(sum); 
} 

const thus = (sum)=> console.log(`Sum is ${sum}`)
Sum({a:5,b:61}, thus); 