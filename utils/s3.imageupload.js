// import AWS from 'aws-sdk';
// import dotenv from 'dotenv';
// dotenv.config();

// AWS.config.update({
//     accessKeyId: process.env.S3_ACCESS_KEY_ID,
//     secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//     region: process.env.S3_REGION 
// });

// const s3 = new AWS.S3();
// const bucketName = process.env.S3_BUCKET_NAME;

// const s3FileUpload = async (dataBuffer, s3FilePath) => {
//     try {
        
//         const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
//         const uniqueFileName = `${timestamp}-${s3FilePath}`;

//         // Upload the file to S3
//         const uploadResult = await s3.upload({
//             Bucket: bucketName,
//             Body: dataBuffer,
//             Key: uniqueFileName
//         }).promise();

//         // Return the uploaded file's URL
//         return uploadResult.Location;
//     } catch (error) {
//         console.error('Error in s3FileUpload function:', error);
//         return ('Error uploading file to S3'); 
//     }
// };

// export default s3FileUpload;
