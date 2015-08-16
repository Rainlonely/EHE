# EHE
This project use Grunt+ bower + BroswerSync as font-end develop frame workm, [grunt](http://gruntjs.com),[bower](http://bower.io),[BrowserSync](http://browsersync.io).

## Project Structure
  * **app**: sourece code
  	* **app/assets** css，image，less
  	* **app/view** html 
  * **Gruntfile.js**：grunt config file
  * **package.json**：nodejs npm config file
  * **bower.json**：bower config file
  * **bs-config.js**：BrowserSync config file

## Install
### 1 Install Node.js & npm

[安装文档](http://nodejs.org/download/)


### 2 Project depends module
cd into project dir, run $ npm install

### 3 Install Grunt
'$ npm install -g grunt-cli'

### 4 Install Bower
'$ npm install -g bower'

### 5 Install plugin by bower json file
'$ bower install'

## 3 Build
### 1 Build
After installed everything, run 
'$ grunt build'

grunt will run all the child task, include build less to css, compress html,css, js all the result will save in folder 'dist'

### 2 Listen to change source code
After run grunt build first, you could use grunt to watch your change
'$ grunt'

this function include 'bowser-syn' and 'watch'

'bowser-syn' will start web server

'watch' will listen files under app folder and auto refresh page
