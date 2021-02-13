const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.port || 5000;

interface Goal {
    title: string
}

app.get('/goals', (_req: any, res: { json: (arg0: Goal[]) => void; }) => {
    const goals = [
        {
            title: "Exercise daily"
        },
        {
            title: "Sleep 8 hours daily"
        },
        {
            title: "Study software engineering"
        }
    ]
    res.json(goals);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
