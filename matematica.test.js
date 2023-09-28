const {soma, equatrorial} = require('./matematica')


describe('Calculos Básicos', ()=>{

    test('Soma de 1 + 1 deve ser 2', ()=>{
        expect(soma(1, 1)).toBe(2)
    })
    
    test('Fatorial de 5 deve ser 120', ()=>{
        expect(equatrorial(5)).toBe(120)
    })
})


