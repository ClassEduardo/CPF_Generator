/*
705.484.450-52 070.987.720-03

11 - (237 % 11) = 5 (Primeiro dígito)

11 - (284 % 11) = 5 (Primeiro dígito)
*/


class ValidaCPF {
   constructor(cpfEnviado) {
      Object.defineProperty(this, 'cpfLimpo', {
         enumerable: true,
         get: function() {
            return cpfEnviado.replace(/\D+/g, '');
         }
      })
   }
   
   isSequencia() {
      const sequencia = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
      return sequencia;
   }


   verificaCPF() {
      
      if(typeof this.cpfLimpo !== 'string') return false;
      if(this.cpfLimpo.length !== 11) return false;
      if(this.isSequencia()) return false;
      
      const cpfParcial = this.cpfLimpo.slice(0, -2);

      const digito1 = this.criaDigito(cpfParcial);
      const digito2 = this.criaDigito(cpfParcial + digito1);
      const novoCpf = cpfParcial + digito1 + digito2;

      const novoCpfEdit = this.editaCpf(novoCpf);
      console.log(novoCpfEdit)
   }

   static criaDigito(cpfParcial) {
      const cpfArray = Array.from(cpfParcial);
      let regressivo = cpfArray.length + 1;

      let total = cpfArray.reduce((ac, val) => {
         ac += (regressivo * Number(val))
         regressivo--;
         return ac;
      }, 0)
      const digito = 11 - (total % 11);
      return digito > 9 ? '0' : digito
   }

   editaCpf(novoCpf) {
      const novoCpfEdit = novoCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      return novoCpfEdit;
   }
}
