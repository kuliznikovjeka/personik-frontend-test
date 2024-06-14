import { Message } from '../../types/common-models';

function isCityInList(city: string, cities: string[]) {
  return cities.includes(city);
}

function isCityUnique(city: string, areaMessages: Message[]) {
  return !areaMessages.some(message => message.message === city);
}

function isValidCityName(lastCity: string, currentCity: string) {
  if (!lastCity) return true;
  const lastChar = lastCity.slice(-1);
  const lastValidChar =
    lastChar === 'ь' || lastChar === 'ъ' ? lastCity.slice(-2, -1).toUpperCase() : lastChar.toUpperCase();
  const firstChar = currentCity.charAt(0).toUpperCase();
  return lastValidChar === firstChar;
}

function handleValidateInput(city: string, cities: string[], areaMessages: Message[]) {
  if (!isCityInList(city, cities)) {
    return 'Такого города не существует в списке.';
  }

  if (!isCityUnique(city, areaMessages)) {
    return 'Этот город уже был упомянут.';
  }

  const lastCity = areaMessages.length > 0 ? areaMessages[areaMessages.length - 1].message : null;

  if (lastCity && !isValidCityName(lastCity, city)) {
    return 'Введенный город должен начинаться с буквы, на которую оканчивается предыдущий город.';
  }

  return null;
}

export { isValidCityName, isCityUnique, isCityInList, handleValidateInput };
