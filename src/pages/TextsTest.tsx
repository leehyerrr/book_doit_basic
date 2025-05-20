import * as D from '../data';
import { Title, Subtitle, Summary, Paragraph } from '../components';

const paragraphs = D.makeArray(2).map(D.randomParagraphs).join('\n\n');
const summary = D.makeArray(3).map(D.randomSentence).join('\n');

const DD = ({ numberOfLines }: { numberOfLines: number }) => {
  const classes = `line-clamp-${numberOfLines}`;
  return (
    <div className={classes}>
      Uzeiw sasjiv ri kob ase roble edeogi ca zod fulitu woptonrac ragheptu evaulucet areheh uk
      gibugvom ta osunahit. Toso zip tajzole occur beljeer lorge telkibu libkeuk po jicekasok agkale
      ziduf do maw. Iv ba tine fat hufuwto epdeko femo pod luvot isra licnan suwmuv nipgefhe jeme do
      hictuzo. Vud ga kolerte litovje zavup fuvaono ip sencom uh higos te ad tizmo. Puumu awlo
      wewkos mur ut cudisu ratmev jufej tagwazhe koemuzev vikcam onputuf deknazbuv ri ebazar
      hubdecu. Wihdavsav to ihdo wopob atikotad zuukodih naniv tujig wi fiiwami ilazto begoko abo
      weh soreset vimirud deso puzip. Savubivu varid na ejbebo hojif uwahatu cegevah dusuti za vavju
      victueta ciuhib ka elwazfe ecosikez isnahgov asucu. Ge hobvimcap nopicuc sozmehi mo jegga
      leowsa hehiwipe tefjun hiz bum akoci himlir loabu se wo mubup. Homtiha kontufeb neltobug
      jidakeken ri apamo lotpezgik wak dikoz aduiw omo asu liawewi razju jih.Uzeiw sasjiv ri kob ase
      roble edeogi ca zod fulitu woptonrac ragheptu evaulucet areheh uk gibugvom ta osunahit. Toso
      zip tajzole occur beljeer lorge telkibu libkeuk po jicekasok agkale ziduf do maw. Iv ba tine
      fat hufuwto epdeko femo pod luvot isra licnan suwmuv nipgefhe jeme do hictuzo. Vud ga kolerte
      litovje zavup fuvaono ip sencom uh higos te ad tizmo. Puumu awlo wewkos mur ut cudisu ratmev
      jufej tagwazhe koemuzev vikcam onputuf deknazbuv ri ebazar hubdecu. Wihdavsav to ihdo wopob
      atikotad zuukodih naniv tujig wi fiiwami ilazto begoko abo weh soreset vimirud deso puzip.
      Savubivu varid na ejbebo hojif uwahatu cegevah dusuti za vavju victueta ciuhib ka elwazfe
      ecosikez isnahgov asucu. Ge hobvimcap nopicuc sozmehi mo jegga leowsa hehiwipe tefjun hiz bum
      akoci himlir loabu se wo mubup. Homtiha kontufeb neltobug jidakeken ri apamo lotpezgik wak
      dikoz aduiw omo asu liawewi razju jih. litovje zavup fuvaono ip sencom uh higos te ad tizmo.
      Puumu awlo wewkos mur ut cudisu ratmev jufej tagwazhe koemuzev vikcam onputuf deknazbuv ri
      ebazar hubdecu. Wihdavsav to ihdo wopob atikotad zuukodih naniv tujig wi fiiwami ilazto begoko
      abo weh soreset vimirud deso puzip. Savubivu varid na ejbebo hojif uwahatu cegevah dusuti za
      vavju victueta ciuhib ka elwazfe ecosikez isnahgov asucu. Ge hobvimcap nopicuc sozmehi mo
      jegga leowsa hehiwipe tefjun hiz bum akoci himlir loabu se wo mubup. Homtiha kontufeb neltobug
      jidakeken ri apamo lotpezgik wak dikoz aduiw omo asu liawewi razju jih.
    </div>
  );
};

export default function TextsTest() {
  return (
    <div>
      <Title>TextsTest</Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <Subtitle className="text-blue-400">{D.randomSentence()}</Subtitle>
        <p className="text-xl italic text-center text-gray-900 text-bold">{D.randomName()}</p>
        <Paragraph numberOfLines={5}>{paragraphs}</Paragraph>
        <div>
          <h1>ddd</h1>
          <DD numberOfLines={7} />
        </div>
        <Summary className="text-center text-gray-500">{summary}</Summary>
        <p className="text-center text-pink-400">{D.randomDayMonthYear()}</p>
      </div>
    </div>
  );
}
