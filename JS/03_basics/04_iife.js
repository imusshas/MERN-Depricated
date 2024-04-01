// Immediately Invoked Function Expression  (IIFE)

// (
//     //  Function Definition block
// )( /* Function Execution Block */ );

(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

(function () {
    console.log(`DB CONNECTED TWO`);
})();

((username) => {
    // Unnamed IFFE
    console.log(`DB CONNECTED THREE ${username}`);
})("muhib");