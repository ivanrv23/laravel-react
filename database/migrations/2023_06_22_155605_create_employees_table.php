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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('institution_id');// id del colegio
            $table->string('name');
            $table->string('surname');
            $table->string('dni', 10);
            $table->string('phone', 20);
            $table->string('address');
            $table->string('university');
            $table->string('cargo');
            $table->date('integration'); // fecha de integracion al cip
            $table->timestamps();

            $table->foreign('institution_id')->references('id')->on('institutions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
