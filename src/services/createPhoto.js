const photos = require("../db");
const createPhoto = (data)=>{
    const id = photos.length +1;
    const newPhoto = photos.push({...data, id});
    // console.log("newPhoto", newPhoto);

    return {...data, id}
};

module.exports = createPhoto;