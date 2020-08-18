// @flow
import React from 'react';
import { useTranslation } from 'react-i18next';

import './PrivacyPolicyContainer.scss';

const PurchaseTermsContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy">
      <div className="privacy-policy__container">
        <div className="privacy-policy__header">{t('PRIVACY_POLICY')}</div>
        <div className="privacy-policy__text">
          <p>Våre forpliktelser overfor deg!</p>
          <p>Du står i fokus, og dine personopplysninger er trygge hos oss.</p>
          <p>
            Du har kontroll over de personopplysningene vi har lagret, og har du
            noen spørsmål, eller ønsker at vi sletter din data, tar du kontakt
            med oss på{' '}
            <a href="mailto:hei@onalive.no" className="purchase-terms__link">
              hei@onalive.no
            </a>
          </p>
          <p>
            Sammen med valget av produkter (arrangementer, distanser og
            tilleggsprodukter), som du til enhver tid har foretatt gjennom
            Onalive sin påmeldingsplattform utgjør dette dokumentet hele
            avtalegrunnlaget mellom Onalive og deg.
          </p>
          <p>
            I det følgende beskrives de tiltak vi har iverksatt for å gjøre din
            online påmelding og betaling til en god opplevelse som er 100%
            risikofri.
          </p>
          <div className="privacy-policy__block-title">Generelt</div>
          <p>
            Onalive utvikler og driver påmeldings- og betalingssystemer for egne
            og andre selskapers publikumsarrangementer. Alle arrangementer som
            formidles igjennom Onalive blir tydelig merket med arrangør. Når du
            melder deg på som deltaker ved et arrangement via Onalive sin
            plattform samtykker du til at Onalive og det arrangementet du kjøper
            billett til, kan sende meldinger til deg via post, e-post og SMS om
            dette arrangementet, og andre arrangementer som er nærliggende til
            det du har kjøpt billett til. Du forplikter deg til å sørge for at
            dine kontaktopplysninger er oppdaterte til enhver tid.
          </p>
          <div className="privacy-policy__block-title">Betaling</div>
          <p>
            Onalive benytter Bambora og Ultimat Sport som betalingsplattform.
            Gjennom Bambora kan du betale med Vipps, bankkort, faktura og/eller
            kredittkort. Mer informasjon om Bambora finner du her (
            <a
              href="https://www.bambora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="purchase-terms__link"
            >
              www.bambora.com
            </a>
            ). Og her finner du mer informasjon om Ultimate Sport (
            <a
              href="https://www.ultimatesportservice.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="purchase-terms__link"
            >
              https://www.ultimatesportservice.com/
            </a>
            )
          </p>
          <p>
            Onalive kan ikke avkreves tilbakebetaling eller gjøres
            erstatningspliktig for det innbetalte beløpet og eventuelle
            følgekostnader forbundet med avlysning av arrangementet du kjøper
            billett til, om det ikke er ONA Live som står som arrangør. Dette
            omfatter også eventuelle mangler i leveringen av produkter du kjøper
            i tilknytning til arrangementene. Det ytes således ingen produkt-
            eller leveringsgaranti ovenfor deg, uansett hvilken betalingsmetode
            vedkommende har benyttet. Krav må rettes til arrangør av
            arrangementet.
          </p>
          <p>
            Onalive forbeholder seg retten til å rettsforfølge deltakeren i
            tilfelle vedkommende fremmer en urettmessig innsigelse mot dennes
            transaksjon før, under eller etter at arrangementet finner sted. Det
            er deltakerens ansvar å gjøre seg kjent med at Bambora eller
            Ultimate Sport utfører betalingstransaksjonen på vegne av
            arrangementet formidlet via Onalive, samt at deltakeren er
            erstatningspliktig for direkte, såvel som indirekte, kostnader som
            påføres Onalive og/eller arrangementet i tilfelle deltakeren fremmer
            en urettmessig innsigelse mot betalingstransaksjonen.
          </p>
          <div className="privacy-policy__block-title">
            Angrerett og refusjon
          </div>
          Påmelding til arrangementer formidlet av Onalive er bindende og kan
          ikke refunderes via Onalive. For eventuelle arrangementspesifikke
          regler som gjelder videreformidling/salg av påmelding, overføring til
          andre av arrangørens arrangementer og refusjon henvises det til
          arrangementets hjemmeside hvor arrangør i et slikt tilfelle tar hånd
          om henvendelsen.
          <div className="privacy-policy__block-title">
            Data- og betalingssikkerhet
          </div>
          <p>
            Onalive henter inn og oppbevarer alle persondata som behandles på
            vegne av arrangementet i systemer sikret med SSL/TSL-kryptert
            kommunikasjon. Onalives påmeldings- og betalingsplattform OnReg har
            PCI-sertifisering og sjekkes månedlig av TrustKeeper.
          </p>
          <p>Onalive lagrer ingen data fra betalingskort.</p>
          <div className="privacy-policy__block-title">Databehandling</div>
          <p>
            Onalives behandling av persondata er underlagt reglene i
            personvernlovgivningen. Onalive behandler persondata på vegne av
            arrangementet med det formål at arrangementet kan selge påmeldinger
            og motta online betalinger til arrangementet. Onalive vil på vegne
            av arrangementet innhente nødvendig informasjon for at Onalive skal
            kunne levere den solgte påmeldingen til deg i sin helhet, herunder
            levering av deltakerinformasjon (trykt og digitalt), levering av
            billett, samt levering av deltakerens resultat (f.eks. tid og
            plassering) på en eller flere av følgende plattformer: trykte
            resultatlister, trykte diplomer, hjemmesider, sosiale medier,
            smarttelefon-apper, e-post og SMS.
          </p>
          <p>
            Persondata innhentet av Onalive på vegne av arrangementet gis ikke
            videre til tredjepart, med mindre dette aktivt aksepteres av
            deltakeren i forbindelse med datavalg på påmeldingsskjemaet for
            arrangementet.
          </p>
          <p>
            Persondata som behandles av Onalive på vegne av arrangementet kan
            eksempelvis omfatte (men er ikke begrenset til):
          </p>
          <ul className="privacy-policy__list">
            <li>Distanse (til resultatliste og deltakerinformasjon)</li>
            <li>Nasjonalitet (til resultatliste og kommunikasjonsspråk)</li>
            <li>
              For- og etternavn (til resultatliste, deltakerinformasjon og
              levering av startnummer)
            </li>
            <li>Kjønn (til resultatliste aldersklasseberegning)</li>
            <li>Fødselsdato (til resultatliste aldersklasseberegning)</li>
            <li>
              Klubb og/eller lag (til resultatliste og deltakerinformasjon)
            </li>
            <li>
              Tidligere resultater eller forventet tid (til plassering i korrekt
              startgruppe)
            </li>
            <li>
              Adresse, postnummer, by og land (til deltakerinformasjon og
              levering av startnummer)
            </li>
            <li>
              Produktvalg: f.eks. t-skjortestørrelse, veldedighetsdonasjoner,
              transport, hotell e.l.
            </li>
            <li>
              Interesser: f.eks interesser innenfor ulike arrangementer,
              produkter, eller lignende
            </li>
            <li>Samtykkevalg: f.eks. nyhetsbrev, tredjeparts tilbud e.l.</li>
          </ul>
          <p>
            Onalive og arrangementet har rett til å trykke ovenfor nevnte
            informasjon på deltakermateriale som er nødvendig for utførelsen av
            arrangementet, herunder eksempelvis startnummer, navnekort,
            deltakermappe, bagasjeetiketter, sykkelmerking eller lignende.
            Onalive og arrangementet har rett til å benytte persondata til
            statistiske og tekniske formål for å forenkle brukeropplevelsen og
            kjenne igjen brukeres identitet internt på Onalives plattformer.
          </p>
          <div className="privacy-policy__block-title">
            Oppbevaring og hosting av persondata
          </div>
          <p>
            Persondata som behandles av Onalive på vegne av arrangementet,
            oppbevares i Onalives cloud som hostes på Amazon (EU).
          </p>
          <div className="privacy-policy__block-title">
            Presentasjon og sletting av persondata
          </div>
          <p>
            For løp og aktivitetsarrangementer, vil din persondata presenteres
            på deltaker- og resultatlister på vegne av arrangementet, herunder
            begrenset til nødvendige data som arrangør trenger for å utføre dets
            arrangement. Dette vil typisk omfatte (men er ikke begrenset til);
          </p>
          <ul className="privacy-policy__list">
            <li>Nasjonalitet</li>

            <li>For- og etternavn</li>

            <li>Distanse</li>

            <li>Alder og aldersklasse (kjønn og aldersintervall)</li>

            <li>Startgruppe og startnummer</li>

            <li>Klubb og/eller lag</li>

            <li>By</li>

            <li>Region/land</li>

            <li>Tider (starttid, mellomtider og sluttid)</li>

            <li>Plasseringer (overalt, kjønn og aldersklasse)</li>

            <li>
              Status (ikke startet, startet, fullført, slettet eller
              diskvalifisert)
            </li>
          </ul>
          <p>
            Presenterte persondata på deltaker- og resultatlister lagres på
            permanent basis uten slettemulighet, med henvisning til unntakene i
            personvernlovgivningen for samfunnsrelaterte historiske og
            statistiske data.
          </p>
          <div className="privacy-policy__block-title">Bilder og video</div>
          <p>
            På alle arrangementene vil det bli tatt bilder og/eller video. Dette
            materialet er tilgjengelig på lik linje med presentasjon av
            resultatdata, omtalt i tidligere nevnte avsnitt. Onalive forbeholder
            seg retten til å fjerne bilde- og/eller videomateriale uten
            forvarsel, om disse ikke overholder normale etiske retningslinjer
            for hva som kan vises offentlig. Bilder tatt på arrangementet kan
            bli benyttet i markedsføring. Arrangør av arrangement er ansvarlig
            for å innhente samtykke av deltaker til at bilder hvor tre eller
            færre deltakere fremkommer i fokus. I etterkant av arrangementet kan
            deltaker trekke tilbake sitt samtykke ved å kontakte arrangør
            direkte.
          </p>
          <div className="privacy-policy__block-title">
            Tekniske og organisatoriske sikkerhetstiltak
          </div>
          <p>
            Onalive har ansvaret for at gjennomføre påkrevd tekniske og
            organisatoriske tiltak for å sikre et passende sikkerhetsnivå.
            Tiltakene skal gjennomføres med hensyntagen til det aktuelle
            tekniske nivået, implementeringskostnadene og den aktuelle
            behandlingens karakter, omfang, sammensetning og formål samt risiko
            av ulik sannsynlighet og alvorlighetsgrad for fysiske personers
            rettigheter og frihetsrettigheter. Onalive tar bl.a. hensyn til
            kategorien av personopplysninger ved fastleggelsen av disse
            tiltakene. Onalive gjennomfører passende tekniske og organisatoriske
            tiltak på en slik måte at behandlingen av personopplysninger
            oppfyller kravene i den til enhver tid gjeldende
            personvernlovgivningen.
          </p>
          <div className="privacy-policy__block-title">Medarbeiderforhold</div>
          <p>
            Onalive skal påse at medarbeidere som behandler personopplysninger
            har forpliktet seg til fortrolighet eller er underlagt en passende
            lovbestemt taushetsplikt. Onalive påser at tilgangen til
            personopplysninger begrenses til de medarbeiderne som trenger å
            behandle personopplysninger for å kunne oppfylle
            leveringsforpliktelsene ovenfor deltakeren i henhold til dette
            dokumentet. Onalive påser at medarbeidere som behandler
            personopplysninger om deltakeren kun behandler disse i samsvar med
            dette dokumentet.
          </p>
          <div className="privacy-policy__block-title">Sikkerhetsbrudd</div>
          <p>
            Onalive informerer uten unødig forsinkelse deltakeren om brudd på
            persondatasikkerheten som potensielt kan føre til vilkårlig eller
            ulovlig tilintetgjørelse, tap, endring, uautorisert videreformidling
            av eller adgang til personopplysningene som behandles for
            deltakeren. Videre skal Onalive bistå deltakeren med å sikre
            overholdelse av deltakerens forpliktelser til å (i) dokumentere alle
            brudd på persondatasikkerheten, (ii) anmelde eventuelle brudd på
            persondatasikkerheten til kompetent(e) tilsynsmyndighet(er) og (iii)
            underrette de registrerte om slike brudd på persondatasikkerheten.
          </p>
          <div className="privacy-policy__block-title">
            Bistand og dokumentasjon for overholdelse av forpliktelser
          </div>
          <p>
            Onalive skal på deltakerens anmodning gi deltakeren tilstrekkelig
            informasjon til at deltakeren kan påse at kravene i den gjeldende
            personvernlovgivningen overholdes. Onalive skal videre gi tillatelse
            og bidra til eventuelle revisjoner, herunder inspeksjoner som
            foretas av en revisor som er autorisert til dette av deltakeren.
            Onalive skal straks underrette deltakeren hvis Onalive mener at en
            henvendelse i henhold til det ovenfor nevnte er i strid med den
            gjeldende personvernlovgivningen. Onalive bistår deltakeren i
            påkrevd og rimelig omfang med oppfyllelsen av deltakerens
            forpliktelser ved behandling av personopplysninger i henhold til
            gjeldende personvernlovgivning som er omfattet av dette dokumentet,
            herunder ved:
          </p>
          <ul className="privacy-policy__list">
            <li>
              besvarelse av henvendelser fra de registrerte om utøvelse av
              disses rettigheter
            </li>

            <li>konsekvensanalyser</li>

            <li>forutgående høringer fra tilsynsmyndighetene.</li>
          </ul>
          <div className="privacy-policy__block-title">
            Databehandling utenfor avtalen
          </div>
          <p>
            Onalive kan behandle personopplysninger utenfor dette dokument i
            tilfelle det kreves av EU-retten eller nasjonal rett, som Onalive er
            underlagt. Ved behandling av personopplysninger utenfor avtalen skal
            Onalive underrette deltakeren om årsaken til det. I så fall skal
            Onalive dog først, i det omfang det er lovlig, underrette deltakeren
            om et slikt pålegg, og i det omfang det er mulig gi deltakeren
            mulighet til å fremme innsigelser mot dette.
          </p>
          <div className="privacy-policy__block-title">Cookies</div>
          <p>
            Vi bruker cookies til å sikre og forbedre din brukeropplevelse samt
            registrere besøksstatistikk. Vi benytter cookies som gjenkjenner deg
            som bruker hvis du senere skal melde deg på et annet arrangement på
            Onalives plattform, samt cookies som sikrer at din brukersesjon ikke
            kan overtas av andre med tanke på hacking og hijacking.
          </p>
          <div className="privacy-policy__block-title">Spørsmål og support</div>
          <p>
            Alle spørsmål som vedrører praktiske ting omkring arrangementet skal
            stilles til arrangøren av arrangementet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTermsContainer;
