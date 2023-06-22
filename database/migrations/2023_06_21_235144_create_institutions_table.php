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
        Schema::create('institutions', function (Blueprint $table) {
            $table->id();
            $table->string('ruc', 15);
            $table->string('socialname');
            $table->string('address');
            $table->string('phone', 20);
            $table->string('email', 100);
            $table->string('ubigeo', 20)->nullable();
            $table->string('logo')->nullable();
            $table->date('expiration')->nullable(); // fecha de vence del cdt sunat
            $table->string('usersol', 50)->nullable();
            $table->string('keysol')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institutions');
    }
};
