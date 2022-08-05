const foods = [
  {
    name: 'baião de dois',
    ingredients: [
      'arroz',
      'feijão verde',
      'cebola',
      'coentro',
      'mandioca',
      'queijo',
      'carne seca',
      'farofa',
    ],
  },
  {
    name: 'pizza de muçarela',
    ingredients: [
      'farinha',
      'queijo',
      'azeite de oliva',
      'azeitona',
      'orégano',
    ],
  },
  {
    name: 'pizza de calabresa',
    ingredients: ['farinha', 'calabresa', 'cebola', 'azeitona'],
  },
  {
    name: 'pf de carne',
    ingredients: [
      'arroz',
      'feijão',
      'carne bovina',
      'batata frita',
      'alface',
      'tomate',
      'cebola',
    ],
  },
  {
    name: 'espaguete',
    ingredients: ['macarrão', 'molho de tomate', 'queijo', 'manjericão'],
  },
  {
    name: 'macarrão à bolonhesa',
    ingredients: ['macarrão', 'molho de tomate', 'queijo', 'carne moída'],
  },
  {
    name: 'pizza portuguesa',
    ingredients: [
      'palmito',
      'farinha',
      'queijo',
      'cebola',
      'ervilha',
      'presunto',
      'ovo',
    ],
  },
  {
    name: 'strogonoff',
    ingredients: ['frango', 'arroz', 'molho rosé', 'batata palha'],
  },
  {
    name: 'tacos',
    ingredients: [
      'farinha',
      'salada',
      'queijo',
      'carne moída',
      'feijão',
      'arroz',
    ],
  },
  {
    name: 'escondidinho de batata com carne seca',
    ingredients: ['purê de batata', 'carne seca', 'cebola', 'queijo'],
  },
  {
    name: 'guacamole',
    ingredients: [
      'abacate',
      'tomate',
      'cebola',
      'alho',
      'coentro',
      'azeite de oliva',
    ],
  },
  {
    name: 'pastel de queijo',
    ingredients: ['farinha', 'queijo'],
  },
  {
    name: 'pastel de carne',
    ingredients: ['farinha', 'carne moída', 'azeitona', 'ovo'],
  },
  {
    name: 'churrasco',
    ingredients: [
      'carne bovina',
      'carne suína',
      'linguiça',
      'frango',
      'pão',
      'pão de alho',
      'alface',
      'tomate',
      'cebola',
      'farofa',
    ],
  },
  {
    name: 'canja de galinha',
    ingredients: ['frango'],
  },
  {
    name: 'caldo verde',
    ingredients: ['couve', 'calabresa'],
  },
  {
    name: 'cheeseburger',
    ingredients: ['carne bovina', 'queijo', 'pão', 'ketchup', 'mostarda'],
  },
  {
    name: 'x-salada',
    ingredients: [
      'carne bovina',
      'queijo',
      'pão',
      'ketchup',
      'mostarda',
      'alface',
      'tomate',
      'cebola',
    ],
  },
  {
    name: 'x-bacon',
    ingredients: [
      'carne bovina',
      'queijo',
      'pão',
      'ketchup',
      'mostarda',
      'bacon',
    ],
  },
  {
    name: 'x-bacon',
    ingredients: [
      'carne bovina',
      'queijo',
      'pão',
      'ketchup',
      'mostarda',
      'bacon',
    ],
  },
  {
    name: 'feijoada',
    ingredients: [
      'feijão',
      'arroz',
      'couve',
      'calabresa',
      'carne bovina',
      'farofa',
      'banana',
      'pimenta',
    ],
  },
  {
    name: 'bife a cavalo',
    ingredients: ['carne bovina', 'ovo', 'arroz', 'feijão'],
  },
  {
    name: 'frango à parmegiana',
    ingredients: [
      'frango',
      'queijo',
      'molho de tomate',
      'arroz',
      'batata frita',
    ],
  },
  {
    name: 'empadão',
    ingredients: ['farinha', 'frango', 'creme de leite', 'azeitona'],
  },
  {
    name: 'chipa',
    ingredients: ['farinha', 'queijo'],
  },
  {
    name: "fish n' chips",
    ingredients: ['peixe', 'batata frita'],
  },
  {
    name: 'hot roll',
    ingredients: ['peixe', 'arroz', 'alga', 'massa', 'shoyu'],
  },
  {
    name: 'frango xadrez',
    ingredients: ['frango', 'pimentão', 'amendoim', 'tomate', 'shoyu', 'arroz'],
  },
  {
    name: 'picadinho',
    ingredients: [
      'carne bovina',
      'batata',
      'cenoura',
      'cheiro-verde',
      'cebola',
      'alho',
    ],
  },
  {
    name: 'pão de alho',
    ingredients: ['pão', 'alho', 'farinha'],
  },
  {
    name: 'pamonha',
    ingredients: ['milho'],
  },
  {
    name: 'curau',
    ingredients: ['milho'],
  },
  {
    name: 'pipoca',
    ingredients: ['milho'],
  },
  {
    name: 'polenta',
    ingredients: ['fubá'],
  },
  {
    name: 'fubá',
    ingredients: ['milho'],
  },
  {
    name: 'cuscuz paulista',
    ingredients: ['farinha', 'mandioca', 'peixe', 'tomate', 'ovo', 'ervilha'],
  },
  {
    name: 'hot dog (cachorro quente)',
    ingredients: [
      'salsicha',
      'pão',
      'ketchup',
      'mostarda',
      'purê de batata',
      'vinagrete',
    ],
  },
  {
    name: 'vinagrete',
    ingredients: ['tomate', 'cebola', 'vinagre', 'azeite de oliva', 'pepino'],
  },
  {
    name: 'empadinha de camarão',
    ingredients: ['farinha', 'camarão', 'creme de leite'],
  },
  {
    name: 'coxinha',
    ingredients: ['farinha', 'frango', 'queijo'],
  },
  {
    name: 'acarajé',
    ingredients: ['farinha', 'feijão', 'pimenta', 'cebola', 'azeite de dendê'],
  },
  {
    name: 'bobó de camarão',
    ingredients: [
      'camarão',
      'pirão de peixe',
      'peixe',
      'farinha',
      'alho',
      'mandioca',
      'azeite de oliva',
      'leite de coco',
      'molho de tomate',
      'azeite de dendê',
    ],
  },
  {
    name: 'tutu de feijão',
    ingredients: ['feijão'],
  },
  {
    name: 'tabule',
    ingredients: [
      'tomate',
      'cebola',
      'pepino',
      'limão',
      'azeite de oliva',
      'trigo',
      'hortelã',
      'salsa',
    ],
  },
  {
    name: 'homus',
    ingredients: ['grão-de-bico'],
  },
  {
    name: 'feijão tropeiro',
    ingredients: [
      'feijão',
      'carne bovina',
      'óleo de soja',
      'cebola',
      'alho',
      'ovo',
      'cheiro-verde',
    ],
  },
  {
    name: 'moqueca',
    ingredients: [
      'peixe',
      'lula',
      'cebola',
      'leite de coco',
      'azeite de dendê',
    ],
  },
  {
    name: 'paella',
    ingredients: [
      'arroz',
      'camarão',
      'lula',
      'polvo',
      'mexilhões',
      'alho-poró',
      'tomate',
      'açafrão',
      'ervilha',
      'salsinha',
    ],
  },
  {
    name: 'vaca atolada',
    ingredients: ['tomate', 'mandioca', 'cheiro-verde', 'cebola', 'colorau'],
  },
  {
    name: 'frango assado',
    ingredients: ['frango', 'batata', 'farofa'],
  },
  {
    name: 'pastel de frango',
    ingredients: ['frango', 'farinha', 'queijo', 'azeitona'],
  },
  {
    name: 'yakisoba',
    ingredients: [
      'frango',
      'carne bovina',
      'pimentão',
      'acelga',
      'cenoura',
      'amendoim',
      'cebola',
    ],
  },
  {
    name: 'virado à paulista',
    ingredients: [
      'feijão',
      'cebola',
      'farofa',
      'carne bovina',
      'calabresa',
      'ovo',
      'couve',
      'banana',
    ],
  },
];

export default foods;
