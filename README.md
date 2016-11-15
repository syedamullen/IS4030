# IS4030
Business Intelligence

CouchSales_Web is the web application component for the CouchDB demo performed by Syeda Mullen for the IS4030 Business Intelligence final project. 
It requires Node.js to set up the development environment

It requires several external packages and tools to fully set up the overall environment:
1. CouchDB
	a. The application expects all defaults to be taken, so port for the CouchDB Fauxton interface will be 5984
2. JDK 1.8
	a. I had help from a Java dev guy in building this, and even though it's a simple web app he found a way to bring Java into the toolchain
3. Tomcat 7
	a. Simplest and easiest way to start serving HTTP, with Java backend 'just in case'
	b. We wrote a series of CouchDB servlets to help us
	c. Second half of the demo involves standard RDBMS code, so having the ability to run Java web apps was a plus
4. Microsoft SQL Server
	a. Second half of the demo compares our code to a full RDBMS solution, and shows some ways that ends up being a hassle.
	
