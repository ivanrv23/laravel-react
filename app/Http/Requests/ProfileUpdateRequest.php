<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request. Para actualizar los datos agregar en esta parte ssiiiii
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:100'],
            'email' => ['email', 'max:100', Rule::unique(User::class)->ignore($this->user()->id)],
            'state' => ['boolean'],
        ];
    }
}
