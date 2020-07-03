const express=require('express')
const app=express();
const ejs=require('ejs');

const{validatemessage,Message}=require('./model/info')
const path=require('path');
const router=express.Router();
const bodyparser= require('body-parser');


app.use(express.urlencoded())

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static('public'));

router.get('/home',function (req ,res){
res.render('index');
})

router.get('/store',function (req ,res){
    res.render('store');
    })

    router.get('/about',function (req ,res){
        res.render('about');
        })


        router.get('/contact',function (req ,res){
            res.render('contact');
            })

            app.post('/work',async (req,res)=>{
                console.log(req.body)
                  const { error } = validatemessage(req.body); 
                  if (error) return res.status(400).render('contact',{error:error.details[0].message})
                
                  let message = new Message(
                req.body);
                   contact=await message.save();
                   console.log('data saved')
            
                 res.render('contact',{message:"thanks for the survey,wish to hear from you more"});
                  
                  console.log('contact saved')
              })
              

            app.use('/', router);
const port=process.env.PORT||900;
app.listen(port,()=>console.log(`listening on port ${port}...`));

