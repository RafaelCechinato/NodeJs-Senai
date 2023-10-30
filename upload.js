const crypto = require("crypto");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const multer = require('multer');
const multerConfig = require("./multer"); 

aws.config.update({
    accessKeyId: 'AKIA5IBLWAR76JECGXZX',
    secretAccessKey: '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',
    region: 'us-east-2',
});

const upload = multer({
    storage: multerS3({
      s3:  new aws.S3(),
      bucket: 'senai-rafael',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);
          const fileName = `uploads/${hash.toString("hex")}-${file.originalname}`;
          cb(null, fileName);
        });
      },
      local: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
        },
        filename: (req, file, cb) => {
          crypto.randomBytes(16, (err, hash) => {
            if (err) cb(err);
  
            file.key = `${hash.toString("hex")}-${file.originalname}.${file.mimetype}`;
  
            cb(null, file.key);
          });
        },
      })
    }),
    limits: { fileSize: multerConfig.fileSize["5mb"] },
    // fileFilter: (req, file, cb) => {
    //     const allowedMimes = [...multerConfig.fileType.image];
    //     if (allowedMimes.includes(file.mimetype)) {
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //     }
    // }
  });
  


module.exports = upload
