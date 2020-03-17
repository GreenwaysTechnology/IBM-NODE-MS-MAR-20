 const ProfileService = require('./myapi');

 //
 let ps = new ProfileService();


 console.log(ps.findAll())

 //save method
 let savedResult = ps.save({id:4,name:'Ram'});
 console.log(savedResult)