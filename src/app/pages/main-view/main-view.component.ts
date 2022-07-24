import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    // new Column('Ideas', [
    //   "Some random idea",
    //   "This is another random idea",
    //   "build an awesome application"
    // ]),
    // new Column('Research', [
    //   "Lorem ipsum",
    //   "foo",
    //   "This was in the 'Research' column"
    // ]),
    // new Column('Todo', [
    //   'Get to work',
    //   'Pick up groceries',
    //   'Go home',
    //   'Go home',
    //   'Get to work',
    //   'Fall asleep'
    // ]),
    new Column('Done', [
      'Get up and build',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);

  ngOnInit() {
  }

  droptask(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }

  addTask(task: string, index: number) {
    if (task != '') {
      this.board.columns[index].tasks.push(task)
    }
  }

  addLista(titulo: string) {
    if (titulo != '') {
      const newColumn = new Column(titulo, [])
      this.board.columns.push(newColumn)
    }
  }

  remove(index: any) {
    this.board.columns.splice(index, 1)
  }
}
