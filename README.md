![c_monetas_logo_rgb](https://cloud.githubusercontent.com/assets/18722686/16418153/f4456e94-3d48-11e6-8443-fc0c885a4ee3.png)
## Your Monetas wallet, anywhere and anytime

A beautiful, elegant and simple to use Monetas wallet interface that showcases nearly all of the Monetas platform's current features. Experience the Monetas platform using any web browser, and for an optimized mobile experience download the iOS or Android app.

![webapp-screenshot](https://cloud.githubusercontent.com/assets/18722686/17404559/67d06712-5a5c-11e6-9681-b14aa34fc070.png)

### What's new in version 1.0.0
- Send and receive any asset, whether it's Swiss Francs, Bitcoins, or company stock
- Instantly exchange any asset for any other asset
- Simple and fast access via Google, Facebook or a custom login
- Manage your address book
- Review your transfer history
- Receive notifications when important actions occur
- Send and receive transfers and contact details via QR code scans (mobile apps only)


## How to use this project

Run npm and bower to get all needed dependencies:

```bash
$ npm install
$ bower install
```

## How this project is structured

All working files are underneath the 'src' folder trying to follow the [angular styleguide](https://github.com/johnpapa/angular-styleguide) created by [johnpapa](https://github.com/johnpapa).

    /src
        /app
        /images
        /lib
        /styles
        index.html


Everything is set up to serve from this src folder using
```bash
$ ionic serve
```

## Build process

This project comes with a before_build hook to run the 'gulp build' task before actually building the app with cordova. The 'gulp build' task concatenates, minifies and copies the files into the 'www' folder from where cordova is loading the files. So you can just use the standard ionic build commands:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

## Included gulp tasks

A bunch of useful gulp tasks have been copied from the [HotTowel yeoman generator](https://github.com/johnpapa/generator-hottowel) created by [johnpapa](https://github.com/johnpapa) and modified to work with ionic.

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

### Testing

- `gulp test`

    Runs all unit tests using karma runner & jasmine with phantomjs. Depends on vet task, for code analysis.

### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders

- `gulp clean-images`

    Remove all images from the build folder

- `gulp clean-code`

    Remove all javascript and html from the build folder

- `gulp clean-fonts`

    Remove all fonts from the build folder

- `gulp clean-styles`

    Remove all styles from the temp and build folders

### Fonts and Images

- `gulp fonts`

    Copy the ionic fonts from source to the build folder

- `gulp images`

    Copy all images from source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS and copy to the build folder

### Lib Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.
    The `.bowerrc` file also runs this as a postinstall task whenever `bower install` is run.

    **NOTE:**
    wiredep will only grab the bower dependencies that are listed in you bower.json file. Use the `--save` flag when installing dependencies via bower to add them to automatically add them to you bower.json file.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `ionic serve`

    You can us the standard ionic serve task here.


### Building Production Code

- `gulp optimize`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies the ionic fonts, copies images and runs `gulp optimize` to build the production code to the build folder.

**NOTE:** This project contains a before_build hook for cordova which so that the gulp build task is run automatically when building with `cordova build [platfrom]` or `ionic build [platfrom]`

### Proof of concept diagram 
![setup-1 copy](https://cloud.githubusercontent.com/assets/18722686/17585344/778bbec2-5fbb-11e6-9df0-d57d9e5b0943.png)

### GoatD interactions diagram
![goatd interactions diagram](https://cloud.githubusercontent.com/assets/18722686/17585382/a45b48b4-5fbb-11e6-8c28-796c0a8ba1c3.png)
