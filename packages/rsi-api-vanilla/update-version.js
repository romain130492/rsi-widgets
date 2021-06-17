require('dotenv').config({ path: './.env' })
const AWS = require('aws-sdk'),
fs = require('fs');
const path = require('path')




// What's that file ? :
// This file is launch when we do "lerna publish"
// This file takes care of the versionning of "rsi-api-vanilla" 
// It updates the version and create a new folder on our bucket akkadu-rsi-api-widget/rsi-api-vanilla/
// Example : 1.0.0/index.min.js
// It also updates the documentation with the new version : https://rsi-docs.akkadu.com/vanilla-js/versions.html
// The AWS credential in .env have to be set in order for the file to work. See "README-akkadu-dev.md"

var packageJson = require('./package.json'); 
const currentVersion = packageJson.version
const myBucket = 'akkadu-assets'
const filePath = path.resolve('./packages/rsi-api-vanilla/dist/index.min.js')

let tmpVersionFile = require('./tmp-version.json');
let tmpVersion;



if(tmpVersionFile && tmpVersionFile.tmpVersion){
  tmpVersion = tmpVersionFile.tmpVersion
}else{
  throw Error('./tmp-version.json doesnt have the key tmpVersion');
}

// We do not update our asset folder on AWS if the current packageJson version is equal to
// the version in the tmpVersion file
/* if(tmpVersion === currentVersion){
  console.info("No need to update rsi-api-vanilla on AWS akkadu-assets bucket. The version didn't change");
  return
}  */
/**
 * @description We write a new tmpVersion file
 */
 const writeTmpVersion = () =>{
  const newTmpVersion =  { tmpVersion: currentVersion }
  const toJSON  = JSON.stringify(newTmpVersion, null, "\t")
  fs.writeFile(`./packages/rsi-api-vanilla/tmp-version.json`, toJSON, function(err, result) {
    if(err) console.log('error', err);
   });
}

/**
 * @description To update the vanillaJs Version documentation with the new version.
 */
 const concatMarkdownDoc = () =>{
  fs.readFile('./rsi-api-documentation/docs/vanilla-js/versions.md', 'utf8', (err, doc) => {
    const newVersion = `- Version ${currentVersion}: https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-api-widget/rsi-api-vanilla/${currentVersion}/index.min.js`
    const newDoc = `${doc} \n ${newVersion}`
    fs.writeFile(`./rsi-api-documentation/docs/vanilla-js/versions.md`, newDoc, function(err, result) {
      if(err) console.log('error when updating the doc with the new version', err);
     });
  });
}


console.info('🚧🚧🚧');
console.info('Updating the version on our bucket akkadu-rsi-api-widget/rsi-api-vanilla/, it will take a few minutes ...');
console.info('🚧🚧🚧');
console.log('currentVersion',currentVersion);

AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, });
  fs.readFile(filePath, function (err, data) {
    if (err) { throw err; }
    var base64data = new Buffer(data, 'binary');
    var s3 = new AWS.S3();
    s3.putObject({
      Bucket: myBucket,
      Key: `akkadu-rsi-api-widget/rsi-api-vanilla/${currentVersion}/index.min.js`,
      Body: base64data,
      ACL: 'public-read'
    },function (resp) {
      console.log(`Successfully uploaded the new version of rsi-api-widget on AWS, version: ${currentVersion}.`);
      writeTmpVersion();
      concatMarkdownDoc()
    });
});


