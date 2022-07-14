<?php
$server = "localhost";
$user = "root";
$pass = "rootroot";
$nombre = "rexat";
 
$con = mysqli_connect("localhost", "root", "rootroot", "rexat");

if($con){
    return $con;
}