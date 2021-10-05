const express = require('express');
const morgan = require('morgan');

const app = express();

const bountyRouter = require('./routes/bountyRouter')

const PORT = 3000;

//middleware



app.use(express.json());
app.use(morgan('dev'));
app.use('/bounties', bountyRouter);

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})