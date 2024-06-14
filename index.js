import express from "express";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    // console.log(day);
    let type = "";
    let adv = "";

    if (day === 0 || day === 6) {
        type = "a weekend";
        adv = "sleep";
    } else {
        type = "a weekday";
        adv = "work hard";
    }

    res.render("index.ejs" , {
        dayType: type, 
        advice: adv,
    })
})

app.listen(port, () => {
    console.log(`server running on ${port}`);
});