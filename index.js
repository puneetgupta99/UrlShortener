const express=require('express');
const app=express();
const port =8009;



app.set('view engine','ejs');
app.set('views','./views');


app.get('/',function(req,res)
{

return res.render('index.ejs');

}
);



app.listen(port,function(err)
{
    
if(err)
{
    console.log("error",err);
//console.log(`error${err}`);
}

console.log(`server is running ${port}`);
})