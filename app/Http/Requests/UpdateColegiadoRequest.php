<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateColegiadoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'required', 'max:255'],
            'surname' => ['string', 'required', 'max:255'],
            'dni' => ['string', 'required', 'max:10'],
            'codecip' => ['string', 'required', 'max:50'],
            'phone' => ['string', 'required', 'max:20'],
            'address' => ['string', 'required', 'max:255'],
            'university' => ['string', 'required', 'max:255'],
            'integration' => ['required', 'date_format:d/m/Y'],
            'state' => ['boolean'],
            'user_id' => ['number', 'required', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }
}
