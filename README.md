# GDGLaPlataFront
Web site of GDG La Plata (Front)

http://gdglaplata.github.io/GDGLaPlataFront/

Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code. The tools help us manage and test the application.

We get the tools we depend upon via npm, the node package manager.
We get the AngularJS code via bower, a client-side code package manager.
We have preconfigured npm to automatically run bower so we can simply do:

npm install
Behind the scenes this will also call bower install. You should find that you have two new folders in your project.

node_modules - contains the npm packages for the tools we need
app/bower_components - contains the AngularJS framework files

Running the App during Development

The angular-seed project comes pre-configured with a local development web server. It is a node.js tool called http-server. You can install http-server globally:

npm install -g live-server
Then you can start your own development web server to serve static files from a folder by running:

cd app
live-server
Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just configure your server to serve the files under the app/ directory.