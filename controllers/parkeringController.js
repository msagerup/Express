const fetch = require('node-fetch');

 exports.parkeringsArea = async (req, res) => { 
   const apiParkOmraade = `https://www.vegvesen.no/ws/no/vegvesen/veg/parkeringsomraade/parkeringsregisteret/v1/parkeringsomraade/`;
   let reponseOmraade = await fetch(apiParkOmraade);
   let data = await reponseOmraade.json(); 
   data.forEach(info => {
      if(info.poststed === 'OSLO') {
         console.log(info);    
      };
   });
   const apiParkeingInfo = `https://www.vegvesen.no/ws/no/vegvesen/veg/parkeringsomraade/parkeringsregisteret/v1/parkeringstilbyder`; 
   let reponseParkeringInfo = await fetch(apiParkeingInfo);
   let dataParkeringInfo = await reponseParkeringInfo.json();
   console.log(dataParkeringInfo);
};

 
