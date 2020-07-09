const Service = require('egg').Service;
const moment = require('moment');

const fs = require("fs");
const path = require("path");
const qiniu = require("qiniu");
const awaitWriteStream = require("await-stream-ready").write;
const sendToWormhole = require("stream-wormhole");
const md5 = require("md5");
const await = require('await-stream-ready/lib/await');
const bucket = 'zjmblog'; //要上传的空间名
const imageUrl = "http://qn.zjmyun.xyz/"; // 空间绑定的域名
const accessKey = 'ByLHJMPzIxxBgvsv6qaCUYFwo-4t8b2SxE22UzZ3'; //Access Key
const secretKey = 'fOU99lxpcb4eT_7jHQsmPVHveWI9yVRLjl5oOh7Z'; //Secret Key
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: bucket
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);
let config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z2;

// console.log('aaa')

class FilesService extends Service {
    async upload(params) {
      const { mongoose } = this.app;
      const {ctx} = this;
      let result = {};
      const stream = await ctx.getFileStream();
      const formUploader = new qiniu.form_up.FormUploader(config);
      const putExtra = new qiniu.form_up.PutExtra(); 
      console.log(stream)
      const filename = stream.fieldname+'-'+moment(new Date()).format('YYYYMMDDHHmmss')+path.extname(stream.filename).toLocaleLowerCase();
      try {
        const imgSrc = await new Promise((resolve, reject) => {
            formUploader.putStream(uploadToken, filename, stream, putExtra, function(respErr,
                respBody, respInfo) {
                    // console.log(respBody)
                    if (respErr) {
                        reject("");
                    }
                    if (respInfo.statusCode == 200) {
                        resolve(imageUrl + respBody.key);
                    } else {
                        reject("");
                    }
                    // 上传之后删除本地文件
                    // fs.unlinkSync(localFilePath);
              });
        })
        if (imgSrc !== "") {
            return {
               code:20000,
               data: {imgurl:imgSrc},
               errmsg:'success'
            };
        } else {
            return {
                code:30000,
                message:'图片上传失败!'
            };
         }
      }catch{
        await sendToWormhole(stream);
        return {
            code:30000,
            message:'图片上传失败!'
        };
      }

    //   result={
    //     code:20000,
    //     data:{
    //       total:[]
    //     },
    //     errmsg:'success'
    //   };
    //   return result;     
    };


  }

  module.exports = FilesService;