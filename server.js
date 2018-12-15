const express = require('express')
var rp = require('request-promise');
const app = express()
var UUID = require("uuid/v4")
const {google} = require('googleapis');
var bodyParser = require('body-parser')
app.use(bodyParser.json())        
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
res.redirect("/login") // Redirect to login page with Github, Google and Facebook Oauth2 logins
});

app.get('/googleURL' , (req,res) => {
    generateURLgoogle(res)

});

app.get('/googleRedirect', (req, res) => {
    console.log(req.query.code)
    const {tokens} = googleOAuth2.getToken(req.query.code);
    googleOAuth2.credentials = tokens;
  console.log(res.data);
  var p = new Promise(function (resolve, reject) {
    plus.people.get({ userId: 'me', auth: googleOAuth2 }, function(err, response) {
        resolve(response || err);
    });
}).then(function (data) {
    res.send(`
        &lt;img src=${data.image.url} /&gt;
        &lt;h3&gt;Hello ${data.displayName}&lt;/h3&gt;
    `);
})
    
 });



app.listen(3000, () => console.log('Example app listening on port 3000!'))


const googleOAuth2 = new google.auth.OAuth2(
    "589358627508-a7vg3a2amoqnh1a1kheaqlpfot8tg5v3.apps.googleusercontent.com",
    "GxMe-05I5mUuYNAYlaADqIwp",
    "https://oauthtestserver.localtunnel.me/googleRedirect"
);

function generateURLgoogle(res){

        const Scopes = [
            "https://www.googleapis.com/auth/userinfo.email"
        ]
        const url = googleOAuth2.generateAuthUrl({
            scope: Scopes
          });
          console.log("Oauth URL is: " + url)
          res.redirect(url);



}

function generateUUID(){
    value = UUID()
    return value
}



/* TODO:
1. SETUP SEQUELIZE DATABASE
2. SETUP LOGIN PAGE
3. SETUP GITHUB, GOOGLE AND FACEBOOK OAUTH2
4. SETUP GENERATOR TO MAKE RANDOM USER COOKIE NAMES AND RANDOM KEYS TO ENCRYPT AND SIGN COOKIES
5. CREATE PAGE TO TEST IF USER IS LOGGED IN AND VIA WHAT METHOD 
*/
