<?php

namespace App\GraphQL\Mutations;

class RestoreData
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $backup = $args['backup'];

        $script = dirname(__FILE__, 4) . "\\scripts\\MySqlRestore.bat " . $backup;

        $res = 0;

        system($script, $res);

        $result = [
            'result' => $res
        ];
        return $result;
    }
}
