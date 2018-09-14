<?php
/**
 * Created by PhpStorm.
 * User: LocalAdmin
 * Date: 10.09.2018
 * Time: 13:23
 */

class HTTParameter
{

    public static function GET($name) {

        $parameter = 'could not get an GET parameter ' . $name;

        try {
            $parameter = htmlspecialchars($_GET[$name]);
        } catch ( Exception $ex ) {

        }

        return $parameter;

    }

    public static function POST($name) {

        $parameter = 'could not get an POST parameter ' . $name;

        try {
            $parameter = htmlspecialchars($_POST[$name]);
        } catch ( Exception $ex ) {

        }

        return $parameter;
    }

}
