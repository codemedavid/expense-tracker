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
        Schema::table('users', function (Blueprint $table) {
            $table->decimal('monthly_salary', 8, 2)->nullable();
            $table->decimal('desired_budget', 8, 2)->nullable();
            $table->string('budget_type')->nullable(); // 'daily', 'weekly', 'monthly'
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['monthly_salary', 'desired_budget', 'budget_type']);
        });
    }
};
