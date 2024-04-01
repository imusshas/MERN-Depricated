const ACCOUNT_ID = 2020331089;
let accountEmail = "demo@gmail.com";
var accountPassword = "123456";
acountCity = "Magura";
let accoutState;    // undefined

// ACCOUNT_ID = 2   // const can't be re-assigned. [Type Error]

/**
 * Never ever use var
 * Issue: Scope
*/

accountEmail = "hc@gmail.com";

accountPassword = "654321";

acountCity = "Sylhet";

console.log(accoutState);

console.table([ACCOUNT_ID, accountEmail, accountPassword, acountCity]);