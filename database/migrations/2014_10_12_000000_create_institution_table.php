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
        Schema::create('institution', function (Blueprint $table) {
            $table->bigIncrements('id_institution');
            $table->string('ruc_institution', 15);
            $table->string('nombre_institution');
            $table->string('direccion_institution');
            $table->string('ubigeo_institution', 10);
            $table->string('correo_institution');
            $table->string('telefono_institution', 20)->nullable();
            $table->string('logo_institution')->nullable();
            $table->string('usuario_sol', 50)->nullable();
            $table->string('password_sol', 50)->nullable();
            $table->date('vence_cdt')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institution');
    }
};
