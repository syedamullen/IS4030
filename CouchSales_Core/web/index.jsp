<%-- 
    Document   : index
    Created on : Nov 15, 2016, 10:24:22 PM
    Author     : Ben
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>CouchDB Demonstration Servlets</title>

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> 
        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <body>
        <div class="header-container">
            <header class="wrapper clearfix">
                <h1 class="title">CouchDB Demonstration Servlets</h1>
            </header>
        </div>

        <div class="main-container" style="min-height: 500px">
            <div class="main wrapper clearfix">
                <a href="http://localhost:8080/CouchSales_Core/CatalogServlet">Catalog Servlet</a>
                <br>
                <a href="http://localhost:8080/CouchSales_Core/CouchDBServlet">CouchDB Servlet</a>
                <br>
                <a href="http://localhost:8080/CouchSales_Core/Catalog.html">Catalog Page</a>
                <br>
                

            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper">
                <h3>Couch Sales</h3>
                <p>123 Fake Street Cincinnati, Ohio</p>
                <p>123-555-1234</p>
            </footer>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.js"><\/script>')</script>
    </body>
</html>
