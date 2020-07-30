<?php

$filepath = './.mcsrv.sh ';
exec($filepath.$_POST["command"], $arr);
foreach($arr as $a) {
        echo "$a\n";
}

if($_POST["command"] != "status") {
        exec($filepath."status", $arrstat);
        foreach($arrstat as $a) {
                echo "$a\n";
        }
}

?>


