"use strict";
/*
Usando o parâmetro dentro do PowerShell para 'Alteração de Política de Execução' para instalação do TypeScript :
" Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser "
Link: https://docs.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1
*/
function addNumbers(number1, number2) {
    return number1 + number2;
}
console.log(addNumbers(10, 6));
