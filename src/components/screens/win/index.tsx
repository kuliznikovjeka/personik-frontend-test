import SectionHero from '../../../layouts/section-hero';
import ButtonMain from '../../button-main';
import { setIsPlaying } from '../../../store/game/slice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectDataGame } from '../../../store/selectors';
import { Paper, PaperContent, PaperFooter } from '../../paper';

export default function ScreenWin() {
  const dispatch = useAppDispatch();
  const { areaMessages } = useAppSelector(selectDataGame);

  const countOfCities = areaMessages.length;
  const lastNamedCity = areaMessages[countOfCities - 1]?.message;

  function handleButtonClick() {
    dispatch(setIsPlaying(true));
  }

  return (
    <SectionHero>
      <Paper>
        <PaperContent>
          <p className="paper__text paper__text_big-black">
            Поздравляем тебя с победой ! <br />
            Твой противник не вспомнил нужный город !
          </p>
          <span className="paper__time paper__time_win">00:00</span>
          <p className="paper__text paper__text_big-black">
            Всего было перечислено городов: <span>{countOfCities}</span> <br />
            Очень не плохой результат !
          </p>
          <p className="paper__text paper__text_big-black">
            Последний город названный победителем <br />
            <span className="paper__last-named-city">{lastNamedCity ?? 'не найден :('}</span>
          </p>
          <PaperFooter>
            <ButtonMain onClick={handleButtonClick} text="Начать новую игру" />
          </PaperFooter>
        </PaperContent>
      </Paper>
    </SectionHero>
  );
}
