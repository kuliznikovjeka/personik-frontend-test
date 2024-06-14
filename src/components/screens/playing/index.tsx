import SectionHero from '../../../layouts/section-hero';
import CountdownTimer from '../../countdown-timer';
import FormCities from '../../form/form-cities';
import ProgressBar from '../../progress-bar';
import MessagesArea from '../../paper/messages-area';
import { Paper, PaperHeader, PaperFooter, PaperContent } from '../../paper/index';

export default function ScreenPlaying() {
  return (
    <SectionHero>
      <Paper>
        <PaperHeader queue="Сейчас очередь соперника">
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
