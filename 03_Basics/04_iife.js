// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 
//semicolon is compulsory here after every IIFE as javascript doesn't get the context


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

