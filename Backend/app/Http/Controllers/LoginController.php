<?php

namespace App\Http\Controllers;

use Auth;
use Hash;
use Illuminate\Http\Request;
use App\Models\User;
class LoginController extends Controller
{
    function index(Request $request){
        if(Auth::attempt(["email"=>$request->email,"password"=>$request->password])){
            return response()->json(Auth::user());
        }
        else{
            return response()->json("gagal");
        }
    }
    function register(Request $request){
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role'=>$request->role,
            'telepon'=>$request->telepon,
            'email_verified_at'=>now(),
            'password'=>"123",
            'created_at'=>now(),
            'updated_at'=>now()
        ]);
        return response()->json($request);
    }
}
