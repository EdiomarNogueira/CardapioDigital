let produtosJson = [{
    "Produtos": [
        { id: 1, tipo: "pizza", name: 'Mussarela', img: 'assets/images/pizzas/mussarela.jpg', prices: [14.90, 21.90, 31.90], sizes: ['100g', '530g', '860g'], description: 'Molho de tomate - Mussarela - Tomate em rodelas - Azeitonas - Orégano' },
        { id: 2, tipo: "pizza", name: 'Calabresa', img: 'assets/images/pizzas/calabresa.jpg', prices: [14.90, 17.90, 31.90], sizes: ['320g', '530g', '860g'], description: 'Molho de tomate - Mussarela - Calabresa - Cebola - Azeitonas - Orégano' },
        { id: 3, tipo: "pizza", name: 'Quatro Queijos', img: 'assets/images/pizzas/quatroqueijos.jpg', prices: [14.90, 17.90, 29.90], sizes: ['320g', '530g', '860g'], description: 'Mussarela - Catupiry - Provolone - Gorgonzola' },
        { id: 4, tipo: "pizza", name: 'Americana', img: 'assets/images/pizzas/americana.jpg', prices: [14.90, 17.90, 32.19], sizes: ['320g', '530g', '860g'], description: 'Molho de tomate - Mussarela - Presunto picado - Ervilha - Palmito - Bacon' },
        { id: 5, tipo: "pizza", name: 'Sorvete', img: 'assets/images/pizzas/sorvete.jpg', prices: [14.90, 17.90, 31.90], sizes: ['320g', '530g', '860g'], description: 'Mussarela - Chocolate - Sorvete' },
        { id: 6, tipo: "pizza", name: 'Moda da Casa', img: 'assets/images/pizzas/modadacasa.jpg', prices: [14.90, 17.90, 32.19], sizes: ['320g', '530g', '860g'], description: 'Molho de tomate - Mussarela - Calabresa - Bacon - Presunto picado - Tomate - Azeitonas - Cebola - Milho Verde - Orégano' },
        { id: 7, tipo: "pizza", name: 'Chocolate', img: 'assets/images/pizzas/chocolate.jpg', prices: [14.90, 17.90, 29.90], sizes: ['320g', '530g', '860g'], description: 'Mussarela - Chocolate - Leite condensado' },
        { id: 8, tipo: "hamburger", name: 'X-Salada', img: 'assets/images/Hamburgers/xsalada.jpg', prices: [11.00], sizes: ['530g'], description: 'Pão/Amanteigado - Bacon - Carne artesanal - Maionese da casa - Mussarela - Ovo - Cebola roxa - Tomate - Alface americana' },
        { id: 9, tipo: "hamburger", name: 'X-Egg', img: 'assets/images/Hamburgers/xegg.jpg', prices: [12.00], sizes: ['560g'], description: 'Pão/Amanteigado - Carne artesanal - Ovo - Maioneses da casa - Cebola roxa - Mussarela - Alface' },
        { id: 10, tipo: "hamburger", name: 'X-Frango', img: 'assets/images/Hamburgers/xfrango.jpg', prices: [14.00], sizes: ['560g'], description: 'Pão/Amanteigado - Filé de frango empanado - Molho barbecue - Cebola roxa - Mussarela -Bacon- Alface' },
        { id: 11, tipo: "hamburger", name: 'X-Salada', img: 'assets/images/Hamburgers/xsalada.jpg', prices: [11.00], sizes: '530g', description: 'Pão/Amanteigado - Bacon - Carne artesanal - Maionese da casa - Mussarela - Ovo - Cebola roxa - Tomate - Alface americana' },
        { id: 12, tipo: "hamburger", name: 'X-Egg', img: 'assets/images/Hamburgers/xegg.jpg', prices: [12.00], sizes: ['560g'], description: 'Pão/Amanteigado - Carne artesanal - Ovo - Maioneses da casa - Cebola roxa - Mussarela - Alface' },
        { id: 13, tipo: "bebida", name: 'Coca Cola', img: 'assets/images/bebidas/cocacola.jpg', prices: [2.50, 3.80, 5.90], sizes: ['Lata 350ml', 'Garrafa 1L', 'Garrafa 2L'], description: 'Coca Cola Original' },
        { id: 14, tipo: "bebida", name: 'Suco de Uva', img: 'assets/images/bebidas/sucodeuva.jpg', prices: [2.50, 3.80, 5.90], sizes: ['Copo 350ml', 'Copo 500ml', 'Garrafa 1L'], description: 'Suco de Uva' },
    ]
}]


//api.whatsapp.com/send?1=pt_br&phone=5577988129234&text=teste%20de%20envio

/*
let pizzaJson = [{ id: 1, name: 'Mussarela', img: 'assets/images/pizzas/mussarela.jpg', prices: [14.90, 21.90, 31.90], sizes: ['100g', '530g', '860g'], description: 'Molho de tomate - Mussarela - Tomate em rodelas - Azeitonas - Orégano' },
    { id: 2, name: 'Calabresa', img: 'assets/images/pizzas/calabresa.jpg', prices: [14.90, 17.90, 31.90], sizes: ['320g', '530g', '860g'], description: 'Molho de tomate - Mussarela - Calabresa - Cebola - Azeitonas - Orégano' },
    { id: 3, name: 'Quatro Queijos', img: 'assets/images/pizzas/quatroqueijos.jpg', prices: [14.90, 17.90, 29.90], sizes: ['320g', '530g', '860g'], description: 'Mussarela - Catupiry - Provolone - Gorgonzola' },
    { id: 4, name: 'Americana', img: 'assets/images/pizzas/americana.jpg', prices: [14.90, 17.90, 32.19], sizes: ['320g', '530g', '860g'], description: 'Molho de tomate - Mussarela - Presunto picado - Ervilha - Palmito - Bacon' },
    { id: 5, name: 'Sorvete', img: 'assets/images/pizzas/sorvete.jpg', prices: [14.90, 17.90, 31.90], sizes: ['320g', '530g', '860g'], description: 'Mussarela - Chocolate - Sorvete' },
    { id: 6, name: 'Moda da Casa', img: 'assets/images/pizzas/modadacasa.jpg', prices: [14.90, 17.90, 32.19], sizes: ['320g', '530g', '860g'], description: 'Molho de tomate - Mussarela - Calabresa - Bacon - Presunto picado - Tomate - Azeitonas - Cebola - Milho Verde - Orégano' },
    { id: 7, name: 'Chocolate', img: 'assets/images/pizzas/chocolate.jpg', prices: [14.90, 17.90, 29.90], sizes: ['320g', '530g', '860g'], description: 'Mussarela - Chocolate - Leite condensado' }
];


*/