#GC
Please make sure to install nodejs in your machine. Please refer to [node.js](http://nodejs.org/) to download nodejs.

## Building GC
* Run `npm install bower -g`
* Run `npm install gulp -g` 
* Run `npm install`
* Run `bower install`
* Open `GiftCertApp.sln` solution in **visual studio**
* Please configure the app config in  `APP_DATA/config/[MACHINE_NAME].json`
* Run `gulp build` or `gulp dev` 
* Run the solution by pressing `ctrl+F5`

## For email notification
* Please download [smtp4dev](http://smtp4dev.codeplex.com/) 

## Sample config file
```
{
	"connectionString": "Server=server;Database=GCDB;Trusted_Connection=True;",
	"AdConnectionString": "Server=server;Database=Param;Trusted_Connection=True;",
	"BaseUrl": "http://localhost:50174/",
	"EmailServiceAccount": "noreply@gc.com"
}
```
 
## Additional Resource
* [node.js](http://nodejs.org/)
* [gulpjs.js](http://gulpjs.com/)
* [npmjs](https://www.npmjs.org/)