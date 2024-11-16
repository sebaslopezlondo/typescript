# typescript

Learning

Inicialización del Proyecto:
npm init

Instalación de TypeScript como dependencia de desarrollo:
npm install typescript --save-dev

Verificación de la versión de TypeScript:
npx tsc --version

Inicialización de la configuración de TypeScript:
npx tsc --init

Compilación y monitoreo de archivos TypeScript:
Para compilar el proyecto y observar cambios automáticamente:

npx tsc -p ./ -w

También puedes usar el siguiente comando para observar cambios en todos los archivos:
npx tsc --watch : Escucha constante

Configuración del Proyecto
En el archivo tsconfig.json, puedes especificar las siguientes opciones importantes:

outDir: Especifica el directorio donde se guardarán los archivos JavaScript compilados.
outDir: './dist' : Donde quedan los archivos compilados a javascript

rootDir: Define el directorio desde donde se compilarán y revisarán los archivos TypeScript.
rootDir './src' : Desde donde compilar y revisar lso archivos

ts-node
npm i ts-node -D
ts-node: Permite ejecutar archivos .ts sin necesidad de compilarlos previamente.
npx ts-node <archivo.ts>
