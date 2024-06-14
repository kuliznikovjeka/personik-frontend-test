import { useAppSelector } from '../../store/hooks';
import { selectDataGame } from '../../store/selectors';

export default function MessagesArea() {
  const { areaMessages } = useAppSelector(selectDataGame);
  const listedCities = areaMessages.length;

  return (
    <>
      <ul className="paper__messages-area">
        {!areaMessages.length ? (
          <li className="paper__description">Первый участник вспоминает города...</li>
        ) : (
          areaMessages.map((elem, index) => (
            <li
              key={elem.id}
              className={`paper__message ${index % 2 === 0 ? 'paper__message_user' : 'paper__message_opponent'}`}
            >
              {elem.message}
            </li>
          ))
        )}
      </ul>
      {areaMessages.length ? (
        <p className="paper__text paper__text_light">Всего перечислено городов: {listedCities}</p>
      ) : null}
    </>
  );
}
