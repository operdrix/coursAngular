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
Aller sur http://127.0.0.1:8080

## Mise en pratique - Composant
model/task.model.ts
```js
export class Task {
  constructor(
    public title: string,
    public description: string,
    public status: TaskStatus,
  ) { }
}

export enum TaskStatus {
  A_FAIRE = 'A_FAIRE',
  EN_COURS = 'EN_COURS',
  TERMINEE = 'TERMINEE',
}
```

```shell
ng generate component task
```
task.component.ts
```js
import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;
  constructor() {
  }

}
```
task.component.html
```html
<div class="task">
  <h2>{{ task.title }}</h2>
  <p>{{ task.description }}</p>
  <p>{{ task.status }}</p>
</div>
```


## Mise en pratique - Smart & Dumb pattern
```shell
ng generate component main-task
```

main-task.component.ts
```ts
import { Component } from '@angular/core';
import { Task, TaskStatus } from '../model/task.model';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {
  task!: Task;
  constructor() {
    this.task = new Task("title", "description", TaskStatus.A_FAIRE);
  }
}
```

main-task.component.html
```html
<app-task [task]="task"></app-task>
```