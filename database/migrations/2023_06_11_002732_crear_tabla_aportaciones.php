<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('aportaciones', function (Blueprint $table) {
            $table->id('aportaciones_Id');
            $table->string('aportaciones_Nombre');
            $table->decimal('aportaciones_Costo',8,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aportaciones');
    }
};
