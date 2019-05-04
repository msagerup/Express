const fetch = require('node-fetch');
exports.parkeringsArea = (req, res) => {
   const apiUrl = `https://www.vegvesen.no/ws/no/vegvesen/veg/parkeringsomraade/parkeringsregisteret/v1/parkeringsomraade/`;
   fetch(apiUrl)
      .then(data => data.json())
      .then(data => {
         data.forEach(info => {
            if(info.poststed === 'OSLO') {
               console.log(info);
            }
         })
      })
      
}