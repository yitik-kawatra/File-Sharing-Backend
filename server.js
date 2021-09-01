const express=require('express');

const app=express();
const PORT=process.env.PORT ||3000;

const connectDB=require('./config/db.js');
connectDB();

const corsOptions={
    origin:process.env.ALLOWED_URLS.split(',')
}
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.json());

app.set('view engine','ejs')
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})