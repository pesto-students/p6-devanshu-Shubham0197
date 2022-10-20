# Assignment 1

## What Happens when url is entered in the browser
When user enters the url in the browser the browser the browser tries to find the ip address of the site via DNS(Domain Name System) records.
It does this whole process in steps to find it as soon as possible. Like below-
* It checks for it in browser Cache
* Then is shceks in OS  cache
* If not found then in router cache
* If still not found then in the ISP cache
* If ISP cache doesnt have its server creates DNS query to find the IP address of the server that hosts the Domain name.
And when the the IP address is found the browser initiates TCP connection adn the send the HTTP request to the webs server to get  the response

## Funtionality of the browser
The functionality fo the browser is the appliation to allow user to browse the internet via sending the requests and the interpreting the response and 
make it available to the user in user-friendly way.

## High Level Components of a browser
Following are the high level components of the browser
* The user interface: This includes address bar, back and front toggle buttons, book marking options and settings of browser 
* The browser engine: It works between user interface and rendering engine 
* The rendering engine: This performs the action of displaying the information which has been requested.The rendering engine parses the HTML and CSS content to display it on the browser. 
* Networking: For network calls as for the HTTP requests, this uses different implementation on different platforms 
* UI backend: This is a generic interface that’s not platform specific.It uses the Operating system’s user interface methods 
* JavaScript interpreter: It is used to parse and execute javascript code 
* Data storage: The browser may need to store data locally as cookies

## Rendering engine and its use
Its main use is to display the requested contents on the browser screen.
A rendering engine is software that draws text and images on the screen. 
The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS)

## Parsers (HTML, CSS, etc)
Parsing a document means translating it to a structure the code can use. 
The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

## Script Processors
Script processor uses the script cache to avoid recompiling the script for each incoming document. 
To improve performance, ensure the script cache is properly sized before using a script processor in production.

## Tree construction
While the DOM tree is being constructed, the browser constructs another tree, the render tree. 
This tree is of visual elements in the order in which they will be displayed. 
It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order. 
Firefox calls the elements in the render tree "frames". 
WebKit uses the term renderer or render object. 
A renderer knows how to lay out and paint itself and its children.
## Order of script processing
The model of the web is synchronous. Scripts are to be parsed and executed immediately when the parser reaches a <script> tag. 
  The parsing of the document halts until the script has been executed.
  If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. 
  This was the model for many years and is also specified in HTML4 and 5 specifications.  There is also case when it will not halt document parsing and will execute after the document is parsed.
  HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread. 
  Speculative parsing Both WebKit and Firefox do this optimization.
  While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. 
  In this way, resources can be loaded on parallel connections and overall speed is improved.

## Layout and Painting
### Layout
After the construction of the render tree, it goes through a “layout process” of the render tree.
When the renderer is created and added to the tree, it does not have a position and size.
The process of calculating these values is called layout or reflow. 
This means giving each node the exact coordinates where it should appear on the screen. 
The position of the root renderer is 0,0 and its dimensions are the viewport–the visible part of the browser window.
All renderers have a “layout” or “reflow” method, each renderer invokes the layout method of its children that need layout.The next stage is painting. 
### Painting
In the painting stage, the render tree is traversed and the renderer’s “paint()” method is called to display content on the screen. 
Painting uses the UI backend layer.
The rendering engine always tries to display the contents on the screen as soon as possible for better user experience. 
It does not wait for the HTML parsing to complete before starting to build and layout the render tree.
It parses and displays the content it has received from the network, while rest of the contents stills keeps coming from the network.
  ![Browser Working](https://github.com/pesto-students/p6-devanshu-Shubham0197/blob/master/Week-1/Web-Browsers.gif)
