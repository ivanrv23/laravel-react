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
            $table->string('name');
            $table->string('chapter');
            $table->string('address');
            $table->date('incorporationDate');
            $table->string('phone');
            $table->string('cip');
            $table->boolean('state')->default(1);
            $table->timestamps();
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
