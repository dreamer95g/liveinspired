<?php

namespace App\GraphQL\Mutations;

use App\Models\Verse;

class DeleteVerses
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $ids = $args['ids'];
        $result = array();

        if (count($ids) != 0) {

            foreach ($ids as $id) {
                //OBTENER
                $verse = Verse::find($id);
                if ($verse !== null) {
                    //BORRAR
                    $verse->delete();
                    array_push($result, $verse);
                }
            }
        }

        return $result;
    }
}
