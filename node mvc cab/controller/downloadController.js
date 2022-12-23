const Ride = require('../model/ride')


module.exports.payNow =  async(req, res, next) => {

    const result = await Ride.findByPk(req.params.id)

    console.log("line 6")

    let id = req.params.id

    console.log(id)

    res.render('paynow',{data:req.params.id});

}
module.exports.download = async(req, res, next) => {
    console.log("line421")
        let id = req.params.id;
        const result = await Ride.findByPk(id);
        console.log(result)
    res.render('download',result);
        
    }


