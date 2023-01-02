var res = document.querySelector('#res')
var sec = document.querySelector('#sec')
var va = document.querySelector('#vA')

function carregar() {
    va.focus()
}

function calcular() {
    let vb = document.querySelector('#vB')
    let vc = document.querySelector('#vC')  
    if (va.value.length == 0 && vb.value.length == 0 && vc.value.length == 0) {
        alert('Sem dados')
        res.innerHTML = ''
    } else if (va.value.length == 0) {
        alert('Falta o valor de A')
        res.innerHTML = ''
        va.focus()
    } else if (vb.value.length == 0) {
        alert('Falta o valor de B')
        res.innerHTML = ''
        vb.focus()
    } else if (vc.value.length == 0) {
        alert('Falta o valorde C')
        res.innerHTML = ''
        vc.focus()
    } else {
        let a = Number(va.value)
        let b = Number(vb.value)
        let c = Number(vc.value)

        function delta(n1, n2, n3) {
            let d = (b**2) - (4*a*c)
            return d
        }
        var d = delta(a, b, c)

        function calcularx(n1, n2, n3) {
            let raiz =  Math.sqrt(d)
            let x = (-b + raiz) / (2*a)
            return x 
        }
        var x = calcularx(a, b, d)

        function calculary(n1, n2, n3) {
            let raiz = Math.sqrt(d)
            let y = (-b - raiz) / (2*a)
            return y
        }
        var y = calculary(a, b, d)
        var s = [x, y]

        if (d >= 0) {
            if (x == y) {
                res.innerHTML = `<p>Valor de delta é ${d}</p>`
                res.innerHTML += `<p>Resultado da conta é {${x}}</p>`
            } else {
            res.innerHTML = `<p>Valor de delta é ${d}</p>`
            res.innerHTML += `<p>Resultado da conta é {${s}}</p>`
            }
            
        } else {
            res.innerHTML = `<p>Valor de delta é ${d}</p>`
            res.innerHTML += 'A equação não tem raiz real'
        }
        
    }
    
}