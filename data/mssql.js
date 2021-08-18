var dbConfig = {
    driver: 'msnodesqlv8',  
    server: "(localdb)\\mssqllocaldb",
    database: "PersonDB",
    user: "",
    password: "",
    options: {
      trustedConnection: true
  },
  debug: true,
  parseJSON: true
  }; 
  var sql = require('mssql/msnodesqlv8');

  //insert data ind i databasen. exports.insert = Function(

//    exports.insert = function(param) { sql.connect(dbConfig, function (err) {
//     if (err) { console.log(JSON.stringify(err)+'..............') }
//     else {
//       console.log('Connected')
//       const result = sql.query `Insert into Person(firstname, lastname) values(${value}, ${value})`;
//       console.log(result)
//     }
//   }
//   );

exports.insert =  async function(value1, value2) {
    let result

    try {
        await sql.connect(dbConfig);
      console.log('Connected')
      //værdi/værdi post
      result = await sql.query `Insert into Person(firstname, lastname) values(${value1}, ${value2})`
     // console.log(result.recordset);
      return(result.recordset);
    } catch (error) {
        console.log(error);
    }
}
//Insert into Person(firstname, lastname) values(${value}, ${value})`
//   exports.Getid = function(param) {
//   sql.connect(dbConfig, function (err) {
//     if (err) { console.log(JSON.stringify(err)+'..............') }
//     else {
//       console.log('Connected');
//       const result = sql.query `select * from Person where id = ${value}`
//       console.log(result);
//     }
//   }
//   );

//GET: ALL
  exports.Getall =  async function() {
    let result

    try {
        await sql.connect(dbConfig);
      console.log('Connected')
      result = await sql.query `select * from Person`
     // console.log(result.recordset);
      return(result.recordset);
    } catch (error) {
        console.log(error);
    }
}

    exports.Getbyid = async function(id) {
        
        try {
            let result
            await sql.connect(dbConfig);

          console.log('Connected')
          result = await sql.query `select * from Person where id = ${id}`

         // console.log(result.recordset);
          return(result.recordset);
        } catch (error) {
            console.log(error);
        }
    }

    exports.Delete =  async function(id) {
        let result
    
        try {
            await sql.connect(dbConfig);
          console.log('Connected')
          result = await sql.query ` delete from Person where id = ${id}`
         // console.log(result.recordset);
          return(result.recordset);
        } catch (error) {
            console.log(error);
        }
    }
    
    exports.update =  async function(Dvalue1, Dvalue2, id) {
        let result
        try {
            await sql.connect(dbConfig);
          console.log('Connected')
          result = await sql.query `update person set firstname = ${Dvalue1}, lastname = ${Dvalue2} where id = ${id}`
         // console.log(result.recordset);
          return(result.recordset);
        } catch (error) {
            console.log(error);
        }
    }
    
//   exports.Delete = function(param) {
//   sql.connect(dbConfig, function (err) {
//     if (err) { console.log(JSON.stringify(err)+'..............') }
//     else {
//       console.log('Connected')
//       const result = sql.query `delete from Person where id = ${value}`
//       console.log(result)
//     }
//   }
//   );
//   exports.Update = function(param) {
//   sql.connect(dbConfig, function (err) {
//     if (err) { console.log(JSON.stringify(err)+'..............') }
//     else {
//       console.log('Connected')
//       const result = sql.query `update persons set firstname = ${value}, lastname = ${value} where id = ${value}`
//       console.log(result.affectedRows);
//     }
//   }
//   );




  //sql statements
  //select from person(where id = $id)
  //select * from person()