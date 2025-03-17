@echo off
color F0

set PHP_DIR=C:\laragon\bin\php\php-7.4.19-Win32-vc15-x86\php.exe

%PHP_DIR% artisan telescope:install
%PHP_DIR% artisan telescope:prune --hours=1

pause
exit
