const {Router}= require("express");
const photos = require("../db");
const simulateApiCall = require("../utils/simulateApiCall");
const getPhotos = require("../services/getPhotos");
const getSinglePhoto = require("../services/getSinglePhoto");
const createPhoto = require("../services/createPhoto");
const deletePhotos = require("../services/deletePhoto");
const updatePhoto = require("../services/updatePhoto");
const router = Router();


router.get("/health", (req, res)=>{
    res.status(200).json({
        message: "OK ✔️"
    })
})


// Get All Photo
router.get("/photos", async(req, res, next)=>{
    try{
        const {_start, _limit} = req.query;
        const start = parseInt(_start, 10) || 0;
        const limit = parseInt(_limit, 10) || photos.length;
        const data = await simulateApiCall(()=>getPhotos(start, start+limit));

        res.json({
            message: "Ok👍", data
        }).status(200);
    }catch(error){
        console.log(error);
        next(error);
    }
});

// Get Single Photo
router.get("/photos/:id", async(req, res, next)=>{
    try{
        const {id} = req.params;
        const key = `photo:${id}`;
        const photo = await simulateApiCall(()=>getSinglePhoto(id));
        res.json({
            message: "ok", data: photo
        })
    }catch(error){
        console.log(error);
        next(error)
    }
});

// Create Photo
router.post("/photos", async(req, res, next)=>{
    try{
        const {title, url, thumbnailUrl, albumId}= req.body;

        const photo = await createPhoto({title, url, thumbnailUrl, albumId});
        res.json({message:"ok", data: photo}).status(201);
    }catch(error){
        console.log(error);
        next(error)
    }
});
// Update Photo
router.patch("/photos/:id", async(req, res, next)=>{
   try{
    const {id}= req.params;
    const updatePh = updatePhoto(req.body, id);
    res.json({message:"update ok", data: updatePh}).status(200);
   }catch(error){
    console.log(error);
    next(error)
   }
})

// Delete Photo
router.delete("/photos/:id", async(req, res, next)=>{
    try {
        const {id}= req.params;
        const deletePhoto = deletePhotos(id);
        res.json({message: "ok", data: deletePhoto});
    } catch (error) {
        console.log(error);
        next(error)
    }
})
module.exports = router;