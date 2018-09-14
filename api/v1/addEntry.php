<?php
/**
 * Created by PhpStorm.
 * User: LocalAdmin
 * Date: 10.09.2018
 * Time: 13:16
 */

include 'classes/Database.php';
include 'classes/HTTParameter.php';


header('Access-Control-Allow-Origin: *');

$database = new Database('127.0.0.1', 'guestbook', 'root', '');

if (
    HTTParameter::GET('title') !== null && HTTParameter::GET('content') && HTTParameter::GET('createdAt')
) {
    $title = HTTParameter::GET('title');
    $content = HTTParameter::GET('content');
    $createdAt = HTTParameter::GET('createdAt');

    try {
        $database->query("insert into entries (title, content, createdAt) value ('${title}', '${content}', '${createdAt}')");
        echo '{"result": "success", "errMessage": "no errors occurred"}';
    } catch (Exception $ex) {
        echo '{result: "failure", errMessage: "' . $ex->getMessage() .'"}';
    }
}
