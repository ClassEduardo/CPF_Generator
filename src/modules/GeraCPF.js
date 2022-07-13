import ValidaCPF from './validateCPF.js';


export default class GeraCPF {
   //gera um aleatório entre 100000000 e 999999999
   rand(min = 100000000, max = 999999999) {
      return String(Math.floor(Math.random()  * (max - min) + min))
   }  
   
   creatNewCPF() {
      const newCpfSemDigito = this.rand();
      const digito1 = ValidaCPF.criaDigito(newCpfSemDigito);
      const digito2 = ValidaCPF.criaDigito(newCpfSemDigito + digito1);
      const newCpf =newCpfSemDigito + digito1 + digito2;
      return newCpf;
   }

}

