<?php
/**
 * Created by PhpStorm.
 * User: LocalAdmin
 * Date: 10.09.2018
 * Time: 13:16
 */

class Database {

    private $pdo;

    public function __construct($host, $dbname, $username, $password)
    {
        $pdo = new PDO("mysql:host={$host};dbname={$dbname};charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo = $pdo;
    }

    public function query($query, $params = array())
    {
        $statement = $this->pdo->prepare($query);
        $statement->execute($params);

        if (strtoupper(explode(' ', $query)[0]) === 'SELECT') {
            return $statement->fetchAll();
        }

        return true;
    }

}

