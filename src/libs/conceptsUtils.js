const convertionTable = [
  { note: 10, response: 4 },
  { note: 9.99, response: 3.99 },
  { note: 9.98, response: 3.99 },
  { note: 9.97, response: 3.99 },
  { note: 9.96, response: 3.99 },
  { note: 9.95, response: 3.98 },
  { note: 9.94, response: 3.98 },
  { note: 9.93, response: 3.98 },
  { note: 9.92, response: 3.98 },
  { note: 9.91, response: 3.97 },
  { note: 9.9, response: 3.97 },
  { note: 9.89, response: 3.97 },
  { note: 9.88, response: 3.97 },
  { note: 9.87, response: 3.96 },
  { note: 9.86, response: 3.96 },
  { note: 9.85, response: 3.96 },
  { note: 9.84, response: 3.96 },
  { note: 9.83, response: 3.95 },
  { note: 9.82, response: 3.95 },
  { note: 9.81, response: 3.95 },
  { note: 9.8, response: 3.95 },
  { note: 9.79, response: 3.94 },
  { note: 9.78, response: 3.94 },
  { note: 9.77, response: 3.94 },
  { note: 9.76, response: 3.94 },
  { note: 9.75, response: 3.93 },
  { note: 9.74, response: 3.93 },
  { note: 9.73, response: 3.93 },
  { note: 9.72, response: 3.93 },
  { note: 9.71, response: 3.92 },
  { note: 9.7, response: 3.92 },
  { note: 9.69, response: 3.92 },
  { note: 9.68, response: 3.92 },
  { note: 9.67, response: 3.91 },
  { note: 9.66, response: 3.91 },
  { note: 9.65, response: 3.91 },
  { note: 9.64, response: 3.91 },
  { note: 9.63, response: 3.9 },
  { note: 9.62, response: 3.9 },
  { note: 9.61, response: 3.9 },
  { note: 9.6, response: 3.9 },
  { note: 9.59, response: 3.89 },
  { note: 9.58, response: 3.89 },
  { note: 9.57, response: 3.89 },
  { note: 9.56, response: 3.89 },
  { note: 9.55, response: 3.88 },
  { note: 9.54, response: 3.88 },
  { note: 9.53, response: 3.88 },
  { note: 9.52, response: 3.88 },
  { note: 9.51, response: 3.87 },
  { note: 9.5, response: 3.87 },
  { note: 9.49, response: 3.87 },
  { note: 9.48, response: 3.87 },
  { note: 9.47, response: 3.86 },
  { note: 9.46, response: 3.86 },
  { note: 9.45, response: 3.86 },
  { note: 9.44, response: 3.86 },
  { note: 9.43, response: 3.85 },
  { note: 9.42, response: 3.85 },
  { note: 9.41, response: 3.85 },
  { note: 9.4, response: 3.85 },
  { note: 9.39, response: 3.84 },
  { note: 9.38, response: 3.84 },
  { note: 9.37, response: 3.84 },
  { note: 9.36, response: 3.84 },
  { note: 9.35, response: 3.83 },
  { note: 9.34, response: 3.83 },
  { note: 9.33, response: 3.83 },
  { note: 9.32, response: 3.83 },
  { note: 9.31, response: 3.82 },
  { note: 9.3, response: 3.82 },
  { note: 9.29, response: 3.82 },
  { note: 9.28, response: 3.82 },
  { note: 9.27, response: 3.81 },
  { note: 9.26, response: 3.81 },
  { note: 9.25, response: 3.81 },
  { note: 9.24, response: 3.81 },
  { note: 9.23, response: 3.8 },
  { note: 9.22, response: 3.8 },
  { note: 9.21, response: 3.8 },
  { note: 9.2, response: 3.8 },
  { note: 9.19, response: 3.79 },
  { note: 9.18, response: 3.79 },
  { note: 9.17, response: 3.79 },
  { note: 9.16, response: 3.79 },
  { note: 9.15, response: 3.78 },
  { note: 9.14, response: 3.78 },
  { note: 9.13, response: 3.78 },
  { note: 9.12, response: 3.78 },
  { note: 9.11, response: 3.77 },
  { note: 9.1, response: 3.77 },
  { note: 9.09, response: 3.77 },
  { note: 9.08, response: 3.77 },
  { note: 9.07, response: 3.76 },
  { note: 9.06, response: 3.76 },
  { note: 9.05, response: 3.76 },
  { note: 9.04, response: 3.76 },
  { note: 9.03, response: 3.75 },
  { note: 9.02, response: 3.75 },
  { note: 9.01, response: 3.75 },
  { note: 9, response: 3.75 },
  { note: 8.99, response: 3.74 },
  { note: 8.98, response: 3.74 },
  { note: 8.97, response: 3.74 },
  { note: 8.96, response: 3.74 },
  { note: 8.95, response: 3.73 },
  { note: 8.94, response: 3.73 },
  { note: 8.93, response: 3.73 },
  { note: 8.92, response: 3.73 },
  { note: 8.91, response: 3.72 },
  { note: 8.9, response: 3.72 },
  { note: 8.89, response: 3.72 },
  { note: 8.88, response: 3.72 },
  { note: 8.87, response: 3.71 },
  { note: 8.86, response: 3.71 },
  { note: 8.85, response: 3.71 },
  { note: 8.84, response: 3.71 },
  { note: 8.83, response: 3.7 },
  { note: 8.82, response: 3.7 },
  { note: 8.81, response: 3.7 },
  { note: 8.8, response: 3.7 },
  { note: 8.79, response: 3.69 },
  { note: 8.78, response: 3.69 },
  { note: 8.77, response: 3.69 },
  { note: 8.76, response: 3.69 },
  { note: 8.75, response: 3.68 },
  { note: 8.74, response: 3.68 },
  { note: 8.73, response: 3.68 },
  { note: 8.72, response: 3.68 },
  { note: 8.71, response: 3.67 },
  { note: 8.7, response: 3.67 },
  { note: 8.69, response: 3.67 },
  { note: 8.68, response: 3.67 },
  { note: 8.67, response: 3.66 },
  { note: 8.66, response: 3.66 },
  { note: 8.65, response: 3.66 },
  { note: 8.64, response: 3.66 },
  { note: 8.63, response: 3.65 },
  { note: 8.62, response: 3.65 },
  { note: 8.61, response: 3.65 },
  { note: 8.6, response: 3.65 },
  { note: 8.59, response: 3.64 },
  { note: 8.58, response: 3.64 },
  { note: 8.57, response: 3.64 },
  { note: 8.56, response: 3.64 },
  { note: 8.55, response: 3.63 },
  { note: 8.54, response: 3.63 },
  { note: 8.53, response: 3.63 },
  { note: 8.52, response: 3.63 },
  { note: 8.51, response: 3.62 },
  { note: 8.5, response: 3.62 },
  { note: 8.49, response: 3.62 },
  { note: 8.48, response: 3.62 },
  { note: 8.47, response: 3.61 },
  { note: 8.46, response: 3.61 },
  { note: 8.45, response: 3.61 },
  { note: 8.44, response: 3.61 },
  { note: 8.43, response: 3.6 },
  { note: 8.42, response: 3.6 },
  { note: 8.41, response: 3.6 },
  { note: 8.4, response: 3.6 },
  { note: 8.39, response: 3.59 },
  { note: 8.38, response: 3.59 },
  { note: 8.37, response: 3.59 },
  { note: 8.36, response: 3.59 },
  { note: 8.35, response: 3.58 },
  { note: 8.34, response: 3.58 },
  { note: 8.33, response: 3.58 },
  { note: 8.32, response: 3.58 },
  { note: 8.31, response: 3.57 },
  { note: 8.3, response: 3.57 },
  { note: 8.29, response: 3.57 },
  { note: 8.28, response: 3.57 },
  { note: 8.27, response: 3.56 },
  { note: 8.26, response: 3.56 },
  { note: 8.25, response: 3.56 },
  { note: 8.24, response: 3.56 },
  { note: 8.23, response: 3.55 },
  { note: 8.22, response: 3.55 },
  { note: 8.21, response: 3.55 },
  { note: 8.2, response: 3.55 },
  { note: 8.19, response: 3.54 },
  { note: 8.18, response: 3.54 },
  { note: 8.17, response: 3.54 },
  { note: 8.16, response: 3.54 },
  { note: 8.15, response: 3.53 },
  { note: 8.14, response: 3.53 },
  { note: 8.13, response: 3.53 },
  { note: 8.12, response: 3.53 },
  { note: 8.11, response: 3.52 },
  { note: 8.1, response: 3.52 },
  { note: 8.09, response: 3.52 },
  { note: 8.08, response: 3.52 },
  { note: 8.07, response: 3.51 },
  { note: 8.06, response: 3.51 },
  { note: 8.05, response: 3.51 },
  { note: 8.04, response: 3.51 },
  { note: 8.03, response: 3.5 },
  { note: 8.02, response: 3.5 },
  { note: 8.01, response: 3.5 },
  { note: 8, response: 3.5 },
  { note: 7.99, response: 3.49 },
  { note: 7.98, response: 3.49 },
  { note: 7.97, response: 3.49 },
  { note: 7.96, response: 3.49 },
  { note: 7.95, response: 3.48 },
  { note: 7.94, response: 3.48 },
  { note: 7.93, response: 3.48 },
  { note: 7.92, response: 3.48 },
  { note: 7.91, response: 3.47 },
  { note: 7.9, response: 3.47 },
  { note: 7.89, response: 3.47 },
  { note: 7.88, response: 3.47 },
  { note: 7.87, response: 3.46 },
  { note: 7.86, response: 3.46 },
  { note: 7.85, response: 3.46 },
  { note: 7.84, response: 3.46 },
  { note: 7.83, response: 3.45 },
  { note: 7.82, response: 3.45 },
  { note: 7.81, response: 3.45 },
  { note: 7.8, response: 3.45 },
  { note: 7.79, response: 3.44 },
  { note: 7.78, response: 3.44 },
  { note: 7.77, response: 3.44 },
  { note: 7.76, response: 3.44 },
  { note: 7.75, response: 3.43 },
  { note: 7.74, response: 3.43 },
  { note: 7.73, response: 3.43 },
  { note: 7.72, response: 3.43 },
  { note: 7.71, response: 3.42 },
  { note: 7.7, response: 3.42 },
  { note: 7.69, response: 3.42 },
  { note: 7.68, response: 3.42 },
  { note: 7.67, response: 3.41 },
  { note: 7.66, response: 3.41 },
  { note: 7.65, response: 3.41 },
  { note: 7.64, response: 3.41 },
  { note: 7.63, response: 3.4 },
  { note: 7.62, response: 3.4 },
  { note: 7.61, response: 3.4 },
  { note: 7.6, response: 3.4 },
  { note: 7.59, response: 3.39 },
  { note: 7.58, response: 3.39 },
  { note: 7.57, response: 3.39 },
  { note: 7.56, response: 3.39 },
  { note: 7.55, response: 3.38 },
  { note: 7.54, response: 3.38 },
  { note: 7.53, response: 3.38 },
  { note: 7.52, response: 3.38 },
  { note: 7.51, response: 3.37 },
  { note: 7.5, response: 3.37 },
  { note: 7.49, response: 3.37 },
  { note: 7.48, response: 3.37 },
  { note: 7.47, response: 3.36 },
  { note: 7.46, response: 3.36 },
  { note: 7.45, response: 3.36 },
  { note: 7.44, response: 3.36 },
  { note: 7.43, response: 3.35 },
  { note: 7.42, response: 3.35 },
  { note: 7.41, response: 3.35 },
  { note: 7.4, response: 3.35 },
  { note: 7.39, response: 3.34 },
  { note: 7.38, response: 3.34 },
  { note: 7.37, response: 3.34 },
  { note: 7.36, response: 3.34 },
  { note: 7.35, response: 3.33 },
  { note: 7.34, response: 3.33 },
  { note: 7.33, response: 3.33 },
  { note: 7.32, response: 3.33 },
  { note: 7.31, response: 3.32 },
  { note: 7.3, response: 3.32 },
  { note: 7.29, response: 3.32 },
  { note: 7.28, response: 3.32 },
  { note: 7.27, response: 3.31 },
  { note: 7.26, response: 3.31 },
  { note: 7.25, response: 3.31 },
  { note: 7.24, response: 3.31 },
  { note: 7.23, response: 3.3 },
  { note: 7.22, response: 3.3 },
  { note: 7.21, response: 3.3 },
  { note: 7.2, response: 3.3 },
  { note: 7.19, response: 3.29 },
  { note: 7.18, response: 3.29 },
  { note: 7.17, response: 3.29 },
  { note: 7.16, response: 3.29 },
  { note: 7.15, response: 3.28 },
  { note: 7.14, response: 3.28 },
  { note: 7.13, response: 3.28 },
  { note: 7.12, response: 3.28 },
  { note: 7.11, response: 3.27 },
  { note: 7.1, response: 3.27 },
  { note: 7.09, response: 3.27 },
  { note: 7.08, response: 3.27 },
  { note: 7.07, response: 3.26 },
  { note: 7.06, response: 3.26 },
  { note: 7.05, response: 3.26 },
  { note: 7.04, response: 3.26 },
  { note: 7.03, response: 3.25 },
  { note: 7.02, response: 3.25 },
  { note: 7.01, response: 3.25 },
  { note: 7, response: 3.25 },
  { note: 6.99, response: 3.24 },
  { note: 6.98, response: 3.24 },
  { note: 6.97, response: 3.24 },
  { note: 6.96, response: 3.24 },
  { note: 6.95, response: 3.23 },
  { note: 6.94, response: 3.23 },
  { note: 6.93, response: 3.23 },
  { note: 6.92, response: 3.23 },
  { note: 6.91, response: 3.22 },
  { note: 6.9, response: 3.22 },
  { note: 6.89, response: 3.22 },
  { note: 6.88, response: 3.22 },
  { note: 6.87, response: 3.21 },
  { note: 6.86, response: 3.21 },
  { note: 6.85, response: 3.21 },
  { note: 6.84, response: 3.21 },
  { note: 6.83, response: 3.2 },
  { note: 6.82, response: 3.2 },
  { note: 6.81, response: 3.2 },
  { note: 6.8, response: 3.2 },
  { note: 6.79, response: 3.19 },
  { note: 6.78, response: 3.19 },
  { note: 6.77, response: 3.19 },
  { note: 6.76, response: 3.19 },
  { note: 6.75, response: 3.18 },
  { note: 6.74, response: 3.18 },
  { note: 6.73, response: 3.18 },
  { note: 6.72, response: 3.18 },
  { note: 6.71, response: 3.17 },
  { note: 6.7, response: 3.17 },
  { note: 6.69, response: 3.17 },
  { note: 6.68, response: 3.17 },
  { note: 6.67, response: 3.16 },
  { note: 6.66, response: 3.16 },
  { note: 6.65, response: 3.16 },
  { note: 6.64, response: 3.16 },
  { note: 6.63, response: 3.15 },
  { note: 6.62, response: 3.15 },
  { note: 6.61, response: 3.15 },
  { note: 6.6, response: 3.15 },
  { note: 6.59, response: 3.14 },
  { note: 6.58, response: 3.14 },
  { note: 6.57, response: 3.14 },
  { note: 6.56, response: 3.14 },
  { note: 6.55, response: 3.13 },
  { note: 6.54, response: 3.13 },
  { note: 6.53, response: 3.13 },
  { note: 6.52, response: 3.13 },
  { note: 6.51, response: 3.12 },
  { note: 6.5, response: 3.12 },
  { note: 6.49, response: 3.12 },
  { note: 6.48, response: 3.12 },
  { note: 6.47, response: 3.11 },
  { note: 6.46, response: 3.11 },
  { note: 6.45, response: 3.11 },
  { note: 6.44, response: 3.11 },
  { note: 6.43, response: 3.1 },
  { note: 6.42, response: 3.1 },
  { note: 6.41, response: 3.1 },
  { note: 6.4, response: 3.1 },
  { note: 6.39, response: 3.09 },
  { note: 6.38, response: 3.09 },
  { note: 6.37, response: 3.09 },
  { note: 6.36, response: 3.09 },
  { note: 6.35, response: 3.08 },
  { note: 6.34, response: 3.08 },
  { note: 6.33, response: 3.08 },
  { note: 6.32, response: 3.08 },
  { note: 6.31, response: 3.07 },
  { note: 6.3, response: 3.07 },
  { note: 6.29, response: 3.07 },
  { note: 6.28, response: 3.07 },
  { note: 6.27, response: 3.06 },
  { note: 6.26, response: 3.06 },
  { note: 6.25, response: 3.06 },
  { note: 6.24, response: 3.06 },
  { note: 6.23, response: 3.05 },
  { note: 6.22, response: 3.05 },
  { note: 6.21, response: 3.05 },
  { note: 6.2, response: 3.05 },
  { note: 6.19, response: 3.04 },
  { note: 6.18, response: 3.04 },
  { note: 6.17, response: 3.04 },
  { note: 6.16, response: 3.04 },
  { note: 6.15, response: 3.03 },
  { note: 6.14, response: 3.03 },
  { note: 6.13, response: 3.03 },
  { note: 6.12, response: 3.03 },
  { note: 6.11, response: 3.02 },
  { note: 6.1, response: 3.02 },
  { note: 6.09, response: 3.02 },
  { note: 6.08, response: 3.02 },
  { note: 6.07, response: 3.01 },
  { note: 6.06, response: 3.01 },
  { note: 6.05, response: 3.01 },
  { note: 6.04, response: 3.01 },
  { note: 6.03, response: 3 },
  { note: 6.02, response: 3 },
  { note: 6.01, response: 3 },
  { note: 6, response: 3 },
];

export const sanitizeNote = (note) => {
  const res = convertionTable.find((value) => value.note === note);
  return res.response;
};

export const diffMoths = (startDate, endDate) => {
  const fechaInicio = new Date(startDate).getTime();
  const fechaFin = new Date(endDate).getTime();

  const diff = fechaFin - fechaInicio;

  return (diff / (1000 * 60 * 60 * 24 * 30)).toFixed(2);
};
