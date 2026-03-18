<?php

namespace App\Http\Controllers;

class MockData
{
    public static function get(string $name)
    {
        $path = base_path('mock-data/' . $name . '.json');

        if (! file_exists($path)) {
            return [];
        }

        return json_decode(file_get_contents($path), true);
    }
}
