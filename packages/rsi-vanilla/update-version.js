require('dotenv').config({ path: './.env' })
const AWS = require('aws-sdk'),
fs = require('fs');
const path = require('path')




// What's that file ? :
// This file is launch when we do "lerna publish"
// This file takes care of the versionning of "rsi-vanilla" 
// It updates the version and create a new folder on our bucket akkadu-rsi-widget/rsi-vanilla/
// Example : 1.0.0/index.min.js
// It also updates the documentation with the new version : https://rsi-docs.akkadu.com/vanilla-js/versions.html
// The AWS credential in .env have to be set in order for the file to work. See "README-akkadu-dev.md"

var packageJson = require('./package.json'); 
const currentVersion = packageJson.version
const myBucket = 'akkadu-assets'
const filePathInterpretationPlayer = path.resolve('./packages/rsi-vanilla/dist/interpretation-player.min.js')
const filePathInterpretationManager = path.resolve('./packages/rsi-vanilla/dist/interpretation-manager.min.js')
const filePathInterpretationPlayerCss = path.resolve('./packages/rsi-vanilla/dist/index.min.css')

let tmpVersionFile = require(path.resolve('./packages/rsi-vanilla/tmp-version.json'));
let tmpVersion;

if(tmpVersionFile && tmpVersionFile.tmpVersion){
  tmpVersion = tmpVersionFile.tmpVersion
}else{
  throw Error('./tmp-version.json doesnt have the key tmpVersion');
}

// We do not update our asset folder on AWS if the current packageJson version is equal to
// the version in the tmpVersion file
 if(tmpVersion === currentVersion){
  console.info("No need to update rsi-vanilla on AWS akkadu-assets bucket. The version didn't change");
  return
}   
/**
 * @description We write a new tmpVersion file
 */
 const writeTmpVersion = () =>{
  const newTmpVersion =  { tmpVersion: currentVersion }
  const toJSON  = JSON.stringify(newTmpVersion, null, "\t")
  fs.writeFile(`./packages/rsi-vanilla/tmp-version.json`, toJSON, function(err, result) {
    if(err) console.error('error', err);
   });
}

/**
 * @description To update the vanillaJs Version documentation with the new version.
 */
 const concatMarkdownDoc = (fileName, ext) =>{
  fs.readFile('./rsi-documentation/docs/vanilla-js/versions.md', 'utf8', (err, doc) => {
    const newVersion = `- Version ${currentVersion}: https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-widget/rsi-vanilla/${currentVersion}/${fileName}.min.${ext}`
    const newDoc = `${doc} \n ${newVersion}`
    fs.writeFile(`./rsi-documentation/docs/vanilla-js/versions.md`, newDoc, function(err, result) {
      if(err) console.error('error when updating the doc with the new version', err);
     });
  });
}


console.info('🚧🚧🚧');
console.info('Updating the version on our bucket akkadu-rsi-widget/rsi-vanilla/, it will take a few minutes ...');
console.info('🚧🚧🚧');
console.info('currentVersion',currentVersion);

const updateAWS = (file, fileName, ext, contentType = 'application/javascript') =>{
  fs.readFile(file, function (err, data) {
    if (err) { throw err; }
    var base64data = new Buffer(data, 'binary');
    var s3 = new AWS.S3();
    s3.putObject({
      Bucket: myBucket,
      Key: `akkadu-rsi-widget/rsi-vanilla/${currentVersion}/${fileName}.min.${ext}`,
      Body: base64data,
      ACL: 'public-read',
      ContentType: contentType
    },function (resp) {
      console.info(`Successfully uploaded the new version of rsi-widget on AWS, version: ${currentVersion}.`);
      writeTmpVersion();
      concatMarkdownDoc(fileName, ext)
    });
});
}


AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, });


updateAWS(filePathInterpretationPlayer, 'interpretation-player', 'js')
updateAWS(filePathInterpretationPlayerCss, 'interpretation-player', 'css', 'text/css')
updateAWS(filePathInterpretationManager, 'interpretation-manager', 'js')



