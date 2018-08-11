var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});
 
  console.log("Started");

// resize and remove EXIF profile data
gm('./images/placeholder1.jpg')
.crop(446.78599762126095, 500.7594240457192, 96.39042364926259, 3.3095612007453905)
.write('./output-images/placeholder1.jpg', function (err) {
  if (!err) console.log('done');
  else{
      console.log(err);
  }
});
