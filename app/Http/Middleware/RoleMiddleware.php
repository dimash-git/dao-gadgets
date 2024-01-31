<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        // Если не авторизован то редирект в вход
        if (!$request->user()) {
            return redirect('login');
        }

        // если роль совпадает с юзером обработать запрос
        if ($request->user()->hasRole($role)) {
            return $next($request);
        }

        // если роль не совпадает отправить обратно
        return redirect()->back();
    }
}
