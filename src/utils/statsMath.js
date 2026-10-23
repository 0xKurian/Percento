export function erf(x) {
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);

  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

export function normalCDF(z, mean = 0, std = 1) {
  const x = (z - mean) / std;
  return 0.5 * (1 + erf(x / Math.SQRT2));
}

export function laplacePhi0(x) {
  return normalCDF(x) - 0.5;
}

export function inverseNormalCDF(p) {
  if (p <= 0 || p >= 1) {
    if (p <= 0) return -Infinity;
    if (p >= 1) return Infinity;
  }

  const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
  const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
  const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
  const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];

  const p_low = 0.02425;
  const p_high = 1 - p_low;
  let q, r;

  if (p < p_low) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  } else if (p <= p_high) {
    q = p - 0.5;
    r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
      (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
}

export function getCriticalZ(alpha) {
  return inverseNormalCDF(1 - alpha);
}

export function getCriticalT(alpha, df) {
  if (df >= 100) return getCriticalZ(alpha);
  const z = getCriticalZ(alpha);
  const z3 = z * z * z;
  const z5 = z3 * z * z;

  const t = z + (z3 + z) / (4 * df) + (5 * z5 + 16 * z3 + 3 * z) / (96 * df * df);
  return t;
}

export function getCriticalChiSquare(alpha, df) {
  const z = getCriticalZ(alpha);
  const term = 1 - 2 / (9 * df) + z * Math.sqrt(2 / (9 * df));
  return Math.max(0, df * Math.pow(term, 3));
}

export function computeDescriptiveStats(numbers) {
  const n = numbers.length;
  if (n === 0) return null;

  const sum = numbers.reduce((a, b) => a + b, 0);
  const mean = sum / n;

  const sorted = [...numbers].sort((a, b) => a - b);
  const median = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];
  const min = sorted[0];
  const max = sorted[n - 1];

  let sumSquares = 0;
  for (let i = 0; i < n; i++) {
    sumSquares += (numbers[i] - mean) ** 2;
  }

  const variance = sumSquares / n;
  const std = Math.sqrt(variance);

  const adjustedVariance = n > 1 ? sumSquares / (n - 1) : 0;
  const adjustedStd = Math.sqrt(adjustedVariance);

  return {
    n,
    sum,
    mean,
    median,
    min,
    max,
    range: max - min,
    variance,
    std,
    adjustedVariance,
    adjustedStd,
  };
}

export function computeLinearRegression(points) {
  const n = points.length;
  if (n < 2) return null;

  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
  for (const pt of points) {
    sumX += pt.x;
    sumY += pt.y;
    sumXY += pt.x * pt.y;
    sumX2 += pt.x * pt.x;
    sumY2 += pt.y * pt.y;
  }

  const meanX = sumX / n;
  const meanY = sumY / n;

  const Sxx = sumX2 - n * meanX * meanX;
  const Syy = sumY2 - n * meanY * meanY;
  const Sxy = sumXY - n * meanX * meanY;

  if (Math.abs(Sxx) < 1e-12) {
    return { error: "Các điểm x thẳng đứng, không hồi quy được." };
  }

  const slope = Sxy / Sxx;
  const intercept = meanY - slope * meanX;
  const r = (Sxx > 0 && Syy > 0) ? Sxy / Math.sqrt(Sxx * Syy) : 0;
  const rSquared = r * r;

  return {
    n,
    meanX,
    meanY,
    Sxx,
    Syy,
    Sxy,
    slope,
    intercept,
    r,
    rSquared,
    formula: `y = ${slope >= 0 ? '' : '-'}${Math.abs(slope).toFixed(3)}x ${intercept >= 0 ? '+ ' : '- '}${Math.abs(intercept).toFixed(3)}`,
  };
}
