import SectionHero from '../../../layouts/section-hero';
import CountdownTimer from '../../countdown-timer';
import FormCities from '../../form/form-cities';
import ProgressBar from '../../progress-bar';
import MessagesArea from '../../paper/messages-area';
import { Paper, PaperHeader, PaperFooter, PaperContent } from '../../paper/index';
import { useAppSelector } from '../../../store/hooks';
import { selectDataGame } from '../../../store/selectors';

export default function ScreenPlaying() {
  const { isUserQueue } = useAppSelector(selectDataGame);

  const queue = isUserQueue ? 'Сейчас Ваша очередь' : 'Сейчас очередь соперника';

  return (
    <SectionHero>
      <Paper>
        <PaperHeader queue={queue}>
          <CountdownTimer />
        </PaperHeader>
        <ProgressBar />
        <PaperContent>
          <MessagesArea />
          <PaperFooter>
            <FormCities />
          </PaperFooter>
        </PaperContent>
      </Paper>
    </SectionHero>
  );
}
