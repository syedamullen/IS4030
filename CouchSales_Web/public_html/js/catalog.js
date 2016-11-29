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
$(function () {
    $("article").append("<section id='queryMesssage'>Querying CouchDB</section>");
    var url = "http://localhost:8080/CouchSales_Core/CatalogServlet";

    $.get(url, function (data) {

        var items = [];

        $.each(data.rows, function (key, value) {
            items.push("<section><h2>" + data.rows[key].key + "</h2>" + "<p>" + data.rows[key].value.description + "</p>");
        });
        $("#queryMesssage").remove();
        $("article").append(items);
    });

    $("#newItemButton").click(function () {
        window.location.replace("CreateItem.html");
    });
});



/*
 * 
 <section>
 <h2>Sofa</h2>
 <p>The classics. 2 persons, 3 person, maybe 1 if they are laying down. No other combinations are valid for enjoying our couches. (Notice this implies that there must always be at least one person sitting on them, we stand by that requirement. If we feel that you are planning on putting this couch into a room but not sitting on it, we reserve the right to refuse service).</p>
 </section>
 
 {
 
 "id": "9079a7c606b0dd951da1bcbcc200457b",
 "key": "Davenport",
 "value": {
 "description": "These are fancier than sofas but perhaps less fancy than a throne. Suitable for entertaining the Queen",
 "price": "$1500.00",
 "photo": ""
 }
 
 }
 
 
 */