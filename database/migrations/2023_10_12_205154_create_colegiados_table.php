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
        Schema::create('colegiados', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');// id de usuario
            $table->unsignedBigInteger('capitulo_id');// id de capitulo
            $table->unsignedBigInteger('institution_id');// id del colegio
            $table->unsignedBigInteger('agremiado_id');// tipo de agramiado
            $table->string('name');
            $table->string('surname');
            $table->string('dni', 10);
            $table->string('codecip', 50);// codigo cip
            $table->string('phone', 20);
            $table->string('address');
            $table->string('university');
            $table->date('integration'); // fecha de integracion al cip
            $table->boolean('state')->default(1);// estado de colegiado: habilitado o no
            $table->string('photo')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('capitulo_id')->references('id')->on('capitulos');
            $table->foreign('institution_id')->references('id')->on('institutions');
            $table->foreign('agremiado_id')->references('id')->on('agremiados');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('colegiados');
    }
};
