const express = require('express')
var rp = require('request-promise');
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
/* TODO:
1. SETUP SEQUELIZE DATABASE
2. SETUP LOGIN PAGE
3. SETUP GITHUB, GOOGLE AND FACEBOOK OAUTH2
4. SETUP GENERATOR TO MAKE RANDOM USER COOKIE NAMES AND RANDOM KEYS TO ENCRYPT AND SIGN COOKIES
5. CREATE PAGE TO TEST IF USER IS LOGGED IN AND VIA WHAT METHOD 
*/

a