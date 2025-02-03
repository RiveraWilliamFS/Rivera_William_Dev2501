const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const dogsRoute = require('./routes/dogs');
app.use('/api/dogs', dogsRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
