let express = require('express');
let app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/:id', (request, response)=> {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  console.log(`request made to: ${request.url}`)
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }     
      let apiUrl = `https://api.cshops.in${request.url}`
      axios.get(apiUrl).then((resdata)=>{      
      const  {product_name, details, thumbnail} = resdata.data[0]
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, product_name);
      data = data.replace(/\$OG_DESCRIPTION/g, "details");
      data = data.replace(/\$OG_KEYWORDS/g, "product_name");
      let result = data.replace(/\$OG_IMAGE/g, "thumbnail");
      response.send(result);
    }) 
  });
});

module.exports = app;