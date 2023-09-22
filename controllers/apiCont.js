const apiCont={
    greet(req,res){
        res.send('Good Morning Dear User from NodeJS Server!');
    },
    newpro(req,res){
        res.json({ message: 'Product created successfully' });
    }
};
module.exports=apiCont;