<?php

namespace App\GraphQL\Mutations;

use App\Models\Note;

class DeleteNotes
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
                $note = Note::find($id);
                if ($note !== null) {
                    //BORRAR
                    $note->delete();
                    array_push($result, $note);
                }
            }
        }

        return $result;
    }
}
