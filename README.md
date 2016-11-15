<html>
    <body>
            <h2>IS4030</h2>
            <h3>Business Intelligence</h3>
            <p>CouchSales_Web is the web application component for the CouchDB demo performed by Syeda Mullen for the IS4030 Business Intelligence final project. It requires Node.js to set up the development environment, and also several external packages and tools to fully set up the overall 'production' environment.</p>
            <dl>
                <dt><strong>CouchDB</strong></dt>
                <dd>The application expects all defaults to be taken, so port for the CouchDB Fauxton interface will be 5984</dd>
                <dt><strong>JDK 1.8</strong></dt>
                <dd>I had help from a Java dev guy in building this, and even though it's a simple web app he found a way to bring Java into the toolchain</dd>
                <dt><strong>Tomcat 7</strong></dt>
                <dd>Simplest and easiest way to start serving HTTP, with Java backend 'just in case'</dd>
                <dd>We wrote a series of CouchDB servlets to help us</dd>
                <dd>Second half of the demo involves standard RDBMS code, so having the ability to run Java web apps was a plus</dd>
                <dt><strong>Microsoft SQL Server</strong></dt>
                <dd>Second half of the demo compares our code to a full RDBMS solution, and shows some ways that ends up being a hassle.</dd>
            </dl>
	</body>
</html>