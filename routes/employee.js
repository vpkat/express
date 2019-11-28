var express=require("express");

var db=require("../db");

const router=express.Router();
const connction=db.connect();

router.get("/",(Request,Response)=>{
    var sql='SELECT * FROM employee';
    connction.query(sql,(err,result)=>{
        if(err == null)
        {
            Response.send(JSON.stringify(result));
        }
        else
        {
            Response.send(JSON.stringify(err));
        }
    })
})

router.post("/",(Request,Response)=>{

    const{id,name,address,email}=Request.body;
    var sql=`INSERT INTO employee values(${id},'${name}','${address}','${email}')`;
    connction.query(sql,(err,result)=>{
        if(err == null)
        {
            Response.send(JSON.stringify(result));
        }
        else
        {
            Response.send(JSON.stringify(err));
        }
    })
})

router.put("/:id",(Request,Response)=>{
    var id=Request.params.id;
    const{name,address,email}=Request.body;
    var sql=`UPDATE employee SET name='${name}',address='${address}',email='${email}' WHERE id=${id}`;
    connction.query(sql,(err,result)=>{
        if(err == null)
        {
            Response.send(JSON.stringify(result));
        }
        else
        {
            Response.send(JSON.stringify(err));
        }
    })
})
router.delete("/:id",(Request,Response)=>{
    var id=Request.params.id;
    var sql=`DELETE FROM employee WHERE id=${id}`;
    connction.query(sql,(err,result)=>{
        if(err == null)
        {
            Response.send(JSON.stringify(result));
        }
        else
        {
            Response.send(JSON.stringify(err));
        }
    })
})

module.exports=router;