const photos = require("../db");

const getSinglePhoto = (id) =>{
    const data = photos.find((photo)=> photo.id === parseInt(id));
   
    if(!data){
        const error = new Error();
        error.message = "Photo not found";
        error.status = 404;
        throw error;
    };
    return data;

};

module.exports = getSinglePhoto;