const getRandomApr = () => {
  const precision = 100; // 2 decimals
  return (
    Math.floor(
      Math.random() * (10 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision)
  );
};

const get = (url) =>
  new Promise((resolve) =>
    setTimeout(() => {
      const rates = [
        { id: 1, range: { start: 1000, end: 2500 }, apr: getRandomApr() },
        { id: 2, range: { start: 2500, end: 5000 }, apr: getRandomApr() },
        { id: 3, range: { start: 5000, end: 7500 }, apr: getRandomApr() },
        { id: 4, range: { start: 7500, end: 12500 }, apr: getRandomApr() },
        { id: 5, range: { start: 12500, end: 20000 }, apr: getRandomApr() },
      ];
      console.table(
        rates.map((x) => ({
          range: `£${x.range.start} - £${x.range.end}`,
          apr: x.apr,
        }))
      );
      resolve(rates);
    }, 1500)
  );

const api = { get };

export default api;
