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
        Schema::create('detalleaportaciones', function (Blueprint $table) {
            $table->bigInteger('usuarios_Id')->unsigned();
            $table->integer('aportaciones_Id')->unsigned();
            $table->dateTime('detaportacion_Fecha');
            $table->string('detaportacion_Estado');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detalleaportaciones');
    }
};
