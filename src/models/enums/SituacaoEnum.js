export const situacoes = { 
    0: 'Pendente',
    1: 'Andamento',
    2: 'Renovado',
};

export const situacoesInverso = {
    'Pendente': 0,
    'Andamento': 1,
    'Renovado': 2,
};

export function mapSituacao(value) {
    return situacoes[value] ?? value;
}

export function mapSituacaoInverso(label) {
    return situacoesInverso[label] ?? label;
}