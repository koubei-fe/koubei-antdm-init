export const sillyRandomId = () => {
  const now = new Date().getTime().toString();
  return now.slice(-7) + Math.floor(Math.random() * 90 + 10);
};

function autoPrefix(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

export const formatTime = (timestamp) => {
  const now = new Date(timestamp);
  return `
${now.getFullYear()}-
${autoPrefix(now.getMonth() + 1)}-
${autoPrefix(now.getDate())} 
${autoPrefix(now.getHours())}:
${autoPrefix(now.getMinutes())}:
${autoPrefix(now.getSeconds())}
`;
};
