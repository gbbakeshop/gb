<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BranchSelectaRecord extends Model
{
    use HasFactory;
    protected $fillable = [
       'branchid',
       'selectaid',
       'sellerid',
       'branchselectaid',
       'quantity',
       'price',
       'sales',
       'date',
       'meridiem'
      ];

      public function selecta(): BelongsTo
      {
          return $this->belongsTo(Selecta::class, 'selectaid');
      }
  
   
}
