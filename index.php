<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
        <title>MineUI</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript"></script>
	<script src="backend.js" type="text/javascript"></script>
	<link rel="stylesheet" href="main.css">
</head>
<body>

<h1>MineUI: Minecraft Server Panel</h1>
<div class="main">
<div style="width:500px;margin:15px;color:#FFF;background:#000;padding:5px;border:3px ridge #FFF;">Status:
<span id="status"></span> (@<span id="statustime"></span>)
<pre id="warning" style="font-weight:bold;text-align:center;font-size:150%;color:#FF5555;"></pre></div>
<div class="btn">
<input type="button" id="button_start" value="Start Server" disabled="true" />
<input type="button" id="button_restart" value="Restart server" disabled="true" />
<input type="button" id="button_stop" value="Stop server" disabled="true" />
<input type="button" id="button_terminate" value="Force terminate server" />
</div>
<div style="width:500px;border:3px ridge #FFF;margin:15px;padding:5px;color:#FFF;background:#000;">Server Response:
<pre id="response"></pre>
</div>
<div style="width:800px;border:3px ridge #FFF;margin:15px;padding:5px;color:#FFF;background:#000;text-align:left;">Console:
<pre style="height:400px;" id="console"></pre>
</div>
<!-- Raw output of status call
<p id="demo" value=""></p>
<br>
<p id="demo1" value=""></p>
-->
</div>
</body>
</html>
