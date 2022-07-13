import ValidaCPF from './validateCPF.js';

export default class GeraCPF {
   //gera um aleatório entre 100000000 e 999999999
   rand(min = 100000000, max = 999999999) {
      return String(Math.floor(Math.random() * (max - min) + min));
   }  
   
   creatNewCPF() {
      const cpfSemDigito = this.rand();
      const digito1 = ValidaCPF.criaDigito(cpfSemDigito);
      console.log(digito1);
      const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1);
      const newCpf = cpfSemDigito + digito1 + digito2;
      console.log(newCpf)
      return newCpf;
   }
}

