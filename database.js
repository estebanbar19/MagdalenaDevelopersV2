var tedious = require('tedious')
var Connection = tedious.Connection;  

var config = {  
    server: 'qa-devops.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'jesusdrp09', //update me
            password: 'Jesus123'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'MagdalenaDevelopersDB'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.on('debug', (message) =>{
    console.log("DEBUG: ",message);
})

connection.connect();

module.exports = {tedious, connection};