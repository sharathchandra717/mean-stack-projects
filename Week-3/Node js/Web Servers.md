# Apache
1. **Download Apache**
      * The first step in the apache installation is to download a copy of apache. This guide assumes you are using Apache 2.2. You can get apache from the following: [Apache Download](http://httpd.apache.org/download.cgi)
      * Select the Windows binary version, and save the .msi file to your Desktop.

2. **Install Apache**
      * Launch the .msi file you just downloaded. Use the defaults for everything except the following: When prompted for server information, enter localhost for the Network Domain and Server Name. If you already have a web server running on your machine on port 80, you will need to choose a different port for apache to listen on, such as 81, or 8080, etc. When asked for set up type, select Typical. Once finished, the apache 2.2 web server is installed and configured on your machine as a windows service. To test the installation, type the following in your web browser: 
http://localhost/ (if you selected a port other than 80, such as 81, type http://locahost:81/) 
      * A page that says "It Works" should appear.

3. **Starting and Stopping Apache**
    * The installer installs Apache as a windows service. You can start and stop the apache server by starting or stopping the windows service. To manage the service, go to Control Panel - Administrative Tools - Services. If using Windows Vista, make sure to select the classic view on the control panel so you can find the services control panel. Once in the services control panel, look for the service named Apache2_2. The right-click menu will display options such as start, stop, and restart.

4. **Making changes to the apache configuration**
    * The configuration settings for apache are included in a file called httpd.conf. This file is located under the conf directory under the apache installation directory. Use your favorite editor such as EditRocket to modify the file.

- - - -
# Installing Nginx & Running it as a Service
> Note 1: There is an issue running NSSM created services on the Windows 10 Creator's Update, after you've created the services run the following command for each service nssm set ServiceName AppNoConsole 1 in cmd (run as admin)

> Note 2: For the above to work, you would also need to grab the latest pre-release build from https://nssm.cc/builds

## Step 1: Installing Nginx
1. Download Nginx from: http://nginx.org/en/download.html
2. Install Nginx to your preferred location
3. Copy the Nginx folder to your preferred location e.g. c:\
4. If you want to run Nginx as a service then go the 'Running Nginx as a service' section, if not continue.
5. Go to the location you copied the Nginx folder e.g. c:\nginx
6. Double click on 'nginx.exe' in c:\nginx , nginx should now be running on your system
7. To verify, open a browser and type localhost and press enter. If you get "Welcome to nginx!” message then Nginx has been installed successfully.   
          Note: you would need to open 'nginx.exe' every time you reboot your system, to avoid this, install Nginx as a service.
## Step 2: Running Nginx as a service
1. Download NSSM from: https://nssm.cc/download
2. Copy the nssm.exe from the win32 or win64 folder depending on your system to C:\Windows\System32
3. Open cmd as admin, navigate to C:\Windows\System32
4. Type in this command without the quotes “nssm install nginx”
5. Path = C:\nginx\nginx.exe
6. Startup directory = C:\nginx
7. Install service
8. Make sure you run the service as the admin account
* Open run and type in services.msc
* Search for the nginx service we just installed
* Double-click and go to the Log On tab
* Select ‘This account:’ and fill in your account details and then press ok.
* Right click on the nginx service and restart
9.Making your Nginx install PHP ready, uncomment the following code from your nginx.conf file (c:\nginx\conf\nginx.conf)
```
        location ~ \.php$ {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
```
10. To verify, open a browser and type localhost and press enter. If you get "Welcome to nginx!” message then Nginx has been installed successfully.
- - - -
# Node Js
```
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
```
