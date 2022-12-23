const express = require('express');
const controller = require('../controller/accountsController');

const router = express.Router();
router.get('/', controller.home);
router.get('/admin', controller.admin);
router.get('/admin1', controller.admin1);



router.get('/cab1',controller.index1);
router.get('/login', controller.login);
router.get('/logout', controller.logOut);
router.post('/login', controller.loginPost);
router.get('/register', controller.register);
router.post('/register', controller.registerPost);
router.get('/driverlogin', controller.driverlogin);
router.post('/driverlogin', controller.driverloginPost);
router.get('/update/:id', controller.update);
router.post('/update/:id', controller.updatePost);
router.get('/delete/:id', controller.delete);
router.get('/driver', controller.driver);
router.post('/driver', controller.driverPost);
router.get('/driverupdate/:id', controller.driverupdate);
router.post('/driverupdate/:id', controller.driverupdatePost);
router.get('/payment', controller.payment);



//---------------------------------------------

router.get('/type', controller.cab);
router.post('/type', controller.cabPost);
router.get('/detail',controller.details);
router.get('/delete/:id', controller.delete);
router.get('/up/:id', controller.up);
router.post('/up/:id', controller.upPost);

//---------------------------
router.get('/book', controller.book);
router.post('/book',controller.bookPost);
router.get('/edit/:id', controller.edit);//ride
router.post('/edit/:id', controller.editPost);//ride
router.get('/index',controller.index);
router.get('/deletess/:id', controller.delete1);
// router.get('/regindex', controller.regindex);
router.get('/driverindex', controller.driverindex);

//---------------------------
router.get('/cab', controller.cab);
router.get('/delete2/:id', controller.delete2);
// router.get('/cabedit', controller.cabedit);
//  router.post('/cabedit', controller.cabeditpost);
// router.post('/cab', controller.cabpost);
// router.get('/payment',controller.payment)

// router.post('/payment',controller.paymentPost)

// router.get('/download', controller.download);


module.exports = router;