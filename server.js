const path = requir('path');
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

//BOILERPLATE STARTER STUFF IF I EVER DECIDE TO IMPLEMENT A DATABASE.
// oneHr = 1000 * 60 * 60 * 1;
// const sess = {
//     secret: 'Super secret. for later. one day. just putting this here as boilerplate if i ever decide to use it. cool.',
//     cookie: {maxAge: oneHr},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));

app.listen(PORT, () => console.log(`Now listening on pot ${PORT}`));