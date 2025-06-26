// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA O DECODIFICADOR DE CÓDIGO Q ---

    // 1. Mapeamento de todos os códigos e seus significados
    const significadosQ = {
        'QAP': 'Está na escuta?',
        'QSL': 'Entendido, acusado o recebimento da mensagem.',
        'QTH': 'Qual endereço, local, posição?',
        'QAR': 'Desligar.',
        'QRN': 'Está com interferência na comunicação?',
        'QRA': 'Qual nome do operador ou da estação (indicativo)?',
        'QRL': 'Você está ocupado?',
        'QRM': 'Está sofrendo interferência humana?',
        'QRQ': 'Transmita mais depressa.',
        'QRS': 'Transmita mais devagar.',
        'QRT': 'Devo parar de transmitir? / Fora do ar.',
        'QRU': 'Tens algo para mim?',
        'QRV': 'Está preparado? / Às suas ordens.',
        'QRX': 'Aguarde. / Quando você vai me ligar de novo?',
        'QRZ': 'Quem está me chamando?',
        'QSA': 'Como está recebendo? Qual a força do sinal?',
        'QSM': 'Devo repetir a última mensagem?',
        'QSO': 'Comunicado, aviso.',
        'QSP': 'Fazer ponte. Pode transmitir para...?',
        'QTC': 'Quantas mensagens para enviar? / Tem mensagem para enviar?',
        'QTR': 'Qual o horário exato?',
        'QTU': 'Em qual horário irá operar?',
        'QTA': 'Mensagem cancelada.',
        'QSV': 'Viatura.',
        'QSD': 'Motorista.',
        'QSJ': 'Dinheiro, pagamento.',
        'TKS': 'Obrigado.',
        'QRB': 'Qual a distância da sua estação?',
        'QSN': 'Escutou-me?',
        'QSR': 'Devo repetir?',
        'QTN': 'Que horas saiu?',
        'QUA': 'Você tem notícias de...?',
        'QTI': 'Qual é o seu rumo verdadeiro? / Rota, caminho.'
    };

    // 2. Seleciona os elementos HTML
    const seletorCodigoQ = document.getElementById('q-code-selector');
    const resultadoCodigoQ = document.getElementById('q-code-result');

    // 3. Adiciona um "ouvinte" que dispara uma ação quando o usuário muda a seleção
    seletorCodigoQ.addEventListener('change', (event) => {
        const codigoSelecionado = event.target.value;
        if (codigoSelecionado && significadosQ[codigoSelecionado]) {
            resultadoCodigoQ.textContent = significadosQ[codigoSelecionado];
        } else {
            resultadoCodigoQ.textContent = 'O significado aparecerá aqui...';
        }
    });


    // --- LÓGICA PARA O CONVERSOR FONÉTICO ---

    // 1. Mapeamento do alfabeto fonético
    const alfabetoFonetico = {
        'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
        'F': 'Fox', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
        'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
        'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
        'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-Ray', 'Y': 'Yankee', 'Z': 'Zulu',
        '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
        '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
    };

    // 2. Seleciona os elementos HTML
    const inputFonetico = document.getElementById('phonetic-input');
    const botaoFonetico = document.getElementById('phonetic-button');
    const resultadoFonetico = document.getElementById('phonetic-result');

    // 3. Função que faz a conversão
    function converterTextoParaFonetico() {
        const texto = inputFonetico.value.toUpperCase();
        if (texto.trim() === '') {
            resultadoFonetico.textContent = 'A conversão aparecerá aqui...';
            return;
        }

        let resultado = [];
        for (const caractere of texto) {
            // Se o caractere existe no nosso alfabeto, usa a palavra, senão, usa o próprio caractere
            resultado.push(alfabetoFonetico[caractere] || caractere);
        }
        resultadoFonetico.textContent = resultado.join(' ');
    }

    // 4. Adiciona o evento de clique ao botão
    botaoFonetico.addEventListener('click', converterTextoParaFonetico);

    // Bônus: Também converte quando o usuário aperta Enter no campo de texto
    inputFonetico.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            converterTextoParaFonetico();
        }
    });

});