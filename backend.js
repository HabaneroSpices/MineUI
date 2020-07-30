var execpath = "./.exec.php";
var logpath = "logs/latest.log";


function setButtonAndStatus(res) {

// Raw output of status call
//$("#demo").text(res);

//var arc = res.split("\n");
//var arr = arc[arc.length - 2].search('not');
//var s = arr.search('not');
if(res.search("not") == -1) {
	$("#button_start").attr('disabled', 'true');
	$("#button_stop").removeAttr('disabled');
	$("#button_restart").removeAttr('disabled');
	$("#status").text("Server is up");

} else {
	$("#button_start").removeAttr('disabled');
	$("#button_stop").attr('disabled', 'true');
	$("#button_restart").attr('disabled', 'true');
	$("#status").text("Server is down");
}

}

function startServer() {
}

function getServerStatus() {
//document.getElementById("status").innerHTML = "<?php echo exec('$script_path status'); ?>";

$.post(execpath, { command: "status" }, function(res) {
$("#statustime").text(getDateTime());
setButtonAndStatus(res);
}, "text");
window.setTimeout("getServerStatus()", 5000);

}
function getDateTime() {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
return time;
}
function updateLog(filepath) {

$.ajax({ url: filepath, success: function(file_content) {
        $("#console").text(file_content);
        //console.log(file_content);
  }
});
}
function updateScroll(){
	var element = document.getElementById("console");
        element.scrollTop = element.scrollHeight;
	updateLog(logpath);
setTimeout("updateScroll()", 1000);

}

$(function(){
getServerStatus();
updateScroll();


	var ajaxWaiting = false;
	$(window).bind("beforeunload", function() {
		console.log(ajaxWaiting);
		if(ajaxWaiting)
			return "Still waiting...";
	});


$("#button_start").click(function(e) {
    $("#button_start").attr('disabled', 'true');
    $("#warning").text("Starting server...");
    ajaxWaiting = true;
    $.post(execpath, { command: "start" }, function(res) {
        $("#response").append(res);
        setButtonAndStatus(res);
        $("#warning").text("");
        ajaxWaiting = false;
    });
});
$("#button_stop").click(function(e) {
    $("#button_stop").attr('disabled', 'true');
    $("#button_restart").attr('disabled', 'true');
    $("#warning").text("Stopping server...");
    ajaxWaiting = true;
    $.post(execpath, { command: "stop" }, function(res) {
        $("#response").append(res);
        setButtonAndStatus(res);
        $("#warning").text("");
        ajaxWaiting = false;
    });
});
$("#button_restart").click(function(e) {
    $("#button_stop").attr('disabled', 'true');
    $("#button_restart").attr('disabled', 'true');
    $("#warning").text("Stopping server...");
    ajaxWaiting = true;
    $.post(execpath, { command: "stop" }, function(res) {
        $("#response").append(res);
        $("#warning").text("Starting server...");
        $.post(execpath, { command: "start" }, function(res) {
            $("#response").append(res);
            setButtonAndStatus(res);
            $("#warning").text("");
            ajaxWaiting = false;
        });
    });
});
$("#button_terminate").click(function(e) {
    $.post(execpath, { command: "terminate" }, function(res) {
        $("#response").append(res);
        setButtonAndStatus(res);
    });
});
});

