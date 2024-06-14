import { useEffect, useState } from 'react';
import { sendMessage, setIsUserQueue, setTimeLeft } from '../../store/game/slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectDataGame } from '../../store/selectors';
import { Message } from '../../types/common-models';
import { generateUniqueId, getRandomInteger, getStringWithCapitalLetter } from '../../utils';
import { cities } from '../../mock-data/cities';
import { handleValidateInput } from './heplers';
import iconTg from '../../assets/icons/tg.svg';

const city = 'city';
const minSecondsToApponentAnswer = 1;

export default function FormCities() {
  const dispatch = useAppDispatch();
  const { areaMessages, isUserQueue, gameDuration } = useAppSelector(selectDataGame);
  const [opponentResponseTime, setOpponentResponseTime] = useState(0);

  const timeToEndGame = gameDuration + 1;

  useEffect(() => {
    if (!isUserQueue) {
      const timer = setTimeout(() => {
        const randomCityIndex = getRandomInteger(0, cities.length - 1);

        const opponentMessage = {
          id: generateUniqueId(),
          message: cities[randomCityIndex],
          player: 'opponent',
        };

        dispatch(sendMessage([...areaMessages, opponentMessage]));
        dispatch(setIsUserQueue(true));
        dispatch(setTimeLeft(gameDuration));

        setOpponentResponseTime(0);
      }, opponentResponseTime * 1000);

      return () => clearTimeout(timer);
    }
  }, [isUserQueue, opponentResponseTime, dispatch, areaMessages, gameDuration]);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = (form.elements.namedItem(city) as HTMLInputElement).value;

    if (inputValue.length < 3) return;

    const formatedInputValue = getStringWithCapitalLetter(inputValue);

    const validationError = handleValidateInput(formatedInputValue, cities, areaMessages);
    if (validationError) {
      alert(validationError);
      return;
    }

    const message: Message = {
      id: generateUniqueId(),
      message: formatedInputValue,
      player: 'user',
    };

    dispatch(sendMessage([...areaMessages, message]));
    dispatch(setIsUserQueue(false));

    const randomResponseTime = getRandomInteger(minSecondsToApponentAnswer, timeToEndGame);
    setOpponentResponseTime(randomResponseTime);

    dispatch(setTimeLeft(gameDuration));

    form.reset();
  }

  const isDisabled = !isUserQueue ? true : false;

  return (
    <form onSubmit={handleFormSubmit} className="paper__form">
      <input
        type="text"
        name={city}
        className="paper__input"
        placeholder="Напишите любой город, например: Где вы живете?"
        disabled={isDisabled}
      />
      <button
        disabled={isDisabled}
        className={`paper__button-message-sendler ${isDisabled ? 'paper__button-message-sendler_disabled' : ''}`}
      >
        <img src={iconTg} alt="Иконка отправления сообщения" />
      </button>
    </form>
  );
}
