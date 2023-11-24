const photos = require("../db");

const updatePhoto = (data, id) => {
  const extData = photos.find((photo) => photo.id === parseInt(id, 10));
  if (!extData) {
    const error = new Error();
    error.status = 404;
    error.message = "Photo not found";
    throw error;
  }

  
  extData.title = data?.title || extData.url;
  extData.url = data?.url || extData.url;
  extData.thumbnailUrl = data?.url || extData.thumbnailUrl;

  return extData;
  
};

module.exports = updatePhoto;
