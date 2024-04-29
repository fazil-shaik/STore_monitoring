const express = require('express');
const mongoose = require('mongoose');
const reportRoutes = require('./routes/reportRoutes');
const cors  = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const app = express();

mongoose.connect('mongodb://localhost:27017/storingData', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});


app.use(cors())


app.get('/',(req,res)=>{
  res.send({status:'server working fine'})
})

app.use(express.json());

app.use('/', reportRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
