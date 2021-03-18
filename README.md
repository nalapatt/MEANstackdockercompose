# MEANstackdockercompose

This Project creates a MEAN stack Mongo database, Express Server, Angular CLI an
d Node Js to create a single page application , dockerizes them into three conta
iners using docker compose


Prerequistes

Open port 4200, 3000, 27107 and http 80 on your instance

(Included in notes of nalapatt/HowToinstallinaws)
Install Docker
Install Docker Compose

Verify if installed by 
docker --version
docker-compose --version
node --version

mkdir MeanAngExpNodeMongoDockerFile
cd MeanAngExpNodeMongoDockerFile

npx @angular/cli new angular-client

? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS

your directory should look like this
└── MeanAngExpNodeMongoDockerFile
    └── angular-client
    your directory should look like this
        ├── README.md
        ├── angular.json
        ├── e2e
        ├── node_modules
        ├── package.json
        ├── package-lock.json
        ├── src
        ├── tsconfig.json
        └── tslint.json
        
        
 cd angular-client
 create a dockerfile
 
 vi Dockerfile
 add this inside
 
FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN  npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm", "start"] 


esc:wq to save and quit

vi .dockerignore
add this
node_modules/
esc:wq to save and quit

vi package.json
delete "start": "ng serve 
replace with    "start": "ng serve --host 0.0.0.0  --disable-host-check",
esc:wq to save and quit
 
Now build it
sudo docker build -t angular-client:dev .

Now create the container
sudo docker run -d --name angular-client -p 4200:4200 angular-client:dev

sudo start angular-client
now go to your ip address :4200 and you should be able to view your angular page

sudo stop angular-client to stop the container

Now you have deployed your first container containing angular manually using you
r dockerfile

Now Deploy your Express Container

mkdir express-server
cd  express-server

vi Dockerfile
add this
# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
esc :wq to save and quit
Last login: Thu Mar 18 11:58:55 on console

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
Neenas-MBP:~ neena$ cd Downloads
Neenas-MBP:Downloads neena$ ssh -i "aws_master_key.pem" ubuntu@ec2-18-212-171-255.compute-1.amazonaws.com
Welcome to Ubuntu 18.04.5 LTS (GNU/Linux 5.4.0-1038-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

 System information disabled due to load higher than 1.0


18 packages can be updated.
17 of these updates are security updates.
To see these additional updates run: apt list --upgradable

New release '20.04.2 LTS' available.
Run 'do-release-upgrade' to upgrade to it.


Last login: Thu Mar 18 14:33:51 2021 from 24.197.169.171
ubuntu@ip-172-31-93-5:~$ dir
mean
ubuntu@ip-172-31-93-5:~$ cd mean
ubuntu@ip-172-31-93-5:~/mean$ dir
ang
ubuntu@ip-172-31-93-5:~/mean$ cd ang
ubuntu@ip-172-31-93-5:~/mean/ang$ dir
angular-client	docker-compose.yml  express-server
ubuntu@ip-172-31-93-5:~/mean/ang$ git init
Initialized empty Git repository in /home/ubuntu/mean/ang/.git/
ubuntu@ip-172-31-93-5:~/mean/ang$ git clone https://github.com/nalapatt/MeanAngExpNodeMongoDockerFile.git
Cloning into 'MeanAngExpNodeMongoDockerFile'...
remote: Enumerating objects: 15, done.
remote: Counting objects: 100% (15/15), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 15 (delta 3), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (15/15), done.
ubuntu@ip-172-31-93-5:~/mean/ang$ dir
MeanAngExpNodeMongoDockerFile  docker-compose.yml
angular-client		       express-server
ubuntu@ip-172-31-93-5:~/mean/ang$ cd MeanAngExpNodeMongoDockerFile
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cp ../angular-clinet angular-client
cp: cannot stat '../angular-clinet': No such file or directory
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cp  ../angular-clinet angular-client
cp: cannot stat '../angular-clinet': No such file or directory
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cp  ../angular-client angular-client
cp: -r not specified; omitting directory '../angular-client'
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cp  -r ../angular-client angular-client

ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ 
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ dir
README.md  angular-client
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cd angular-client
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ dir
Dockerfile    e2e	     package-lock.json	tsconfig.app.json   tslint.json
README.md     karma.conf.js  package.json	tsconfig.json
angular.json  node_modules   src		tsconfig.spec.json
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ cd ../
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cp  -r ../express-server express-server
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ dir
README.md  angular-client  express-server
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cp  docker-compose.yml docker-compose.yml
cp: cannot stat 'docker-compose.yml': No such file or directory
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cp  ../docker-compose.yml docker-compose.yml
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ dir
README.md  angular-client  docker-compose.yml  express-server
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cd ../
ubuntu@ip-172-31-93-5:~/mean/ang$ dir
MeanAngExpNodeMongoDockerFile  docker-compose.yml
angular-client		       express-server
ubuntu@ip-172-31-93-5:~/mean/ang$ cd MeanAngExpNodeMongoDockerFile
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ dir
README.md  angular-client  docker-compose.yml  express-server
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	angular-client/
	docker-compose.yml
	express-server/

nothing added to commit but untracked files present (use "git add" to track)
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git add .
warning: adding embedded git repository: angular-client
hint: You've added another git repository inside your current repository.
hint: Clones of the outer repository will not contain the contents of
hint: the embedded repository and will not know how to obtain it.
hint: If you meant to add a submodule, use:
hint: 
hint: 	git submodule add <url> angular-client
hint: 
hint: If you added this path by mistake, you can remove it from the
hint: index with:
hint: 
hint: 	git rm --cached angular-client
hint: 
hint: See "git help submodule" for more information.
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cd angular-client
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ dor

Command 'dor' not found, did you mean:

  command 'dog' from snap dog (0.1.0)
  command 'dar' from deb dar
  command 'dot' from deb graphviz
  command 'sor' from deb pccts
  command 'dir' from deb coreutils
  command 'oor' from deb openoverlayrouter
  command 'dog' from deb sheepdog
  command 'drr' from deb plastimatch
  command 'tor' from deb tor
  command 'vor' from deb vor

See 'snap info <snapname>' for additional versions.

ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ dir
Dockerfile    e2e	     package-lock.json	tsconfig.app.json   tslint.json
README.md     karma.conf.js  package.json	tsconfig.json
angular.json  node_modules   src		tsconfig.spec.json
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ ls -l
total 1336
-rw-rw-r--   1 ubuntu ubuntu     159 Mar 18 16:03 Dockerfile
-rw-rw-r--   1 ubuntu ubuntu    1022 Mar 18 16:02 README.md
-rw-rw-r--   1 ubuntu ubuntu    3599 Mar 18 16:02 angular.json
drwxrwxr-x   3 ubuntu ubuntu    4096 Mar 18 16:02 e2e
-rw-rw-r--   1 ubuntu ubuntu    1431 Mar 18 16:02 karma.conf.js
drwxrwxr-x 882 ubuntu ubuntu   36864 Mar 18 16:03 node_modules
-rw-rw-r--   1 ubuntu ubuntu 1282047 Mar 18 16:03 package-lock.json
-rw-rw-r--   1 ubuntu ubuntu    1240 Mar 18 16:03 package.json
drwxrwxr-x   5 ubuntu ubuntu    4096 Mar 18 16:02 src
-rw-rw-r--   1 ubuntu ubuntu     287 Mar 18 16:02 tsconfig.app.json
-rw-rw-r--   1 ubuntu ubuntu     538 Mar 18 16:02 tsconfig.json
-rw-rw-r--   1 ubuntu ubuntu     333 Mar 18 16:02 tsconfig.spec.json
-rw-rw-r--   1 ubuntu ubuntu    3185 Mar 18 16:02 tslint.json
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ ls -a
.                .git          e2e                src
..               .gitignore    karma.conf.js      tsconfig.app.json
.browserslistrc  Dockerfile    node_modules       tsconfig.json
.dockerignore    README.md     package-lock.json  tsconfig.spec.json
.editorconfig    angular.json  package.json       tslint.json
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ cat .gitignore
# See http://help.github.com/ignore-files/ for more about ignoring files.

# compiled output
/dist
/tmp
/out-tsc
# Only exists if Bazel was run
/bazel-out

# dependencies
/node_modules

# profiling files
chrome-profiler-events*.json
speed-measure-plugin*.json

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ vi .gitignore
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ ls -la
total 1364
drwxrwxr-x   6 ubuntu ubuntu    4096 Mar 18 16:07 .
drwxrwxr-x   5 ubuntu ubuntu    4096 Mar 18 16:04 ..
-rw-rw-r--   1 ubuntu ubuntu     703 Mar 18 16:02 .browserslistrc
-rw-rw-r--   1 ubuntu ubuntu      13 Mar 18 16:03 .dockerignore
-rw-rw-r--   1 ubuntu ubuntu     274 Mar 18 16:02 .editorconfig
drwxrwxr-x   8 ubuntu ubuntu    4096 Mar 18 16:03 .git
-rw-rw-r--   1 ubuntu ubuntu     653 Mar 18 16:07 .gitignore
-rw-rw-r--   1 ubuntu ubuntu     159 Mar 18 16:03 Dockerfile
-rw-rw-r--   1 ubuntu ubuntu    1022 Mar 18 16:02 README.md
-rw-rw-r--   1 ubuntu ubuntu    3599 Mar 18 16:02 angular.json
drwxrwxr-x   3 ubuntu ubuntu    4096 Mar 18 16:02 e2e
-rw-rw-r--   1 ubuntu ubuntu    1431 Mar 18 16:02 karma.conf.js
drwxrwxr-x 882 ubuntu ubuntu   36864 Mar 18 16:03 node_modules
-rw-rw-r--   1 ubuntu ubuntu 1282047 Mar 18 16:03 package-lock.json
-rw-rw-r--   1 ubuntu ubuntu    1240 Mar 18 16:03 package.json
drwxrwxr-x   5 ubuntu ubuntu    4096 Mar 18 16:02 src
-rw-rw-r--   1 ubuntu ubuntu     287 Mar 18 16:02 tsconfig.app.json
-rw-rw-r--   1 ubuntu ubuntu     538 Mar 18 16:02 tsconfig.json
-rw-rw-r--   1 ubuntu ubuntu     333 Mar 18 16:02 tsconfig.spec.json
-rw-rw-r--   1 ubuntu ubuntu    3185 Mar 18 16:02 tslint.json
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile/angular-client$ cd ../
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git add .
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git commit -m "adding file"
[master 7af5c7b] adding file
 Committer: Ubuntu <ubuntu@ip-172-31-93-5.ec2.internal>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 315 files changed, 46950 insertions(+)
 create mode 160000 angular-client
 create mode 100644 docker-compose.yml
 create mode 100644 express-server/.dockerignore
 create mode 100644 express-server/Dockerfile
 create mode 120000 express-server/node_modules/.bin/mime
 create mode 100644 express-server/node_modules/.package-lock.json
 create mode 100644 express-server/node_modules/accepts/HISTORY.md
 create mode 100644 express-server/node_modules/accepts/LICENSE
 create mode 100644 express-server/node_modules/accepts/README.md
 create mode 100644 express-server/node_modules/accepts/index.js
 create mode 100644 express-server/node_modules/accepts/package.json
 create mode 100644 express-server/node_modules/array-flatten/LICENSE
 create mode 100644 express-server/node_modules/array-flatten/README.md
 create mode 100644 express-server/node_modules/array-flatten/array-flatten.js
 create mode 100644 express-server/node_modules/array-flatten/package.json
 create mode 100644 express-server/node_modules/body-parser/HISTORY.md
 create mode 100644 express-server/node_modules/body-parser/LICENSE
 create mode 100644 express-server/node_modules/body-parser/README.md
 create mode 100644 express-server/node_modules/body-parser/index.js
 create mode 100644 express-server/node_modules/body-parser/lib/read.js
 create mode 100644 express-server/node_modules/body-parser/lib/types/json.js
 create mode 100644 express-server/node_modules/body-parser/lib/types/raw.js
 create mode 100644 express-server/node_modules/body-parser/lib/types/text.js
 create mode 100644 express-server/node_modules/body-parser/lib/types/urlencoded.js
 create mode 100644 express-server/node_modules/body-parser/package.json
 create mode 100644 express-server/node_modules/bytes/History.md
 create mode 100644 express-server/node_modules/bytes/LICENSE
 create mode 100644 express-server/node_modules/bytes/Readme.md
 create mode 100644 express-server/node_modules/bytes/index.js
 create mode 100644 express-server/node_modules/bytes/package.json
 create mode 100644 express-server/node_modules/content-disposition/HISTORY.md
 create mode 100644 express-server/node_modules/content-disposition/LICENSE
 create mode 100644 express-server/node_modules/content-disposition/README.md
 create mode 100644 express-server/node_modules/content-disposition/index.js
 create mode 100644 express-server/node_modules/content-disposition/package.json
 create mode 100644 express-server/node_modules/content-type/HISTORY.md
 create mode 100644 express-server/node_modules/content-type/LICENSE
 create mode 100644 express-server/node_modules/content-type/README.md
 create mode 100644 express-server/node_modules/content-type/index.js
 create mode 100644 express-server/node_modules/content-type/package.json
 create mode 100644 express-server/node_modules/cookie-signature/.npmignore
 create mode 100644 express-server/node_modules/cookie-signature/History.md
 create mode 100644 express-server/node_modules/cookie-signature/Readme.md
 create mode 100644 express-server/node_modules/cookie-signature/index.js
 create mode 100644 express-server/node_modules/cookie-signature/package.json
 create mode 100644 express-server/node_modules/cookie/HISTORY.md
 create mode 100644 express-server/node_modules/cookie/LICENSE
 create mode 100644 express-server/node_modules/cookie/README.md
 create mode 100644 express-server/node_modules/cookie/index.js
 create mode 100644 express-server/node_modules/cookie/package.json
 create mode 100644 express-server/node_modules/debug/.jshintrc
 create mode 100644 express-server/node_modules/debug/.npmignore
 create mode 100644 express-server/node_modules/debug/History.md
 create mode 100644 express-server/node_modules/debug/Makefile
 create mode 100644 express-server/node_modules/debug/Readme.md
 create mode 100644 express-server/node_modules/debug/bower.json
 create mode 100644 express-server/node_modules/debug/browser.js
 create mode 100644 express-server/node_modules/debug/component.json
 create mode 100644 express-server/node_modules/debug/debug.js
 create mode 100644 express-server/node_modules/debug/node.js
 create mode 100644 express-server/node_modules/debug/package.json
 create mode 100644 express-server/node_modules/depd/History.md
 create mode 100644 express-server/node_modules/depd/LICENSE
 create mode 100644 express-server/node_modules/depd/Readme.md
 create mode 100644 express-server/node_modules/depd/index.js
 create mode 100644 express-server/node_modules/depd/lib/browser/index.js
 create mode 100644 express-server/node_modules/depd/lib/compat/callsite-tostring.js
 create mode 100644 express-server/node_modules/depd/lib/compat/event-listener-count.js
 create mode 100644 express-server/node_modules/depd/lib/compat/index.js
 create mode 100644 express-server/node_modules/depd/package.json
 create mode 100644 express-server/node_modules/destroy/LICENSE
 create mode 100644 express-server/node_modules/destroy/README.md
 create mode 100644 express-server/node_modules/destroy/index.js
 create mode 100644 express-server/node_modules/destroy/package.json
 create mode 100644 express-server/node_modules/ee-first/LICENSE
 create mode 100644 express-server/node_modules/ee-first/README.md
 create mode 100644 express-server/node_modules/ee-first/index.js
 create mode 100644 express-server/node_modules/ee-first/package.json
 create mode 100644 express-server/node_modules/encodeurl/HISTORY.md
 create mode 100644 express-server/node_modules/encodeurl/LICENSE
 create mode 100644 express-server/node_modules/encodeurl/README.md
 create mode 100644 express-server/node_modules/encodeurl/index.js
 create mode 100644 express-server/node_modules/encodeurl/package.json
 create mode 100644 express-server/node_modules/escape-html/LICENSE
 create mode 100644 express-server/node_modules/escape-html/Readme.md
 create mode 100644 express-server/node_modules/escape-html/index.js
 create mode 100644 express-server/node_modules/escape-html/package.json
 create mode 100644 express-server/node_modules/etag/HISTORY.md
 create mode 100644 express-server/node_modules/etag/LICENSE
 create mode 100644 express-server/node_modules/etag/README.md
 create mode 100644 express-server/node_modules/etag/index.js
 create mode 100644 express-server/node_modules/etag/package.json
 create mode 100644 express-server/node_modules/express/History.md
 create mode 100644 express-server/node_modules/express/LICENSE
 create mode 100644 express-server/node_modules/express/Readme.md
 create mode 100644 express-server/node_modules/express/index.js
 create mode 100644 express-server/node_modules/express/lib/application.js
 create mode 100644 express-server/node_modules/express/lib/express.js
 create mode 100644 express-server/node_modules/express/lib/middleware/init.js
 create mode 100644 express-server/node_modules/express/lib/middleware/query.js
 create mode 100644 express-server/node_modules/express/lib/request.js
 create mode 100644 express-server/node_modules/express/lib/response.js
 create mode 100644 express-server/node_modules/express/lib/router/index.js
 create mode 100644 express-server/node_modules/express/lib/router/layer.js
 create mode 100644 express-server/node_modules/express/lib/router/route.js
 create mode 100644 express-server/node_modules/express/lib/utils.js
 create mode 100644 express-server/node_modules/express/lib/view.js
 create mode 100644 express-server/node_modules/express/package.json
 create mode 100644 express-server/node_modules/finalhandler/HISTORY.md
 create mode 100644 express-server/node_modules/finalhandler/LICENSE
 create mode 100644 express-server/node_modules/finalhandler/README.md
 create mode 100644 express-server/node_modules/finalhandler/index.js
 create mode 100644 express-server/node_modules/finalhandler/package.json
 create mode 100644 express-server/node_modules/forwarded/HISTORY.md
 create mode 100644 express-server/node_modules/forwarded/LICENSE
 create mode 100644 express-server/node_modules/forwarded/README.md
 create mode 100644 express-server/node_modules/forwarded/index.js
 create mode 100644 express-server/node_modules/forwarded/package.json
 create mode 100644 express-server/node_modules/fresh/HISTORY.md
 create mode 100644 express-server/node_modules/fresh/LICENSE
 create mode 100644 express-server/node_modules/fresh/README.md
 create mode 100644 express-server/node_modules/fresh/index.js
 create mode 100644 express-server/node_modules/fresh/package.json
 create mode 100644 express-server/node_modules/http-errors/HISTORY.md
 create mode 100644 express-server/node_modules/http-errors/LICENSE
 create mode 100644 express-server/node_modules/http-errors/README.md
 create mode 100644 express-server/node_modules/http-errors/index.js
 create mode 100644 express-server/node_modules/http-errors/package.json
 create mode 100644 express-server/node_modules/iconv-lite/.npmignore
 create mode 100644 express-server/node_modules/iconv-lite/.travis.yml
 create mode 100644 express-server/node_modules/iconv-lite/Changelog.md
 create mode 100644 express-server/node_modules/iconv-lite/LICENSE
 create mode 100644 express-server/node_modules/iconv-lite/README.md
 create mode 100644 express-server/node_modules/iconv-lite/encodings/dbcs-codec.js
 create mode 100644 express-server/node_modules/iconv-lite/encodings/dbcs-data.js
 create mode 100644 express-server/node_modules/iconv-lite/encodings/index.js
 create mode 100644 express-server/node_modules/iconv-lite/encodings/internal.js
 create mode 100644 express-server/node_modules/iconv-lite/encodings/sbcs-codec.js
 create mode 100644 express-server/node_modules/iconv-lite/encodings/sbcs-data-generated.js
 create mode 100644 express-server/node_modules/iconv-lite/encodings/sbcs-data.js
 create mode 100644 express-server/node_modules/iconv-lite/encodings/tables/big5-added.json
 create mode 100644 express-server/node_modules/iconv-lite/encodings/tables/cp936.json
 create mode 100644 express-server/node_modules/iconv-lite/encodings/tables/cp949.json
 create mode 100644 express-server/node_modules/iconv-lite/encodings/tables/cp950.json
 create mode 100644 express-server/node_modules/iconv-lite/encodings/tables/eucjp.json
 create mode 100644 express-server/node_modules/iconv-lite/encodings/tables/gb18030-ranges.json
 create mode 100644 express-server/node_modules/iconv-lite/encodings/tables/gbk-added.json
 create mode 100644 express-server/node_modules/iconv-lite/encodings/tables/shiftjis.json
 create mode 100644 express-server/node_modules/iconv-lite/encodings/utf16.js
 create mode 100644 express-server/node_modules/iconv-lite/encodings/utf7.js
 create mode 100644 express-server/node_modules/iconv-lite/lib/bom-handling.js
 create mode 100644 express-server/node_modules/iconv-lite/lib/extend-node.js
 create mode 100644 express-server/node_modules/iconv-lite/lib/index.js
 create mode 100644 express-server/node_modules/iconv-lite/lib/streams.js
 create mode 100644 express-server/node_modules/iconv-lite/package.json
 create mode 100644 express-server/node_modules/inherits/LICENSE
 create mode 100644 express-server/node_modules/inherits/README.md
 create mode 100644 express-server/node_modules/inherits/inherits.js
 create mode 100644 express-server/node_modules/inherits/inherits_browser.js
 create mode 100644 express-server/node_modules/inherits/package.json
 create mode 100644 express-server/node_modules/ipaddr.js/.npmignore
 create mode 100644 express-server/node_modules/ipaddr.js/.travis.yml
 create mode 100644 express-server/node_modules/ipaddr.js/Cakefile
 create mode 100644 express-server/node_modules/ipaddr.js/LICENSE
 create mode 100644 express-server/node_modules/ipaddr.js/README.md
 create mode 100644 express-server/node_modules/ipaddr.js/bower.json
 create mode 100644 express-server/node_modules/ipaddr.js/ipaddr.min.js
 create mode 100644 express-server/node_modules/ipaddr.js/lib/ipaddr.js
 create mode 100644 express-server/node_modules/ipaddr.js/package.json
 create mode 100644 express-server/node_modules/ipaddr.js/src/ipaddr.coffee
 create mode 100644 express-server/node_modules/ipaddr.js/test/ipaddr.test.coffee
 create mode 100644 express-server/node_modules/media-typer/HISTORY.md
 create mode 100644 express-server/node_modules/media-typer/LICENSE
 create mode 100644 express-server/node_modules/media-typer/README.md
 create mode 100644 express-server/node_modules/media-typer/index.js
 create mode 100644 express-server/node_modules/media-typer/package.json
 create mode 100644 express-server/node_modules/merge-descriptors/HISTORY.md
 create mode 100644 express-server/node_modules/merge-descriptors/LICENSE
 create mode 100644 express-server/node_modules/merge-descriptors/README.md
 create mode 100644 express-server/node_modules/merge-descriptors/index.js
 create mode 100644 express-server/node_modules/merge-descriptors/package.json
 create mode 100644 express-server/node_modules/methods/HISTORY.md
 create mode 100644 express-server/node_modules/methods/LICENSE
 create mode 100644 express-server/node_modules/methods/README.md
 create mode 100644 express-server/node_modules/methods/index.js
 create mode 100644 express-server/node_modules/methods/package.json
 create mode 100644 express-server/node_modules/mime-db/HISTORY.md
 create mode 100644 express-server/node_modules/mime-db/LICENSE
 create mode 100644 express-server/node_modules/mime-db/README.md
 create mode 100644 express-server/node_modules/mime-db/db.json
 create mode 100644 express-server/node_modules/mime-db/index.js
 create mode 100644 express-server/node_modules/mime-db/package.json
 create mode 100644 express-server/node_modules/mime-types/HISTORY.md
 create mode 100644 express-server/node_modules/mime-types/LICENSE
 create mode 100644 express-server/node_modules/mime-types/README.md
 create mode 100644 express-server/node_modules/mime-types/index.js
 create mode 100644 express-server/node_modules/mime-types/package.json
 create mode 100644 express-server/node_modules/mime/.npmignore
 create mode 100644 express-server/node_modules/mime/LICENSE
 create mode 100644 express-server/node_modules/mime/README.md
 create mode 100644 express-server/node_modules/mime/build/build.js
 create mode 100644 express-server/node_modules/mime/build/test.js
 create mode 100755 express-server/node_modules/mime/cli.js
 create mode 100644 express-server/node_modules/mime/mime.js
 create mode 100644 express-server/node_modules/mime/package.json
 create mode 100644 express-server/node_modules/mime/types.json
 create mode 100644 express-server/node_modules/ms/.npmignore
 create mode 100644 express-server/node_modules/ms/History.md
 create mode 100644 express-server/node_modules/ms/LICENSE
 create mode 100644 express-server/node_modules/ms/README.md
 create mode 100644 express-server/node_modules/ms/index.js
 create mode 100644 express-server/node_modules/ms/package.json
 create mode 100644 express-server/node_modules/negotiator/HISTORY.md
 create mode 100644 express-server/node_modules/negotiator/LICENSE
 create mode 100644 express-server/node_modules/negotiator/README.md
 create mode 100644 express-server/node_modules/negotiator/index.js
 create mode 100644 express-server/node_modules/negotiator/lib/charset.js
 create mode 100644 express-server/node_modules/negotiator/lib/encoding.js
 create mode 100644 express-server/node_modules/negotiator/lib/language.js
 create mode 100644 express-server/node_modules/negotiator/lib/mediaType.js
 create mode 100644 express-server/node_modules/negotiator/package.json
 create mode 100644 express-server/node_modules/on-finished/HISTORY.md
 create mode 100644 express-server/node_modules/on-finished/LICENSE
 create mode 100644 express-server/node_modules/on-finished/README.md
 create mode 100644 express-server/node_modules/on-finished/index.js
 create mode 100644 express-server/node_modules/on-finished/package.json
 create mode 100644 express-server/node_modules/parseurl/HISTORY.md
 create mode 100644 express-server/node_modules/parseurl/LICENSE
 create mode 100644 express-server/node_modules/parseurl/README.md
 create mode 100644 express-server/node_modules/parseurl/index.js
 create mode 100644 express-server/node_modules/parseurl/package.json
 create mode 100644 express-server/node_modules/path-to-regexp/History.md
 create mode 100644 express-server/node_modules/path-to-regexp/LICENSE
 create mode 100644 express-server/node_modules/path-to-regexp/Readme.md
 create mode 100644 express-server/node_modules/path-to-regexp/index.js
 create mode 100644 express-server/node_modules/path-to-regexp/package.json
 create mode 100644 express-server/node_modules/proxy-addr/HISTORY.md
 create mode 100644 express-server/node_modules/proxy-addr/LICENSE
 create mode 100644 express-server/node_modules/proxy-addr/README.md
 create mode 100644 express-server/node_modules/proxy-addr/index.js
 create mode 100644 express-server/node_modules/proxy-addr/package.json
 create mode 100644 express-server/node_modules/qs/.eslintignore
 create mode 100644 express-server/node_modules/qs/.eslintrc
 create mode 100644 express-server/node_modules/qs/.jscs.json
 create mode 100644 express-server/node_modules/qs/CHANGELOG.md
 create mode 100644 express-server/node_modules/qs/CONTRIBUTING.md
 create mode 100644 express-server/node_modules/qs/LICENSE
 create mode 100644 express-server/node_modules/qs/dist/qs.js
 create mode 100755 express-server/node_modules/qs/lib/index.js
 create mode 100755 express-server/node_modules/qs/lib/parse.js
 create mode 100755 express-server/node_modules/qs/lib/stringify.js
 create mode 100755 express-server/node_modules/qs/lib/utils.js
 create mode 100644 express-server/node_modules/qs/package.json
 create mode 100644 express-server/node_modules/qs/test/index.js
 create mode 100755 express-server/node_modules/qs/test/parse.js
 create mode 100755 express-server/node_modules/qs/test/stringify.js
 create mode 100755 express-server/node_modules/qs/test/utils.js
 create mode 100644 express-server/node_modules/range-parser/HISTORY.md
 create mode 100644 express-server/node_modules/range-parser/LICENSE
 create mode 100644 express-server/node_modules/range-parser/README.md
 create mode 100644 express-server/node_modules/range-parser/index.js
 create mode 100644 express-server/node_modules/range-parser/package.json
 create mode 100644 express-server/node_modules/raw-body/HISTORY.md
 create mode 100644 express-server/node_modules/raw-body/LICENSE
 create mode 100644 express-server/node_modules/raw-body/README.md
 create mode 100644 express-server/node_modules/raw-body/index.js
 create mode 100644 express-server/node_modules/raw-body/package.json
 create mode 100644 express-server/node_modules/send/HISTORY.md
 create mode 100644 express-server/node_modules/send/LICENSE
 create mode 100644 express-server/node_modules/send/README.md
 create mode 100644 express-server/node_modules/send/index.js
 create mode 100644 express-server/node_modules/send/node_modules/ms/LICENSE.md
 create mode 100644 express-server/node_modules/send/node_modules/ms/README.md
 create mode 100644 express-server/node_modules/send/node_modules/ms/index.js
 create mode 100644 express-server/node_modules/send/node_modules/ms/package.json
 create mode 100644 express-server/node_modules/send/package.json
 create mode 100644 express-server/node_modules/serve-static/HISTORY.md
 create mode 100644 express-server/node_modules/serve-static/LICENSE
 create mode 100644 express-server/node_modules/serve-static/README.md
 create mode 100644 express-server/node_modules/serve-static/index.js
 create mode 100644 express-server/node_modules/serve-static/package.json
 create mode 100644 express-server/node_modules/setprototypeof/LICENSE
 create mode 100644 express-server/node_modules/setprototypeof/README.md
 create mode 100644 express-server/node_modules/setprototypeof/index.js
 create mode 100644 express-server/node_modules/setprototypeof/package.json
 create mode 100644 express-server/node_modules/statuses/HISTORY.md
 create mode 100644 express-server/node_modules/statuses/LICENSE
 create mode 100644 express-server/node_modules/statuses/README.md
 create mode 100644 express-server/node_modules/statuses/codes.json
 create mode 100644 express-server/node_modules/statuses/index.js
 create mode 100644 express-server/node_modules/statuses/package.json
 create mode 100644 express-server/node_modules/type-is/HISTORY.md
 create mode 100644 express-server/node_modules/type-is/LICENSE
 create mode 100644 express-server/node_modules/type-is/README.md
 create mode 100644 express-server/node_modules/type-is/index.js
 create mode 100644 express-server/node_modules/type-is/package.json
 create mode 100644 express-server/node_modules/unpipe/HISTORY.md
 create mode 100644 express-server/node_modules/unpipe/LICENSE
 create mode 100644 express-server/node_modules/unpipe/README.md
 create mode 100644 express-server/node_modules/unpipe/index.js
 create mode 100644 express-server/node_modules/unpipe/package.json
 create mode 100644 express-server/node_modules/utils-merge/.travis.yml
 create mode 100644 express-server/node_modules/utils-merge/LICENSE
 create mode 100644 express-server/node_modules/utils-merge/README.md
 create mode 100644 express-server/node_modules/utils-merge/index.js
 create mode 100644 express-server/node_modules/utils-merge/package.json
 create mode 100644 express-server/node_modules/vary/HISTORY.md
 create mode 100644 express-server/node_modules/vary/LICENSE
 create mode 100644 express-server/node_modules/vary/README.md
 create mode 100644 express-server/node_modules/vary/index.js
 create mode 100644 express-server/node_modules/vary/package.json
 create mode 100644 express-server/package-lock.json
 create mode 100644 express-server/package.json
 create mode 100644 express-server/routes/api.js
 create mode 100644 express-server/server.js
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git push -u origin master
Username for 'https://github.com': nalapatt
Password for 'https://nalapatt@github.com': 
Counting objects: 378, done.
Compressing objects: 100% (361/361), done.
Writing objects: 100% (378/378), 487.81 KiB | 6.97 MiB/s, done.
Total 378 (delta 62), reused 0 (delta 0)
remote: Resolving deltas: 100% (62/62), done.
To https://github.com/nalapatt/MeanAngExpNodeMongoDockerFile.git
   e54375f..7af5c7b  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ dir
README.md  angular-client  docker-compose.yml  express-server
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ vi README.md
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git init
Reinitialized existing Git repository in /home/ubuntu/mean/ang/MeanAngExpNodeMongoDockerFile/.git/
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git clone
fatal: You must specify a repository to clone.

usage: git clone [<options>] [--] <repo> [<dir>]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    -n, --no-checkout     don't create a checkout
    --bare                create a bare repository
    --mirror              create a mirror repository (implies bare)
    -l, --local           to clone from a local repository
    --no-hardlinks        don't use local hardlinks, always copy
    -s, --shared          setup as shared repository
    --recurse-submodules[=<pathspec>]
                          initialize submodules in the clone
    -j, --jobs <n>        number of submodules cloned in parallel
    --template <template-directory>
                          directory from which templates will be used
    --reference <repo>    reference repository
    --reference-if-able <repo>
                          reference repository
    --dissociate          use --reference only while cloning
    -o, --origin <name>   use <name> instead of 'origin' to track upstream
    -b, --branch <branch>
                          checkout <branch> instead of the remote's HEAD
    -u, --upload-pack <path>
                          path to git-upload-pack on the remote
    --depth <depth>       create a shallow clone of that depth
    --shallow-since <time>
                          create a shallow clone since a specific time
    --shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --single-branch       clone only one branch, HEAD or --branch
    --no-tags             don't clone any tags, and make later fetches not to follow them
    --shallow-submodules  any cloned submodules will be shallow
    --separate-git-dir <gitdir>
                          separate git dir from working tree
    -c, --config <key=value>
                          set config inside the new repository
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
    --filter <args>       object filtering

ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git clone https://github.com/nalapatt/MEANstackdockercompose.git
Cloning into 'MEANstackdockercompose'...
remote: Enumerating objects: 2207, done.
remote: Counting objects: 100% (2207/2207), done.
remote: Compressing objects: 100% (1651/1651), done.
remote: Total 2207 (delta 463), reused 2176 (delta 448), pack-reused 0
Receiving objects: 100% (2207/2207), 2.32 MiB | 15.54 MiB/s, done.
Resolving deltas: 100% (463/463), done.
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ dir
MEANstackdockercompose	angular-client	    express-server
README.md		docker-compose.yml
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git add README.md
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git commit -m "step by step instructions"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
	modified:   angular-client (modified content, untracked content)

Untracked files:
	MEANstackdockercompose/

no changes added to commit
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git push README.MD
fatal: 'README.MD' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ git push README.md
fatal: invalid gitfile format: README.md
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ vi README.md
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cat README.MD
cat: README.MD: No such file or directory
ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cat README.md
# MeanAngExpNodeMongoDockerFile

This Project creates a MEAN stack Mongo database, Express Server, Angular CLI and Node Js to create a single page application , dockerizes them into three containers using docker compose


Prerequistes

Open port 4200, 3000, 27107 and http 80 on your instance

(Included in notes of nalapatt/HowToinstallinaws)
Install Docker
Install Docker Compose

Verify if installed by 
docker --version
docker-compose --version
node --version

mkdir MeanAngExpNodeMongoDockerFile
cd MeanAngExpNodeMongoDockerFile

npx @angular/cli new angular-client

? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS

your directory should look like this
└── MeanAngExpNodeMongoDockerFile
    └── angular-client
    your directory should look like this
        ├── README.md
        ├── angular.json
        ├── e2e
        ├── node_modules
        ├── package.json
        ├── package-lock.json
        ├── src
        ├── tsconfig.json
        └── tslint.json
        
        
 cd angular-client
 create a dockerfile
 
 vi Dockerfile
 add this inside
 
FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN  npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm", "start"] 

esc:wq to save and quit

vi .dockerignore
add this
node_modules/
esc:wq to save and quit

vi package.json
delete "start": "ng serve 
replace with    "start": "ng serve --host 0.0.0.0  --disable-host-check",
esc:wq to save and quit
 
Now build it
sudo docker build -t angular-client:dev .

Now create the container
sudo docker run -d --name angular-client -p 4200:4200 angular-client:dev

sudo start angular-client
now go to your ip address :4200 and you should be able to view your angular page

sudo stop angular-client to stop the container

Now you have deployed your first container containing angular manually using your dockerfile

Now Deploy your Express Container

mkdir express-server
cd  express-server

vi Dockerfile
add this
# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
esc :wq to save and quit

vi .dockerignore
add this
node.modules/
esc:wq to save and quit 

vi package.json
add this
{
  "name": "express-server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "body-parser": "~1.15.2",
    "express": "~4.14.0"
  }
  esc :wq to save and quit
  
  vi server.js
  add this
  const express = require("express");
 const app  = express();
  
 app.get("/", function(req, res){
     res.send("Hello from Docker!");
 });

 app.listen(3000, function(){
     console.log("Projects in Docker API server started at");
 });
esc:wq to save and quit

mkdir routes
cd routes
vi api.js
add this
const express = require('express');
const router = express.Router();

/_ GET api listing. _/
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;

}
esc :wq to save and quit

npm install
docker build -t express-server:dev .
docker run -d --name express-server -p 3000:3000 express-server:dev

now go to your localhost:3000 you should see hello from docker

hurray you have deployed your first express container

For the mongo db just download the image
docker run -d --name mongodb -p 27017:27017 mongo
this creates your mongo container

ubuntu@ip-172-31-93-5:~/mean/ang/MeanAngExpNodeMongoDockerFile$ cat README.md |more
# MeanAngExpNodeMongoDockerFile

This Project creates a MEAN stack Mongo database, Express Server, Angular CLI an
d Node Js to create a single page application , dockerizes them into three conta
iners using docker compose


Prerequistes

Open port 4200, 3000, 27107 and http 80 on your instance

(Included in notes of nalapatt/HowToinstallinaws)
Install Docker
Install Docker Compose

Verify if installed by 
docker --version
docker-compose --version
node --version

mkdir MeanAngExpNodeMongoDockerFile
cd MeanAngExpNodeMongoDockerFile

npx @angular/cli new angular-client

? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS

your directory should look like this
└── MeanAngExpNodeMongoDockerFile
    └── angular-client
    your directory should look like this
        ├── README.md
        ├── angular.json
        ├── e2e
        ├── node_modules
        ├── package.json
        ├── package-lock.json
        ├── src
        ├── tsconfig.json
        └── tslint.json
        
        
 cd angular-client
 create a dockerfile
 
 vi Dockerfile
 add this inside
 
FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN  npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm", "start"] 

esc:wq to save and quit

vi .dockerignore
add this
node_modules/
esc:wq to save and quit

vi package.json
delete "start": "ng serve 
replace with    "start": "ng serve --host 0.0.0.0  --disable-host-check",
esc:wq to save and quit
 
Now build it
sudo docker build -t angular-client:dev .

Now create the container
sudo docker run -d --name angular-client -p 4200:4200 angular-client:dev

sudo start angular-client
now go to your ip address :4200 and you should be able to view your angular page

sudo stop angular-client to stop the container

Now you have deployed your first container containing angular manually using you
r dockerfile

Now Deploy your Express Container

mkdir express-server
cd  express-server

vi Dockerfile
add this
# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
esc :wq to save and quit

vi .dockerignore
add this
node.modules/
esc:wq to save and quit 

vi package.json
add this
{
  "name": "express-server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "body-parser": "~1.15.2",
    "express": "~4.14.0"
  }
  esc :wq to save and quit
  
  vi server.js
  add this
  const express = require("express");
 const app  = express();
  
 app.get("/", function(req, res){
     res.send("Hello from Docker!");
 });

 app.listen(3000, function(){
     console.log("Projects in Docker API server started at");
 });
esc:wq to save and quit

mkdir routes
cd routes
vi api.js
add this
const express = require('express');
const router = express.Router();

/_ GET api listing. _/
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;

}
esc :wq to save and quit

npm install
docker build -t express-server:dev .
docker run -d --name express-server -p 3000:3000 express-server:dev

now go to your localhost:3000 you should see hello from docker

hurray you have deployed your first express container

For the mongo db just download the image
docker run -d --name mongodb -p 27017:27017 mongo
this creates your mongo container
