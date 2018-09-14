<?php
/**
 * Created by PhpStorm.
 * User: LocalAdmin
 * Date: 10.09.2018
 * Time: 13:35
 */

include 'classes/Database.php';
include 'classes/HTTParameter.php';


header('Access-Control-Allow-Origin: *');

$database = new Database('127.0.0.1', 'guestbook', 'root', '');

JSONify(getEntries($database));

/**
 * @param $database Database
 * @return array|bool
 */
function getEntries($database) {
    $id = HTTParameter::GET('id');
    if ($id === 'all') {
        $data = $database->query('select * from entries');
    } else {
        $data = $database->query('select * from entries where id=:id', array(':id' => $id));
    }
    return $data;
}

/**
 * @param $posts array
 */
function JSONify($posts) {

    $json = '{'; // must be first line

    $json .= '"entries": [';

    $postsLength = count($posts);
    for ($i = 0; $i < $postsLength; $i++) {
        $json .= '{"id": "' . $posts[$i]['id'] .'", "title": "' . $posts[$i]['title'] .'", "content": "' . $posts[$i]['content'] .'", "createdAt": "' . $posts[$i]['createdAt'] .'"}';
        if ($i !== $postsLength-1) {$json.=',';}
    }

    $json .= ']';

    $json .= '}'; // must be last line before echo

    echo $json;
}

