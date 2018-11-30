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
