// ###########
// 1 Accessing a variable which was declared outside of a function, from within a function
// ###########
// variable declared at the top level is global and accessible to everything
function variable1Demo() {
    var variable1 = 'cat';

    // show unmodified variable
    (() => {
        // will output 'cat'
        console.log({ demoNumber: 1, variable1 });
    })();
}



// ###########
// 2 Attempting to access a variable declared inside a function from outside of the function
// ###########
function variable2Demo() {
   (()=>{
        // declared inside a function and inaccessible outside of it
        var variable2 = 'dog';
    })();

    // will throw an error stating that variable2 is undefined
    console.log({ demoNumber: 2, variable2 }); 
}




// ###########
// 3 Modifying a variable from within a function which was declared outside of the function
// ###########
function variable3Demo() {
    var variable3 = 'bucket';

    (() => {
        // variable3 is accessible within the function
        // will output 'bucket'
        console.log({ demoNumber: 3, message:'before', variable3 });

        // change the value of variable3 to 'not a bucket'
        variable3 = 'not a bucket';

        // will output 'not a bucket' as the variable was changed
        console.log({ demoNumber: 3, message: 'after', variable3 });
    })();

    // variable3 is being accessed from outside of the function, after it was modified
    // will output 'not a bucket'
    console.log({ demoNumber: 3, message: 'after, outside of function', variable3 });
}


// ###########
// 4 Why globally defined variables are bad
// ###########

// myName intentionally declared in the global scope
var myName = 'john';

function variable4Demo() {
    console.log({ demoNumber: 4, message: 'before function', myName });

    // a function the changes the value of myName to somethign else
    (() => {
        myName = 'bob';
        console.log({ demoNumber: 4, message: 'inside function', myName });
    })();

    // Still expecting the name to be john, but it has been changed to bob
    // global variables are available to *everything*, so you could easily change the value in many of your scripts
    // forgetting that you're expecting it to be a certain value, then wonder why the value is different.
    // This can make debugging a nightmare
    console.log({ demoNumber: 4, message: 'outside function', myName });  
}

variable1Demo();
// variable2Demo();
// variable3Demo();
// variable4Demo();

// what happens if we execute variable4Demo() a 2nd time?  myName won't start as 'john' any more on the 2nd execution
// it will start as 'bob' which was the last value it was changed to
// console.log('Executing variable4Demo() the 2nd time');
// variable4Demo();

