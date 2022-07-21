<?php

namespace App\GraphQL\Mutations;

class BackupData
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $dir = $args['dir'];

        $script = dirname(__FILE__, 4) . "\\scripts\\MySqlBackup.bat " . $dir;

        $res = 0;

        system($script, $res);

        $result = [
            'result' => $res
        ];
        return $result;
    }
}
