import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return createTable(20);

    // return `
    //   <div class="row">

    //     <div class="row-info"></div>

    //     <div class="row-data">

    //       <div class="column">
    //         A
    //       </div>
    //       <div class="column">
    //         B
    //       </div>
    //       <div class="column">
    //         C
    //       </div>

    //     </div>

    //   </div>

    //   <div class="row">

    //     <div class="row-info">1</div>

    //     <div class="row-data">

    //       <div class="cell selected" contenteditable>a1</div>
    //       <div class="cell" contenteditable>b2</div>
    //       <div class="cell" contenteditable>c3</div>

    //     </div>

    //   </div>

    //   <div class="row">

    //     <div class="row-info">2</div>

    //     <div class="row-data">

    //       <div class="cell">a1</div>
    //       <div class="cell">b2</div>
    //       <div class="cell">c3</div>

    //     </div>

    //   </div>
    // `;
  }
}
