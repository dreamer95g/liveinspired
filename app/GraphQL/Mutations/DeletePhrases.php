<?php

namespace App\GraphQL\Mutations;

use App\Models\ForeignMission;
use App\Models\Phrase;

class DeletePhrases
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
                $phrase = Phrase::find($id);
                if ($phrase !== null) {
                    //BORRAR
                    $phrase->delete();
                    array_push($result, $phrase);
                }
            }
        }

        return $result;
    }
}
