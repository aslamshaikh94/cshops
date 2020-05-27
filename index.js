const express = require('express');
const app = express();
const port = process.env.PORT || 5880;
const path = require('path');
const fs = require('fs')
const axios = require('axios')

app.get('/', (request, response)=> {
  const filePath = path.resolve(__dirname, './build', 'index.html'); 
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }     
    
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'CShops');
      data = data.replace(/\$OG_DESCRIPTION/g, 'CShops is online Commercial Shops for Manufacturers and Wholesalers');
      data = data.replace(/\$OG_KEYWORDS/g, 'Hand Scraper, Electric Motor, Induction Motor, Tile Cutter, Deck Scraper');
      let result = data.replace(/\$OG_IMAGE/g, 'https://cshops.in//logo.png');
      response.send(result);
    
  });
});

app.get('/product/:id', (request, response)=> {
  const filePath = path.resolve(__dirname, './build', 'index.html'); 
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }           
      let apiUrl = `https://api.cshops.in${request.url}/select?seokey=product_name,details,keywords,thumbnail`
      axios.get(apiUrl).then((resdata)=>{ 
        const  {product_name, details, thumbnail, keywords} = resdata.data
        let kwrds = JSON.parse(keywords)
          
        // replace the special strings with server generated strings
        data = data.replace(/\$OG_TITLE/g, product_name);
        data = data.replace(/\$OG_DESCRIPTION/g, details);
        data = data.replace(/\$OG_KEYWORDS/g, kwrds);
        let result = data.replace(/\$OG_IMAGE/g, thumbnail);
        response.send(result);
      }) 
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));