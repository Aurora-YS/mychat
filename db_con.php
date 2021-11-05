<?php

    /* 로컬호스트 테스트용 */
    $con = mysqli_connect("localhost", "root", "000000", "chat", 3306);
    
    /* 닷홈용 */
    // $con = mysqli_connect("localhost", "aurora", "비번", "aurora");

    mysqli_query($con, "SET NAMES utf8");

?>