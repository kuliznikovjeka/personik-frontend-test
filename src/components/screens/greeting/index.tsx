import SectionHero from '../../../layouts/section-hero';
import ButtonMain from '../../button-main';
import ProgressBar from '../../progress-bar';
import { Paper, PaperContent, PaperFooter, PaperHeader } from '../../paper';
import { gameRules } from './data';
import { useAppDispatch } from '../../../store/hooks';
import { setIsPlaying } from '../../../store/game/slice';

export default function ScreenGreeting() {
  const dispatch = useAppDispatch();

  function handleClickButton() {
    dispatch(setIsPlaying(true));
  }

  return (
    <SectionHero>
      <Paper>
        <PaperHeader title="Игра в города на время" />
        <ProgressBar />
        <PaperContent>
          <div className="paper__body-greeting">
            <p className="paper__text">Цель: Назвать как можно больше реальных городов.</p>
            <ul className="paper__list">
              {gameRules.map(rule => (
                <li key={rule.id} className="paper__item">
                  {rule.text}
                </li>
              ))}
            </ul>
          </div>
          <PaperFooter>
            <ButtonMain onClick={handleClickButton} text="Начать игру" />
          </PaperFooter>
        </PaperContent>
      </Paper>
    </SectionHero>
  );
}
