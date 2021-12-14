<?php
/**
 * Created by PhpStorm.
 * User: I_am_Po
 * Date: 8/1/2016
 * Time: 5:09 PM
 */
define ('DB_NAME','cart');
define ('DB_HOST','localhost:8080');
define ('DB_USER','root');
define ('DB_PASS','123456');
class Database{

    public $conn;
    public $stmt;
    public function __construct()
    {
        try{
            $this->conn= new PDO("mysql:host=".DB_HOST.";dbname=DB_Name",DB_USER,DB_PASS)or die("Die mat r");
            $this->conn->exec("SET CHARACTER SET UTF8");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
        }catch(PDOException $e){
            die($e->getMessage());
        }
    }
    public function disconnect(){
        $this->conn=null;
    }
}
?>