const months = new Map<string, string>(
  Object.entries({
    "01": "Enero",
    "02": "Febrero",
    "03": "Marzo",
    "04": "Abril",
    "05": "Mayo",
    "06": "Junio",
    "07": "Julio",
    "08": "Agosto",
    "09": "Septiembre",
    "10": "Octubre",
    "11": "Noviembre",
    "12": "Diciembre",
  }),
);

export function formatDate(date: string | null): string {
  if (!date) return "";
  const [year, month, _] = date.split("-");
  return `${months.get(month)} ${year}`;
}
