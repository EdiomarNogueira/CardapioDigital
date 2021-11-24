//const c = (el) => {
//    return document.querySelector(el);
//}

let cart = [];
let modalQt = 1;
let modalKey = 0;
var produto = '';
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

function mostrarHamburgers() {
    window.scrollTo({
        top: 1100,
        left: 0,
        behavior: 'smooth'
    })
}

function mostrarPizzas() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

function mostrarBebidas() {
    window.scrollTo({
        top: 1600,
        left: 0,
        behavior: 'smooth'
    })
}

produtosJson[0]['Produtos'].map((item, index) => {

    //console.log(produtosJson[0]['Produtos'][index].tipo == "pizza");
    if ((produtosJson[0]['Produtos'][index].tipo == "pizza") == true) {
        produto = "pizza";
        configuraCardapio(produto);
    } else if ((produtosJson[0]['Produtos'][index].tipo == "hamburger") == true) {
        produto = "hamburger"
        configuraCardapio(produto);
    } else if ((produtosJson[0]['Produtos'][index].tipo == "bebida") == true) {
        produto = "bebida"
        configuraCardapio(produto);
    }

    function configuraCardapio(produto) {


        let produtoItem = c('.models .produtos-item').cloneNode(true);

        produtoItem.setAttribute('data-key', index);
        produtoItem.querySelector('.produtos-item--img img').src = item.img;
        produtoItem.querySelector('.produtos-item--name').innerHTML = item.name;
        produtoItem.querySelector('.produtos-item--desc').innerHTML = item.description;
        if (produto == "pizza") {
            produtoItem.querySelector('.produtos-item--price').innerHTML = `R$ ${produtosJson[0]['Produtos'][index].prices[2]}`; //valor do card principal

        } else if (produto == "hamburger") {
            produtoItem.querySelector('.produtos-item--price').innerHTML = `R$ ${produtosJson[0]['Produtos'][index].prices[0].toFixed(2)}`; //valor do card principal

        } else if (produto == "bebida") {
            produtoItem.querySelector('.produtos-item--price').innerHTML = `R$ ${produtosJson[0]['Produtos'][index].prices[2]}`; //valor do card principal
        }

        produtoItem.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            let key = e.target.closest('.produtos-item').getAttribute('data-key');
            modalQt = 1;
            modalKey = key;


            c('.produto-Big img').src = produtosJson[0]['Produtos'][key].img;
            c('.produto-Info h1').innerHTML = produtosJson[0]['Produtos'][key].name;
            c('.produto-Info--desc').innerHTML = produtosJson[0]['Produtos'][key].description;


            if (produto == "pizza") {
                c('.produto-Info--size.selected').classList.remove('selected');
                cs('.produto-Info--size').forEach((size, sizeIndex) => {
                    if (sizeIndex == 2) {
                        size.classList.add('selected');
                        atualizaTotal('pizza', sizeIndex);
                        size.querySelector('span').innerHTML = produtosJson[0]['Produtos'][key].sizes[sizeIndex];
                    }
                });
            }
            if (produto == "hamburger") {
                atualizaTotal('hamburger', 0);
            }

            if (produto == "bebida") {
                c('.produto-Info--size.selected').classList.remove('selected');
                cs('.produto-Info--size').forEach((size, sizeIndex) => {
                    if (sizeIndex == 2) {
                        size.classList.add('selected');
                        atualizaTotal('bebida', sizeIndex);
                        size.querySelector('span').innerHTML = produtosJson[0]['Produtos'][key].sizes[sizeIndex];
                    }
                });
            }


            c('.produto-Info--qt-pizza').innerHTML = modalQt;
            c('.produto-Info--qt-hamburger').innerHTML = modalQt;
            c('.produto-Info--qt-bebida').innerHTML = modalQt;

            c('.produto-WindowArea').style.opacity = 0;
            c('.produto-WindowArea').style.display = 'flex';
            setTimeout(() => {
                c('.produto-WindowArea').style.opacity = 1;
            }, 200);

        });
        if (produto == "pizza") {
            c('.Pizzas-area').append(produtoItem);

        } else if (produto == "hamburger") {
            c('.Hamburgers-area').append(produtoItem);
        } else if (produto == "bebida") {
            c('.Bebidas-area').append(produtoItem);
        }
        // }
    }



});

//
//produtosJson[0]['Produtos'].map((item, index) => {
// //   if (produtosJson[0]['Produtos'][index].tipo == 'hamburger') {//
//
//        //console.log(produtosJson);
//
//       let HamburgersItem = c('.models .Hamburgers-item').cloneNode(true);
//       //preencher as informações em Hamburgersitem
//
//        HamburgersItem.setAttribute('data-key', index);
//        HamburgersItem.querySelector('.Hamburgers-item--img img').src = item.img;
//        HamburgersItem.querySelector('.Hamburgers-item--name').innerHTML = item.name;
//        HamburgersItem.querySelector('.Hamburgers-item--desc').innerHTML = item.description;
//        HamburgersItem.querySelector('.Hamburgers-item--price').innerHTML = `R$ ${produtosJson[0]['Produtos'][index].prices.toFixed(2)}`; //valor do card principal
//
//console.log(HamburgersJson[index].prices[0]);

//`R$ ${HamburgersJson[key].prices[0].toFixed(2)}`

//      HamburgersItem.querySelector('a').addEventListener('click', (e) => {
//          e.preventDefault();
//         let key = e.target.closest('.Hamburgers-item').getAttribute('data-key');
//          modalQt = 1;
//          modalKey = key;


//          c('.HamburgersBig img').src = produtosJson[0]['Produtos'][key].img;
//         c('.HamburgersInfo h1').innerHTML = produtosJson[0]['Produtos'][key].name;
//         c('.HamburgersInfo--desc').innerHTML = produtosJson[0]['Produtos'][key].description;



//c('.HamburgersInfo--size.selected').classList.remove('selected');
/* cs('.HamburgersInfo--size').forEach((size, sizeIndex) => {
     if (sizeIndex == 2) {
         size.classList.add('selected');
         atualizaTotal();
         //console.log(`R$ ${HamburgersJson[key].prices[sizeIndex].toFixed(2) * modalQt}`);
         // console.log(key);
         // console.log(modalKey);
         // console.log(sizeIndex);

     }
     size.querySelector('span').innerHTML = produtosJson[0]['Produtos'][key].sizes[sizeIndex];

 });

 **/
//      atualizaTotal('hamburger', 0);
//
//         c('.HamburgersInfo--qt').innerHTML = modalQt;
//
//           c('.HamburgersWindowArea').style.opacity = 0;
//           c('.HamburgersWindowArea').style.display = 'flex';
//           setTimeout(() => {
//               c('.HamburgersWindowArea').style.opacity = 1;
//           }, 200);

//       });
//       c('.Hamburgers-area').append(HamburgersItem);
//    }
//});
//

//Eventos do Modal


function closeModal() {
    c('.produto-WindowArea').style.opacity = 0;
    setTimeout(() => {
        c('.produto-WindowArea').style.display = 'none';
    }), 500;


}

cs('.produto-Info--cancelButton, .produto-Info--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});



//

//


c('.produto-Info--qtmenos-pizza').addEventListener('click', () => {
    console.log('pizza')
    if (modalQt > 1) {
        modalQt--;
        let sizeIndex = parseInt(c('.produto-Info--size.selected').getAttribute('data-key'));
        c('.produto-Info--qt-pizza').innerHTML = modalQt;
        atualizaTotal('pizza', sizeIndex); //fazer passar certo

    }
});

c('.produto-Info--qtmais-pizza').addEventListener('click', () => {
    console.log('pizza')

    modalQt++;
    let sizeIndex = parseInt(c('.produto-Info--size.selected').getAttribute('data-key'));
    c('.produto-Info--qt-pizza').innerHTML = modalQt;
    atualizaTotal('pizza', sizeIndex); //fazer passar certo
});

c('.produto-Info--qtmenos-hamburger').addEventListener('click', () => {
    console.log('hamburger')
    if (modalQt > 1) {
        modalQt--;
        let sizeIndex = parseInt(c('.produto-Info--size.selected').getAttribute('data-key'));
        c('.produto-Info--qt-hamburger').innerHTML = modalQt;
        atualizaTotal('hamburger', sizeIndex); //fazer passar certo

    }
});

c('.produto-Info--qtmais-hamburger').addEventListener('click', () => {
    console.log('hamburger')

    modalQt++;
    let sizeIndex = parseInt(c('.produto-Info--size.selected').getAttribute('data-key'));
    c('.produto-Info--qt-hamburger').innerHTML = modalQt;
    atualizaTotal('hamburger', sizeIndex); //fazer passar certo
});

c('.produto-Info--qtmenos-bebida').addEventListener('click', () => {
    console.log('bebida')
    if (modalQt > 1) {
        modalQt--;
        let sizeIndex = parseInt(c('.produto-Info--size.selected').getAttribute('data-key'));
        c('.produto-Info--qt-bebida').innerHTML = modalQt;
        atualizaTotal('bebida', sizeIndex); //fazer passar certo

    }
});

c('.produto-Info--qtmais-bebida').addEventListener('click', () => {
    console.log('bebida')

    modalQt++;
    let sizeIndex = parseInt(c('.produto-Info--size.selected').getAttribute('data-key'));
    c('.produto-Info--qt-bebida').innerHTML = modalQt;
    atualizaTotal('bebida', sizeIndex); //fazer passar certo
});





cs('.produto-Info--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        c('.produto-Info--size.selected').classList.remove('selected');
        size.classList.add('selected');


        atualizaTotal('pizza', sizeIndex);

    })
});

c('.produto-Info--addButton').addEventListener('click', () => {
    //Qual pizza
    //Qual tamanho
    //Quantidade

    let size = parseInt(c('.produto-Info--size.selected').getAttribute('data-key'));

    let identifier = produtosJson[0]['Produtos'][modalKey].id + '@' + size;

    let key = cart.findIndex((item) => {
        return item.identifier == identifier;
    });

    if (key > -1) {
        cart[key].qt = +modalQt;
    } else {
        cart.push({
            identifier,
            id: produtosJson[0]['Produtos'][modalKey].id,
            size,
            qt: modalQt,

        });
    }


    updateCart();
    closeModal();
});

c('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        c('aside').style.left = '0';
    }

});

c('.menu-closer').addEventListener('click', () => {
    c('aside').style.left = '100vw';
})

function atualizaTotal(produto, sizeIndex) {

    if (produto == 'pizza') {
        document.querySelector('.produto-Info--size-area').style.display = 'block';
        document.querySelector('.produto-Info--qtarea-pizza').style.display = 'inline-flex';
        document.querySelector('.produto-Info--qtarea-hamburger').style.display = 'none';
        document.querySelector('.produto-Info--qtarea-bebida').style.display = 'none';

        c('.produto-Info--actualPrice').innerHTML = `R$ ${produtosJson[0]['Produtos'][modalKey].prices[sizeIndex].toFixed(2)* modalQt}`;


    } else if (produto == 'hamburger') {
        document.querySelector('.produto-Info--qtarea-hamburger').style.display = 'inline-flex ';
        document.querySelector('.produto-Info--size-area').style.display = 'none';
        document.querySelector('.produto-Info--qtarea-pizza').style.display = 'none';
        document.querySelector('.produto-Info--qtarea-bebida').style.display = 'none';

        c('.produto-Info--actualPrice').innerHTML = `R$ ${produtosJson[0]['Produtos'][modalKey].prices[0].toFixed(2)* modalQt}`;


    } else if (produto == 'bebida') {
        document.querySelector('.produto-Info--qtarea-bebida').style.display = 'inline-flex';
        document.querySelector('.produto-Info--size-area').style.display = 'block';
        document.querySelector('.produto-Info--qtarea-pizza').style.display = 'none';
        document.querySelector('.produto-Info--qtarea-hamburger').style.display = 'none ';



        //  document.querySelector('.produto-Info--qtarea-hamburger').style.display = 'none ';

        c('.produto-Info--actualPrice').innerHTML = `R$ ${produtosJson[0]['Produtos'][modalKey].prices[sizeIndex].toFixed(2)* modalQt}`;
        // console.log('tratando pizza')
        // console.log(sizeIndex);
    }

}

function updateCart() {

    c('.menu-openner span').innerHTML = cart.length;


    if (cart.length > 0) {
        c('aside').classList.add('show');
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;
        let frete = 5;

        for (let i in cart) {
            let produtoItem = produtosJson[0]['Produtos'].find((item) => item.id == cart[i].id);
            console.log(produtoItem);
            console.log(produtoItem.prices[cart[i].size] * cart[i].qt)
            if (produtoItem.tipo == 'pizza') {
                subtotal += produtoItem.prices[cart[i].size] * cart[i].qt; //de acordo com o tamanho ele encontra o valor
            } else if (produtoItem.tipo == 'hamburger') {
                subtotal += produtoItem.prices[0] * cart[i].qt; //de acordo com o tamanho ele encontra o valor
            } else if (produtoItem.tipo == 'bebida') {
                subtotal += produtoItem.prices[cart[i].size] * cart[i].qt; //de acordo com o tamanho ele encontra o valor
            }
            let cartItem = c('.models .cart--item').cloneNode(true);

            let produtoSizeName;
            switch (cart[i].size) {
                case 0:
                    produtoSizeName = 'P';
                    break;
                case 1:
                    produtoSizeName = 'M';
                    break;
                case 2:
                    produtoSizeName = 'G';
                    break;
            }
            if (produtoItem.tipo == 'pizza') {
                var produtoName = `${produtoItem.name} (${produtoSizeName})`;

            } else if (produtoItem.tipo == 'hamburger') {
                var produtoName = `${produtoItem.name}`;

            } else if (produtoItem.tipo == 'bebida') {
                var produtoName = `${produtoItem.name} (${produtoSizeName})`;

            }


            cartItem.querySelector('img').src = produtoItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = produtoName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--;

                } else {
                    cart.splice(i, 1);
                }
                updateCart();

            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++;
                updateCart();
            });

            c('.cart').append(cartItem);
        }

        desconto = subtotal * 0.05;
        total = subtotal - desconto + frete;

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.frete span:last-child').innerHTML = `R$ ${frete.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;


    } else {
        c('aside').classList.remove('show');
        c('aside').style.left = '100vw';

    }
}


function toggleFAB(fab) {
    if (document.querySelector(fab).classList.contains('show')) {
        document.querySelector(fab).classList.remove('show');
    } else {
        document.querySelector(fab).classList.add('show');
    }
}

document.querySelector('.fab .main').addEventListener('click', function() {
    toggleFAB('.fab');
});

document.querySelectorAll('.fab ul li button').forEach((item) => {
    item.addEventListener('click', function() {
        toggleFAB('.fab');
    });
});