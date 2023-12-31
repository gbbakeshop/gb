<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Expenses extends Model
{
    use HasFactory;
    protected $fillable = [
        'branchid',
        'sellerid',
        'name',
        'quantity',
        'quantity_type',
        'amount',
        'discription',
        'date',
        'meridiem',
        'status',
    ];

    public function uploadImage(): HasMany
    {
        return $this->hasMany(UploadImage::class,'expenses_id');
    }
}
