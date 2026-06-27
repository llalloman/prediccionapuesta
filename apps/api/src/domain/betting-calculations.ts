export type RecommendationCode = 'BET' | 'WATCH' | 'AVOID' | 'INSUFFICIENT_DATA';
export type RiskLevelCode = 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH';

export interface ValueRecommendation {
  recommendation: RecommendationCode;
  riskLevel: RiskLevelCode;
  label: string;
}

export function calculateImpliedProbability(decimalOdd: number): number {
  if (!Number.isFinite(decimalOdd) || decimalOdd <= 1) {
    throw new Error('La cuota decimal debe ser mayor a 1.');
  }

  return Number(((1 / decimalOdd) * 100).toFixed(2));
}

export function calculateBookmakerMargin(decimalOdds: number[]): number {
  if (!decimalOdds.length) {
    throw new Error('Debe enviar al menos una cuota.');
  }

  const totalProbability = decimalOdds.reduce((sum, odd) => {
    if (!Number.isFinite(odd) || odd <= 1) {
      throw new Error('Todas las cuotas deben ser mayores a 1.');
    }

    return sum + 1 / odd;
  }, 0);

  return Number(((totalProbability - 1) * 100).toFixed(2));
}

export function calculateEdge(
  modelProbabilityPercent: number,
  bookmakerProbabilityPercent: number,
): number {
  return Number((modelProbabilityPercent - bookmakerProbabilityPercent).toFixed(2));
}

export function calculateExpectedValue(
  modelProbabilityPercent: number,
  decimalOdd: number,
  stake: number,
): number {
  if (modelProbabilityPercent < 0 || modelProbabilityPercent > 100) {
    throw new Error('La probabilidad del modelo debe estar entre 0 y 100.');
  }

  if (decimalOdd <= 1) {
    throw new Error('La cuota decimal debe ser mayor a 1.');
  }

  if (stake <= 0) {
    throw new Error('El monto apostado debe ser mayor a 0.');
  }

  const probability = modelProbabilityPercent / 100;
  const profitIfWin = stake * (decimalOdd - 1);
  const lossIfLose = stake;

  const expectedValue = probability * profitIfWin - (1 - probability) * lossIfLose;

  return Number(expectedValue.toFixed(2));
}

export function getRecommendation(edge: number): ValueRecommendation {
  if (!Number.isFinite(edge)) {
    return {
      recommendation: 'INSUFFICIENT_DATA',
      riskLevel: 'VERY_HIGH',
      label: 'Datos insuficientes',
    };
  }

  if (edge >= 8) {
    return {
      recommendation: 'BET',
      riskLevel: 'MEDIUM',
      label: 'Posible valor fuerte',
    };
  }

  if (edge >= 4) {
    return {
      recommendation: 'WATCH',
      riskLevel: 'MEDIUM',
      label: 'Valor moderado, revisar contexto',
    };
  }

  if (edge > 0) {
    return {
      recommendation: 'WATCH',
      riskLevel: 'HIGH',
      label: 'Valor pequeno, no suficiente',
    };
  }

  return {
    recommendation: 'AVOID',
    riskLevel: 'HIGH',
    label: 'Sin valor aparente',
  };
}
