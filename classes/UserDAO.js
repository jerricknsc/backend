const con = require('./ConnectionManager.js');
const User = require('./User.js');

class UserDAO {

    retrieveAllUsers(){
        let sqlQuery = 'select * from user';
       
        con.connect((error) => {
            if(error) throw error;
            
            con.query(sqlQuery, (err, result, fields) => {
                if(err){
                    return err;
                }
                else{
                    console.log(result);
                    // const x = result.rows.map((row) => new User(row));
                    // console.log(x);

                    // const userList = [];     

                    // for(let i = 0; i < result.length; i += 1){
                    //     let row = result[i];
    
                    //     const user = new User(row.userid, row.name, row.hashed_password, row.level);
                    //     userList.push(user);
                    // }
                }
            })
        })
    }
}

module.exports = UserDAO;

const userdao = new UserDAO();

// const userList = [];

userdao.retrieveAllUsers();



// const pool = require('./database.js');
// const User = require('./User.js');

// class UserDAO {
//     retrieveAllUsers(){
//         let sqlQuery = 'select * from user';

//         return new Promise( (resolve, reject) => {
//             pool.query(sqlQuery, (error, result) => {
//                 if(error){
//                     reject(error);
//                 }
//                 else{
//                     const userList = result.map( (row) => {
//                         new User(row.userid, row.name, row.hashed_password, row.level)
//                     });
//                     resolve(userList);
//                 }
//             })
//         })      
//     }
// }

// module.exports = UserDAO;

// const userdao = new UserDAO();

// function onSuccess(data){
//     console.log(data);
// }

// function onFailure(error){
//     console.log(error);
// }

// console.log(userdao.retrieveAllUsers().then(onSuccess, onFailure));



// const pool = require('./database.js');
// const User = require('./User.js');

// class UserDAO {
//     retrieveAllUsers() {
//         let sqlQuery = 'SELECT * FROM user';

//         return new Promise((resolve, reject) => {
//             pool.query(sqlQuery, (err, result) => {
//                 if (err) {
//                     return reject(err);
//                 }

//                 const userList = result.map(row => new User(row.userid, row.name, row.hashed_password, row.level));
//                 resolve(userList);
//             });
//         });
//     }
// }

// module.exports = UserDAO;

// // Test the UserDAO functionality
// const userDAO = new UserDAO();

// async function hello(){
//     try{
//         const userList = await userDAO.retrieveAllUsers();
//         console.log(userList[0]);
//     }
//     catch(error){
//         return error;
//     }
//     finally{
//         pool.end();
//     }
// }

// hello();

// setTimeout( () => {
//     const x = hello();
//     console.log(x);
// }, 5000);



// async function main() {
//     try {
//         const userList = await userDAO.retrieveAllUsers();
//         const firstUser = userList[0];
//         console.log(firstUser);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         pool.end((err) => {
//             if (err) {
//                 console.error('Error ending the pool:', err);
//             } else {
//                 console.log('Pool was successfully closed.');
//             }
//         });
//     }
// }

// const hello = userDAO.retrieveAllUsers()
//     .then((userList) => {
//         return (userList[0]);
//     })
//     .catch((error) => {
//         return error;
//     })
//     .finally(() => {
//         pool.end();
//     })



// userDAO.retrieveAllUsers()
//     .then(users => {
//         users.forEach(user => {
//             console.log(`User: ${user.name}, ID: ${user.userID}, Level: ${user.level}`);
//         });
//     })
//     .catch(err => {
//         console.error('Error retrieving users:', err);
//     })
//     .finally(() => {
//         pool.end((err) => {
//             if (err) {
//                 console.log('Error ending the pool:', err);
//             } else {
//                 console.log('Pool was successfully closed.');
//             }
//         });
//     });
