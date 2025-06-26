document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA ROBUSTA E COMPLETA PARA TROCA DE TEMA ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeText = document.getElementById('theme-text');
    const body = document.body;

    /**
     * Função centralizada para atualizar a UI do tema.
     * @param {string} theme - O tema a ser aplicado ('light' ou 'dark').
     */
    const updateThemeUI = (theme) => {
        // Garante que os elementos existem antes de manipulá-los
        if (body && themeText) { 
            if (theme === 'dark') {
                body.classList.add('dark-theme');
                themeText.textContent = 'Noite';
            } else {
                body.classList.remove('dark-theme');
                themeText.textContent = 'Dia';
            }
        }
    };

    // Define o estado inicial ao carregar a página
    const initialTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    updateThemeUI(initialTheme);

    // Adiciona o evento de clique somente se o botão existir
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-theme');
            const newTheme = isDark ? 'light' : 'dark';
            
            updateThemeUI(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- LÓGICA COMPLETA DO DECODIFICADOR DE CÓDIGO Q ---
    const significadosQ = {
        'QAP': 'Está na escuta?', 'QSL': 'Entendido, mensagem recebida.', 'QTH': 'Qual é a sua localização/endereço?', 'QAR': 'Desligar.', 'QRN': 'Está com interferência (estática)?', 'QRA': 'Qual é o seu nome ou o nome da sua estação (indicativo)?', 'QRL': 'Você está ocupado?', 'QRM': 'Está sofrendo interferência de outra estação?', 'QRQ': 'Transmita mais rápido.', 'QRS': 'Transmita mais devagar.', 'QRT': 'Devo parar de transmitir? / Saindo do ar.', 'QRU': 'Tem algo para mim?', 'QRV': 'Estou à disposição/pronto.', 'QRX': 'Aguarde um momento.', 'QRZ': 'Quem está me chamando?', 'QSA': 'Como está a recepção? / Qual a intensidade dos sinais?', 'QSM': 'Devo repetir a última mensagem?', 'QSO': 'Contato, comunicado.', 'QSP': 'Pode retransmitir a mensagem para...? (fazer uma ponte)', 'QTC': 'Tem alguma mensagem para transmitir?', 'QTR': 'Qual é a hora exata?', 'QTU': 'Qual é o seu horário de funcionamento?', 'QTA': 'Anule a mensagem anterior.', 'QSV': 'Viatura.', 'QSD': 'Motorista.', 'QSJ': 'Dinheiro.', 'TKS': 'Obrigado (do inglês "Thanks").', 'QRB': 'A que distância aproximada você está da minha estação?', 'QSN': 'Você me escutou?', 'QSR': 'Precisa que eu repita a chamada?', 'QTN': 'A que horas você saiu?', 'QUA': 'Você tem notícias de...?', 'QTI': 'Qual o seu rumo verdadeiro?'
    };
    const seletorCodigoQ = document.getElementById('q-code-selector');
    const resultadoCodigoQ = document.getElementById('q-code-result');
    if (seletorCodigoQ) {
        seletorCodigoQ.addEventListener('change', (event) => {
            const codigoSelecionado = event.target.value;
            resultadoCodigoQ.textContent = significadosQ[codigoSelecionado] || 'O significado aparecerá aqui...';
        });
    }

    // --- LÓGICA COMPLETA DO CONVERSOR FONÉTICO ---
    const alfabetoFonetico = {
        'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo', 'F': 'Fox', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar', 'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango', 'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-Ray', 'Y': 'Yankee', 'Z': 'Zulu', '0': 'Zero', '1': 'Um', '2': 'Dois', '3': 'Três', '4': 'Quatro', '5': 'Cinco', '6': 'Seis', '7': 'Sete', '8': 'Oito', '9': 'Nove'
    };
    const inputFonetico = document.getElementById('phonetic-input');
    const botaoFonetico = document.getElementById('phonetic-button');
    const resultadoFonetico = document.getElementById('phonetic-result');
    const converterTextoParaFonetico = () => {
        const texto = inputFonetico.value.toUpperCase();
        if (texto.trim() === '') {
            resultadoFonetico.textContent = 'A conversão aparecerá aqui...';
            return;
        }
        const resultado = [...texto].map(char => alfabetoFonetico[char] || char).join(' ');
        resultadoFonetico.textContent = resultado;
    };
    if (botaoFonetico) {
        botaoFonetico.addEventListener('click', converterTextoParaFonetico);
    }
    if (inputFonetico) {
        inputFonetico.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                converterTextoParaFonetico();
            }
        });
    }
});