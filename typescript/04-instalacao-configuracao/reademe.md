1 Primeiro instalamos o npm:
npm init -y

2 Depois o typescript:
npm install --save-dev typescript

3 Utilize o comando abaixo para executar o compilador: (repare que ele converte as arrow functions para funções anônimas comuns):
npx tsc index.ts

4 Podemos criar um script no package.json como "build": "npx tsc index.ts"
e executar no terminal um:
npm run build

5 Recomendado criar um arquivo tsconfig.json e passar está configuração
{
    "compilerOptions": {
        "outFile": "main.js"
    }
}

agora não precisamos mais especificar o arquivo no package.json é apenas executar o
npm run build

6 Podemos alterar a versão do compilador do typescript para ser usado com um mais recente que aceitas funções assincronas por exemplo:
Basta adicionar um target e selecionar a versão desejada no aquivo tsconfig.json
{
    "compilerOptions": {
        "outFile": "main.js",
        "target": "ES2015",
    }
}

7 Para utilizarmos a versão mais recente do javascript no compilador passamos o "target": "ESNEXT"

8 Em projetos maiores é indicado o uso da criação do tsconfig.json o comando

npxtsc --init

Com isto ele já vem com todas as opções disponiveis para uso.

9 No tsconfig.json passar a config 
"watch": true,
para que o complidor faç as altereções automaticamente.