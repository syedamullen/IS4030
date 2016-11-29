$(document).ready(function () {
    $("#invoiceNew").hide();
    $("#invoiceView").hide();
    $("#invoiceManage").hide();

    $("#invoiceNewButton").click(function () {
        $("#invoiceNew").show(400);
        $("#invoiceView").hide();
        $("#invoiceManage").hide();
    });

    $("#invoiceViewButton").click(function () {
        $("#invoiceNew").hide();
        $("#invoiceView").show(400);
        $("#invoiceManage").hide();
    });

    $("#invoiceManageButton").click(function () {
        $("#invoiceNew").hide();
        $("#invoiceView").hide();
        $("#invoiceManage").show(400);
    });
});
   