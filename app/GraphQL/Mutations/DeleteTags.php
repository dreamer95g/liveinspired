<?php

namespace App\GraphQL\Mutations;

use App\Models\Tag;

class DeleteTags
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
                $tag = Tag::find($id);
                if ($tag !== null) {
                    //BORRAR
                    $tag->delete();
                    array_push($result, $tag);
                }
            }
        }

        return $result;
    }
}
