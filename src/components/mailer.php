<?php
echo "f";
if($_POST["message"]) {
    mail("faresharmali3@gmail.com", $_POST["sujet"], $_POST["message"], $_POST["email"]);
}
?>
<?php


