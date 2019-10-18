// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var reservations = [
    {
        id: "11111",
        name: "Jeff",
        email: "jeff@email.com",
        phone: "512-555-5532"
    },
    {
        id: "22222",
        name: "Marc",
        email: "marc@email.com",
        phone: "512-555-1234"
    }
];
var waitlist = [
    {
        id: "66666",
        name: "Someone",
        email: "someone@email.com",
        phone: "512-555-0912"
    }
];
app.get("/api/tables", function (req, res) {
    res.json({ reservations, waitlist });
});
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "html/index.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "html/tables.html"));
});
app.get("/res", function (req, res) {
    res.sendFile(path.join(__dirname, "html/res.html"));
});
app.post("/res", function (req, res) {

    var newreservation = req.body;

    console.log(newreservation);

    if (reservations.length < 5) {
        reservations.push(newreservation);

    } else {
        waitlist.push(newreservation);
    }

    res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});