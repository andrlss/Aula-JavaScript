

/* AULA 1(alert, console, var)

//declaraçao de variaveis
        var nome = "André luiz";
        var n1 = 5;
        var n2  = 3;
        var frase = "A PAIN Gaming é o melhor time do mundo! ";

//comando de alerta
        alert(nome +  " tem " + idade + " anos" );
        alert(idade + idade2);

//comando para console
        console.log(nome);
        console.log(n1 * n2);
        console.log(frase.replace("PAIN Gaming", "Gamelanders"));
        alert(frase.replace("PAIN Gaming", "Gamelanders")); // replace: troca de string
*/

/* AULA 2

    var lista = ["maça", "banana", "laranja"];
        lista.push("caju"); (acrescentar a lista)
        lista.pop(); (excluir ultimo item da lista)
            console.log(lista[0])
            console.log(lista.toString()[0]);
            console.log(lista.join(" - ")); (muda a saparecao do array)
            alert(lista[1]);

dicionario
    var fruta = {nome:"laranja", cor:"laranja"};
        console.log(fruta.nome);
        alert(fruta.cor);

lista de dicionario
    var frutas = [{nome:"laranja", cor:"laranja"}, {nome:"melancia", cor:"verde e vermelho"}];
        console.log(frutas[0].nome);
        alert(frutas[1].cor);
*/

/* AULA 3

    condicional:
        var idade = prompt("qual sua idade?");
            if (idade >= 18){
                alert("maior de idade");
            } else{
                alert("menor de idade");
            }

    laços de repetiçao while(enquanto)
        var count = 0;
            while (count <= 5){
                alert(count);
                count++;
            };

    laço de repetiçao for(durante)
        var count;
            for(count=1; count <= 5; count++){
                alert(count);
            };
*/

/* data
        var d = new Date();
            alert(d.getMonth() + 1);
            alert(d.getMinutes());
            alert(d.getDay());
*/

/*funçao
    function soma(n1, n2){
        return n1 + n2;
    };

        alert(soma(5, 10));


    function setReplace(frase, nome, novo_nome){
        return frase.replace(nome, novo_nome);
    };

        alert(setReplace("Vamo PAIN!", "PAIN", "GL"));

    function validaIdade(idade){
    
        var validar;
            if (idade >= 18){
                validar = true;
            } else{
                validar = false;
            };
                return validar;
        };

        var idade = prompt("Qual sua idade?");
            console.log(validaIdade(idade));


    function clicou(){
        document.getElementById("agradecer").innerHTML = "<b>Obrigado por clicar!!!</b>" ;
            console.log(document.getElementById("agradecer"));
            alert("obrigado por clicar");
    };

    function redirecionamento(){
        window.open("https://www.youtube.com/");
        window.location.href = "https://www.youtube.com/";
    };

    function trocar(){
        document.getElementById("mousemove").innerHTML = "Parabéns você passou o mouse!";
        alert("Trocar texto");
    };

    function voltar(){
        document.getElementById("mousemove").innerHTML = "Passe o mouse novamente!";   
    };

//forma abstraida

    function trocar(elemento){
        //document.getElementById("mousemove").innerHTML = "Parabéns você passou o mouse!";
        alert("Trocar texto");
        elemento.innerHTML = "Parabéns você passou o mouse!";
    };

    function voltar(elemento){
        //document.getElementById("mousemove").innerHTML = "Passe o mouse novamente!";
        elemento.innerHTML = "Passe o mouse novamente!"; 
    };

    function load(){
        alert("Página Caregada!");
    };

    function Funchange(elemento){
        console.log(elemento.value);
    };
*/

