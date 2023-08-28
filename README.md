# TaskManager

## Mise en pratique - Environnement

### Versions

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: npm 9.8.1

### Commandes pour initialiser le projet :
```bash
npm install -g @angular/cli

ng new task-manager
cd task manager

```

## Mise en pratique - Lancement

### Lancement
```bash
ng serve
```

### build
```bash
ng build
```
ng build génère un dossier Dist avec des fichiers statics permettant d'avoir une application légère avec seulement quelques fichiers JS, CSS et HTML

## Mise en pratique - Outillage

```bash
npm i -g yarn
yarn add --dev @compodoc/compodoc

❯ yarn -v
1.22.19

"@compodoc/compodoc": "^1.1.21"
```
### Configuration de Compodoc

Créer le fichier tsconfig.doc.json:
```json
{
"include": ["src/**/*.ts"],
"exclude": ["src/test.ts", "src/**/*.spec.ts", "src/app/file-to-exclude.ts"]
}
```
Ajouter des scripts dans package.json
```json
  {
    "compodoc": "npx compodoc -p tsconfig.doc.json",
    "compodoc:serve": "compodoc -s"
  }
```
Build de la documentation
```bash
npm run compodoc
```
Affichage de la config
```bash
npm run compodoc:serve
```
