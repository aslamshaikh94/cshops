const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
const axios = require('axios')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);    
    next();
});

app.use(express.static(path.resolve(__dirname, './build')));

const replageHead = (req, res, next)=>{
  const filePath = path.resolve(__dirname, './build', 'index.html');
  
  let apiUrl = `https://api.cshops.in${req.url}`
  let fetchData = new Promise((resolve, reject)=>{
    axios.get(apiUrl).then((res)=>{
      resolve(res.data)
    }) 
  })

  fetchData.then((fdata)=>{
      const  {product_name, details, thumbnail} = fdata[0]    
      // read in the index.html file
      fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        
        // replace the special strings with server generated strings
        data = data.replace(/\$OG_TITLE/g, product_name);
        data = data.replace(/\$OG_DESCRIPTION/g, details);
        let result = data.replace(/\$OG_IMAGE/g, thumbnail);
        res.send(result);
        next()
      });
  })    
}


app.get('/', replageHead, function(request, response) {
  
});

app.get('/product/:id', replageHead, function(request, response) {
  
});





app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  console.log(filePath)
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));