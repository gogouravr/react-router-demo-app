import express from 'express';


const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})