const File=require("../models/File");
const cloudinary=require("cloudinary").v2;




//valdiation
function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}


async function uploadFileToCloudinary(file,folder){
    const options={folder};

    // if(quality) {
    //     options.quality = quality;
    // }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);

}



//image uploadka handler






exports.imageUpload=async (req,res)=>{
try{

  //data fetch
  const {name,tags,email,message}=req.body;
//    console.log(name,tags,email,message);

   const file=req.files.imageFile;
   console.log(file);

   //validation
   const supportedTypes=["jpg","jpeg","png"];

   const fileType=file.name.split('.')[1].toLowerCase();


if(!isFileTypeSupported(fileType,supportedTypes)){
return res.status(400).json({
    success:false,
    message:"file format not supported",
})

}
//file format suppoted hai

const response=await uploadFileToCloudinary(file,"College-Solution");
console.log(response);
//db me entry

const fileData=await File.create({
    name,
    tags,
    email,
    message,
    imageUrl:response.secure_url,
})

res.json({
    success:true,
    imageUrl:response.secure_url,
    message:'Image Uploaded SuccessFully'
})

}
catch(error){

console.error(error);
res.status(400).json({
    success:false,
    message:'Something went wrong',
})

}

}



//video upload ka handler

exports.videoUpload = async (req,res) => {
    try{
        //data fetch
        const { name, tags, email,message} = req.body;
        console.log(name,tags,email,message);
        
        const file = req.files.videoFile;

         //Validation
         const supportedTypes = ["mp4", "mov"];
         const fileType = file.name.split('.')[1].toLowerCase();
         console.log("File Type:", fileType);
 
         //TODO: add a upper limit of 5MB for Video
         if(!isFileTypeSupported(fileType, supportedTypes)) {
             return res.status(400).json({
                 success:false,
                 message:'File format not supported',
             })
         }

          //file format supported hai

        const response = await uploadFileToCloudinary(file, "College-Solution");
        console.log(response);

        //db me entry save krni h
        const fileData = await File.create({
            name,
            tags,
            email,
            message,
            videoUrl:response.secure_url,
        });

        res.json({
            success:true,
            videoUrl:response.secure_url,
            message:'Video Successfully Uploaded',
        })

    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}