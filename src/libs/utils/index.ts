export const thousandSeparator = (num: number) => {
  const results = num.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, '.')
  return results
}

export const nonNumberFilter = (num: string) => {
  const results = num.toString().replace(/[^0-9]/g, "");
  return results

}
