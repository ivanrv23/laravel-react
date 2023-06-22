<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colegiado extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'surname',
        'dni',
        'codecip',
        'phone',
        'address',
        'university',
        'integration',
        'state'
    ];
}
