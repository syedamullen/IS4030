/* 
 * Copyright (C) 2016 Syeda Mullen
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

$(document).ready(function () {
    
    $("#submitNewItem").click(function () {
        var name = $("#itemName").val();
        var description = $("#itemDescription").val();
        description = description.trim();
        var price = $("#itemPrice").val();
        //var photo = $("#itemPhoto").val();
        
        var data;
        /* 
         * data should look like this, :
           {
            "doc_type": "catalog_entry",
            "name": "Couch",
            "description": "couch description",
            "price": "$1200.00",
            "photo": "xxxx"
           }
         */
       //note that we have run out of time to implement photos, so that value will be sent empty
       data = "{\"doc_type\":\"catalog_entry\",\"name\":\"" + name + "\",\"description\":\"" + description + "\",\"price\":\"" + price + "\",\"photo\":\"xxxx\"}";  
        alert (data);
        
        httpSendDocument(data)
    });
    
});

function httpSendDocument(data, callback)
{
    var servlet = "http://localhost:8080/CouchSales_Core/CreateItemServlet";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 201)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("PUT", servlet, true); // true for asynchronous 
    xmlHttp.send(data);
}
