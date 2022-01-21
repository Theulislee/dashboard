import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //import Observable

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  //Array bidmensional com mês e valor
  readonly dados = [
    ['Janeiro', 33],
    ['Fervereiro', 68 ],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  /**
   * Retorna o Observable contendo os dados a serem exibido
   * no gráfico
   *
   * @return Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
