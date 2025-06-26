// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA O DECODIFICADOR DE CÓDIGO Q ---

    // 1. Mapeamento de todos os códigos e seus significados
    const significadosQ = {
        'QAP': 'Está na escuta?',
        'QSL': 'Entendido, mensagem recebida.',
        'QTH': 'Qual é a sua localização/endereço?',
        'QAR': 'Desligar.',
        'QRN': 'Está com interferência (estática)?',
        'QRA': 'Qual é o seu nome ou o nome da sua estação (indicativo)?',
        'QRL': 'Você está ocupado?',
        'QRM': 'Está sofrendo interferência de outra estação?',
        'QRQ': 'Transmita mais rápido.',
        'QRS': 'Transmita mais devagar.',
        'QRT': 'Devo parar de transmitir? / Saindo do ar.',
        'QRU': 'Tem algo para mim?',
        'QRV': 'Estou à disposição/pronto.',
        'QRX': 'Aguarde um momento.',
        'QRZ': 'Quem está me chamando?',
        'QSA': 'Como está a recepção? / Qual a intensidade dos sinais?',
        'QSM': 'Devo repetir a última mensagem?',
        'QSO': 'Contato, comunicado.',
        'QSP': 'Pode retransmitir a mensagem para...? (fazer uma ponte)',
        'QTC': 'Tem alguma mensagem para transmitir?',
        'QTR': 'Qual é a hora exata?',
        'QTU': 'Qual é o seu horário de funcionamento?',
        'QTA': 'Anule a mensagem anterior.',
        'QSV': 'Viatura.',
        'QSD': 'Motorista.',
        'QSJ': 'Dinheiro.',
        'TKS': 'Obrigado (do inglês "Thanks").',
        'QRB': 'A que distância aproximada você está da minha estação?',
        'QSN': 'Você me escutou?',
        'QSR': 'Precisa que eu repita a chamada?',
        'QTN': 'A que horas você saiu?',
        'QUA': 'Você tem notícias de...?',
        'QTI': 'Qual o seu rumo verdadeiro?'
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
        '0': 'Zero', '1': 'Um', '2': 'Dois', '3': 'Três', '4': 'Quatro',
        '5': 'Cinco', '6': 'Seis', '7': 'Sete', '8': 'Oito', '9': 'Nove'
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