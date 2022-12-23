const User = require('../model/user');
//  const Rider = require('../model/ride');
const driver = require('../model/driver');
const Ride = require('../model/ride');
const sequelize = require('../model/db');

module.exports.home = (req, res, next)=>{
    res.render('home');
}
module.exports.admin = (req, res, next)=>{
    res.render('admin');
}
module.exports.admin1 = (req, res, next)=>{
    res.render('admin1');
}

module.exports.payment = (req, res, next)=>{
    res.render('payment');
}
module.exports.login = (req, res, next)=>{
    res.render('login');
}
module.exports.driverlogin = (req, res, next)=>{
    res.render('driverlogin');
}
module.exports.driverloginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    console.log("hi......")
    const userFromDb = await driver.findOne({
        where: {email: email, password: password}
    })
    
    if(userFromDb == null){
        return res.render('driverlogin', {message: 'No user with this email or password was found.'})
    }
    
    console.log(userFromDb)
    res.cookie('id',userFromDb.id)
     req.session.userId = userFromDb.id;
    res.redirect('/type');
    }

module.exports.logOut = (req, res, next)=>{
    req.session=null
    res.redirect('/login');
}

module.exports.loginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const userFromDb = await User.findOne({
        where: {email: email, password: password}
    })
    
    if(userFromDb == null){
        return res.render('login', {message: 'No user with this email or password was found.'})
    }
    else{
    res.cookie('id',userFromDb.dataValues.id)
     req.session.id = userFromDb.id;
    res.redirect('/book');
    }
}

module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    const {firstName, lastName, email, password } = req.body;
    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        return res.render('register', {message: 'Already registered.'});
    }

    await User.create({
        firstName: req.body.fname,
        lastName: req.body.lname,
        password: req.body.password,
        gender: req.body.GENDER,
        dob: req.body.dob,
        address: req.body.address,
        number: req.body.number,
        email: req.body.email
    });

    res.redirect('/login');

    
}
module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.update = async (req, res, next)=>{
    User.findByPk(req.params.id)
    .then(infoFromDb=>{
        res.render('reg-update',{
            data:infoFromDb
        });
    });
}


module.exports.updatePost = (req, res, next) => {
    User.findByPk(req.params.id)
        .then(user=> {
            movie.update({
                     firstName: req.body.firstName,
                     lastName: req.body.lastName,
                     email: req.body.email,
                     password: req.body.password
                 
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(count => {
                    res.redirect('/cab');
                });
        });
}


module.exports.updatePost = async (req, res, next) => {
     //var user = await User.findByPk(req.params.id);
    await user.update(
        {
       firstName: req.body.fname,
        lastName: req.body.lname,
        password: req.body.password,
        gender: req.body.GENDER,
        dob: req.body.dob,
        address: req.body.address,
        number: req.body.number,
        email: req.body.email

        },
        {
            where: {id: req.params.id}
        }
    )

    res.redirect('/cab1' );
}


module.exports.delete = async (req, res, next)=>{
    let id = req.params.id;
    let infoFromDb = await User.findByPk(id);
    if(infoFromDb!=null){
        await User.destroy({
            where: {id: id}
        });
res.redirect("/cab")    
}

}
module.exports.home = (req, res , next)=>{
    res.render('home');
}

module.exports.index1 = (req, res , next)=>{
    User.findAll().then(details=>{
        res.render('reg-index',{
            data:details
        });
    })
}



//---------------------------------------------------------------------------
const Cab = require('../model/cab');

module.exports.cab = (req, res, next) => {
    res.render('cab');
}
module.exports.cabPost = (req, res, next) => {
    Cab.create({
            Cabno: req.body.cabnumber,
            Cabmodel: req.body.cabmodel,
            Cabcapacity: req.body.cabcapacity,
            Cabdescription: req.body.cabdescription,
            DriverId:req.session.userId
        
        })
        .then(cabFromDb => {
            console.log(cabFromDb)
            Cab.findAll().then(cabs=>{
                res.render('cab-index',{
                    data:cabs
                });
            })
        })
}

module.exports.details = (req, res , next)=>{
    Cab.findAll().then(details=>{
        res.render('cab-index',{
            data:details
        });
    })
}
module.exports.delete= async (req, res, next)=>{
    let id = req.params.id;
    let infoFromDb= await Cab.findByPk(id);
    if(infoFromDb!=null){
        await Cab.destroy({
            where: {id: id}
        });
res.redirect("/detail")
}
}


module.exports.up = async (req, res, next)=>{
    Cab.findByPk(req.params.id)
    .then(infoFromDb=>{
        res.render('cab-update',{
            data:infoFromDb
        });
    });
}

module.exports.upPost = async (req, res, next) => {

    await Cab.update(
        {
            Cabno: req.body.cabnumber,
            Cabmodel: req.body.cabmodel,
            Cabcapacity: req.body.cabcapacity,
            Cabdescription: req.body.cabdescription
        },
        {
            where: {id: req.params.id}
        }
        
    )
     res.render('cab-index');
 }
 module.exports.type= (req, res , next)=>{
    Cab.findAll().then(details=>{
        res.render('cab-index',{
            data:details
        });
    })
}
module.exports.delete2= async (req, res, next)=>{
    let id = req.params.id;
    let infoFromDb= await Cab.findByPk(id);
    if(infoFromDb!=null){
        await Cab.destroy({
            where: {id: id}
        });
res.render("cab-index")
}
}
 

 //--------------------------------------------------------------------

const { log } = require('handlebars');



module.exports.book = (req, res, next) => {
    res.render('ride');
}

module.exports.bookPost = (req, res, next) => {
    Ride.create({
            Pickup: req.body.pickup,
            Drop: req.body.destination,
            Time: req.body.time,
            UserId:req.session.id
        })
        .then(rideFromDb => {
            sequelize.query('SELECT * FROM cab1.rides ORDER BY id DESC LIMIT 1').then(data=>{data=data.pop();res.redirect('/paynow/'+ data[0].id)})
            // res.redirect("/payment");
        })
}

module.exports.edit = async(req, res, next) => {
    Ride.findByPk(req.params.id)
        .then(rideFromDb => {
            console.log(rideFromDb)
            res.render('ride-update', {
                data: rideFromDb

            });
        });
}
module.exports.editPost = async (req, res, next) => {

   await Ride.update(
       {
           Pickup: req.body.Pickup,
            Drop: req.body.Drop,
            Time: req.body.Time
      
       },
       {
           where: {id: req.params.id}
       }
   )

   res.redirect('/index');
}

module.exports.index = (req, res , next)=>{
    Ride.findAll().then(details=>{
        res.render('ride-index',{
            data:details
        });
    })
}
module.exports.delete1= async (req, res, next)=>{
    let id = req.params.id;
    let infoFromDb= await Ride.findByPk(id);
    if(infoFromDb!=null){
        await Ride.destroy({
            where: {id: id}
        });
res.redirect("/index")
}
}

////-----------------------------------------------------


module.exports.driver = (req, res, next)=>{
    res.render('driver');
}

module.exports.driverPost = async (req, res, next)=>{
    const {firstName, lastName,password ,dob,address,licenseno,email} = req.body;
    let existingUser = await driver.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        return res.render('driver', {message: 'Already registered.'});
    }

    await driver.create({
        firstName: req.body.fname,
        lastName: req.body.lname,
        password: req.body.password,
        dob: req.body.dob,
        address: req.body.address,
        license_number: req.body.lcno,
        email: req.body.email
    });

    res.redirect('/driverindex');
}
module.exports.reg = (req, res, next)=>{
    res.render('driver');
}
//..............................................................

module.exports.driverupdate = async(req, res, next) => {
    driver.findByPk(req.params.id)
        .then(driverFromDb => {
            res.render('driver-update', {
                data: driverFromDb
            });
        });
}
module.exports.driverupdatePost = async (req, res, next) => {

   await driver.update(
       {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        address: req.body.address,
        license_number: req.body.lcno
       
       
       
      
       },
       {
           where: {id: req.params.id}
       }
   )

   res.redirect('/driverindex');
}

module.exports.driverindex = (req, res , next)=>{
    driver.findAll().then(details=>{
        res.render('driver-index',{
            data:details
        });
    })
}
module.exports.delete= async (req, res, next)=>{
    let id = req.params.id;
    let infoFromDb= await driver.findByPk(id);
    if(infoFromDb!=null){
        await driver.destroy({
            where: {id: req.params.id}
        });
res.redirect("/driverindex")
}
}



    
        

module.exports.paymentPost=(req,res,next)=>{

 

    res.render('Payment');

 

}
        
// module.exports.cab = (req, res , next)=>{
//     Cab.findAll().then(details=>{
//         res.render('cab-index',{
//             data:details
//         });
//     })
// }
// module.exports.cabupdatePost = async (req, res, next) => {

//     await Cab.update(
//         {
//          Cabno: req.body.Cabno,
//          Cabmodel: req.body.Cabmodel,
//          Cabcapacity: req.body.Cabcapacity,
//          Cabdescription: req.body.Cabdescription      
//         },
//             {
//             where: {id: req.params.id}
//         }
//     )
 
//     res.redirect('/type');
//  }
 